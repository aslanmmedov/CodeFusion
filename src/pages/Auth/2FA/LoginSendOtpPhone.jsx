import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLoginSendOtpPhoneMutation } from '../../../redux/services/userservice';

function LoginSendOtpPhone() {
  const navigate = useNavigate();
let [LoginSendOtpPhone] = useLoginSendOtpPhoneMutation()
  const formik = useFormik({
    initialValues: {
      number: '',
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number format")
        .required('Phone number is required'),
    }),
    onSubmit: async (values) => {
      try {
       
        await LoginSendOtpPhone(values);

        toast.success('OTP sent to your phone number');
        navigate('/2fa-verify-otp-phone');
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
          id="number"
          name="number"
          type="text"
          placeholder="+994501234567"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}

        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
}

export default LoginSendOtpPhone;
