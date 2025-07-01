import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUsersQuery, useLoginUserMutation } from '../../Redux/services/Userservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const { data, isLoading, isError } = useGetUsersQuery({ page: 0, size: 10 });

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: '',
      password: '',
    },
    validationSchema: Yup.object({
      usernameOrEmail: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      if (!data || !data.data || !data.data.users) {
        toast.error('User data not available');
        return;
      }

      const foundUser = data.data.users.find(
        user =>
          user.email === values.usernameOrEmail ||
          user.userName === values.usernameOrEmail
      );
console.log(foundUser);
      if (foundUser?.twoFactorEnabled) {
        localStorage.setItem("pendingLogin", values.usernameOrEmail);
        toast.info('2FA is enabled, please verify');
        navigate("/2fa-method-login");
        return;
      }

      try {
        const response = await loginUser(values).unwrap();
        localStorage.setItem('accessToken', response.data.token.accessToken);
        localStorage.setItem('refreshToken', response.data.token.refreshToken);
        toast.success('Login successful!');
        navigate('/');
      } catch (error) {
        toast.error('Login failed. Check your credentials.');
      }
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;
;
  return (
    <div className='Auth'>
      <ToastContainer />
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="usernameOrEmail"
          name="usernameOrEmail"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.usernameOrEmail}
          placeholder='Username or Email'
        />
        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? (
          <div>{formik.errors.usernameOrEmail}</div>
        ) : null}

        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder='Password'
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <Link to="/forgot-password" style={{ alignSelf: 'flex-end' }}>Forgot Password?</Link>
        <button type="submit">Submit</button>
      </form>
      <div>Don't have an account? <Link to="/register">Register</Link></div>
    </div>
  );
}

export default Login;
