import { useFormik } from 'formik';
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import { FaRegUserCircle } from "react-icons/fa";
function Profile() {
     const formik = useFormik({
        initialValues: {
          name: '',
          surname: '',
          username: '',
          email: '',
      
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .required("Name field cannot be empty.")
            .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces."),
    
          surname: Yup.string()
            .required("Surname field cannot be empty.")
            .matches(/^[a-zA-Z\s]+$/, "Surname must contain only letters and spaces."),
    
          username: Yup.string()
            .required("Username field cannot be empty.")
            .min(3, "Username must be at least 3 characters long.")
            .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores."),
    
          email: Yup.string()
            .required("Email field cannot be empty.")
            .email("Please enter a valid email address."),
    
      
        }),
    
        onSubmit: async (values, { setErrors }) => {
          try {
            // await addUser(values).unwrap();
              toast.success("Edit Profile Succesfluy");
        setTimeout(()=>{
            formik.resetForm();
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
    return (
        <div>
            <div className="profile-topo">
                <div>
                   <span> <FaRegUserCircle /></span>
                    <h2>Ebru Bendeliyeva</h2>
                </div>
                <div className="profile-info">
                    <div>
                        <span>Name</span>
                        <span>Ebru</span>
                    </div>
                    <div>
                        <span>SurName</span>
                        <span>Ebru</span>
                    </div>
                    <div>
                        <span>UserName</span>
                        <span>Ebru</span>
                    </div>
                    <div>
                        <span>Email</span>
                        <span>ebrubendeliyeva@gmail.com</span>
                    </div>

                </div>

            </div>
            <div className="profile-edit">
                <h2>Edit Profile</h2>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder='Name'
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}

                    <input
                        id="surname"
                        name="surname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.surname}
                        placeholder='Surname'
                    />
                    {formik.touched.surname && formik.errors.surname && (
                        <div className="error">{formik.errors.surname}</div>
                    )}

                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        placeholder='Username'
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="error">{formik.errors.username}</div>
                    )}

                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='Email'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}

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
        </div>
    )
}

export default Profile