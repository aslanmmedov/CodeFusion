import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.scss';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TwoFAMethodLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      method: '',
    },
    validationSchema: Yup.object({
      method: Yup.string().required('Please select a verification method'),
    }),
    onSubmit: (values) => {
      if (values.method === 'email') {
        navigate('/2fa-send-otp-email')

      } else if (values.method === 'phone') {
        navigate('/2fa-send-otp-phone')
      }
      else {
        toast.error('Please select a valid verification method');
      }
    }
  });

  return (
    <div className='Auth'>
      <ToastContainer />
      <h2>2FA Verification</h2>

      <form onSubmit={formik.handleSubmit}>

        <label style={{ alignSelf: "center", display: "flex", gap: "10px" }}>
          <input
            type="radio"
            name="method"
            value="email"
            onChange={formik.handleChange}
            checked={formik.values.method === 'email'}
          />
          Verify via Email
        </label>
        <span style={{ display: 'block', width: '100%', textAlign: 'center', color: "#888" }}>or</span>
        <label style={{ alignSelf: "center", display: "flex", gap: "10px" }}>
          <input

            type="radio"
            name="method"
            value="phone"
            onChange={formik.handleChange}
            checked={formik.values.method === 'phone'}
          />
          Verify via Phone (OTP)
        </label>

        {formik.touched.method && formik.errors.method ? (
          <div>{formik.errors.method}</div>
        ) : null}

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default TwoFAMethodLogin;
