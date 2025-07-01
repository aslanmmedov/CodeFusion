import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LoginSendOtpPhone() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number format")
        .required('Phone number is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Burada API çağırışı ilə telefon nömrəsinə OTP göndərilir
        // await sendPhoneOtp(values.phoneNumber);

        toast.success('OTP sent to your phone number');
        navigate('/verify-phone-otp');
      } catch (error) {
        toast.error('Failed to send OTP. Please try again.');
      }
    },
  });

  return (
    <div className='Auth'>
      <ToastContainer />
      <h2>Verify via Phone</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="+994501234567"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}

        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
}

export default LoginSendOtpPhone;
