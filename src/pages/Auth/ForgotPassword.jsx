import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useForgotPasswordMutation } from '../../redux/services/userservice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
let [forgotPassword] = useForgotPasswordMutation()
    const formik = useFormik({
        initialValues: {

            email: '',

        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Email field cannot be empty.")
                .email("Please enter a valid email address."),

        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                await forgotPassword(values)
                console.log("Password reset email sent successfully.");
            } catch (error) {
                console.error("Error sending password reset email:", error);
                toast.error("Failed to send password reset email. Please try again.");
                
            }


        },
    });

    return (


        <div className='Auth'>
            <ToastContainer />
            <h2>Forgot Password</h2>
            <form onSubmit={formik.handleSubmit}>



                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='Email'
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}


                
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default ForgotPassword