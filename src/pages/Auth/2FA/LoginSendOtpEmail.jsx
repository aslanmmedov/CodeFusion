import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLoginSendOtpEmailMutation } from '../../../redux/services/userservice';


function LoginSendOtpEmail() {
  const navigate = useNavigate();
let [loginSendOtpEmail] = useLoginSendOtpEmailMutation()
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: async (values) => {
console.log(values);
     await loginSendOtpEmail(values.email);

      toast.success('Verification link sent to your email');
   setTimeout(() => {
       navigate('/2fa-verify-otp-email');
   }, 3000);
    },
  });

  return (
    <div className='Auth'>
      <ToastContainer />
      <h2>Verify via Email</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Send Link</button>
      </form>
    </div>
  );
}

export default LoginSendOtpEmail;
