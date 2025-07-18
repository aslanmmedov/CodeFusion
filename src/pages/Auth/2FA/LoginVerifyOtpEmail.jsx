import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLoginSendOtpVerifyMutation } from '../../../redux/services/userservice';


function LoginVerifyEmailOtp() {
    const navigate = useNavigate();

    let [loginSendOtpVerify] = useLoginSendOtpVerifyMutation()
    let userEmail = localStorage.getItem("pendingLogin")
    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .length(6, 'OTP must be 6 digits')
                .required('OTP is required'),
        }),
        onSubmit: async (values) => {
            values.email = userEmail
            const response = await loginSendOtpVerify(values).unwrap();
            console.log(response);
            if (success) {
                // Məsələn tokenlər gəldisə:
                localStorage.setItem('accessToken', 'dummy-access-token');
                localStorage.setItem('refreshToken', 'dummy-refresh-token');
                toast.success('OTP verified successfully!');
                navigate('/');
            } else {
                toast.error('Invalid or expired OTP code');
            }
        }
    });

    return (
        <div className='Auth'>
            <ToastContainer />
            <h2>Email OTP Verification</h2>

            <form onSubmit={formik.handleSubmit}>
                <input
                    id="otp"
                    name="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.otp}
                />
                {formik.touched.otp && formik.errors.otp ? (
                    <div>{formik.errors.otp}</div>
                ) : null}

                <button type="submit">Verify</button>
            </form>
        </div>
    );
}

export default LoginVerifyEmailOtp;
