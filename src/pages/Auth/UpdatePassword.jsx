import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdatePasswordMutation, useVerifyForgotPasswordMutation } from '../../redux/services/userservice';




function UpdatePassword() {
    let { userId, resetToken } = useParams()
    let [verifyForgotPassword] = useVerifyForgotPasswordMutation()
    let [UpdatePassword] = useUpdatePasswordMutation()
    const [isVerified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    let navigate = useNavigate()
    const VerifyForgotPasw = async () => {
        try {
             const response = await verifyForgotPassword({ userId, resetToken }).unwrap();
            console.log("Forgot password verified successfully:", response);
            setIsVerified(true);
        } catch (error) {
            console.error("Error verifying forgot password:", error);
            setError("Link expired or invalid.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        VerifyForgotPasw()
    }, [])





    const formik = useFormik({
        initialValues: {

            password: '',
            passwordConfirm: '',
        },
        validationSchema: Yup.object({


            password: Yup.string()
                .required("Password field cannot be empty.")
                .min(8, "Password must be at least 8 characters long.")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
                .matches(/[0-9]/, "Password must contain at least one digit.")
                .matches(/\W/, "Password must contain at least one special character."),

            passwordConfirm: Yup.string()
                .required("Password confirmation field cannot be empty.")
                .oneOf([Yup.ref("password"), null], "Password and confirmation must match.")
        }),

        onSubmit: async (values, { setErrors }) => {
            try {
                values.userId = userId;
                values.resetToken = resetToken;
                await UpdatePassword(values)
                console.log(values);
                toast.success("Password updated successfully.");
                setTimeout(() => {
                   navigate('/login')
                }, 4000);
            } catch (error) {
                if (error?.data?.errors) {
                    const backendErrors = error.data.errors;
                    const formErrors = {};
                    for (const key in backendErrors) {
                        formErrors[key] = backendErrors[key][0];
                    }
                    setErrors(formErrors);
                } else if (error?.data?.message) {
                    toast.error(error.data.message);
                } else {
                    toast.error("Server error. Please try again later.");
                }
            }
        }
    });
    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <h2>Verifying link...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ maxWidth: '400px', margin: '50px auto' }}>
                <h2>{error}</h2>
            </div>
        );
    }

    if (!isVerified) return null;


    return (
        <div className='Auth'>
            <h2>Update Password</h2>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder='Password'
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="error">{formik.errors.password}</div>
                )}

                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                    placeholder='Confirm Password'
                />
                {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                    <div className="error">{formik.errors.passwordConfirm}</div>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdatePassword;
