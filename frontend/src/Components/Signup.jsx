import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup'
import signup from "../assets/login.gif"
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!').required('Required'),
})

const Signup = () => {

    const navigate = useNavigate();

    const SignupForm = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            createdAt: new Date()
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:3000/userData/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                enqueueSnackbar('Signup Successful', {
                  variant: 'success', anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  }
                });
                navigate('/Login')
              } else {
                enqueueSnackbar('failed to Signup', {
                  variant: 'error', anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  }
                });
              }
        },
        validationSchema: SignupSchema,
    });

    return (
        <div style={{backgroundImage: `url(${signup})`, backgroundSize:'cover', height:'91vh'}}>
            {/* Section: Design Block */}
            <section className="text-center text-lg-start bg-tertiary">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                    }}
                />
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center d-flex justify-content-center">
                        
                            <div
                                className="card signup-card "
                            >
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-4" style={{fontFamily: 'sans-serif', color:'darkblue'}}>Sign Up Now</h2>
                                    <form onSubmit={SignupForm.handleSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                    
                                                    <input
                                                        type="text"
                                                        id="fname"
                                                        onChange={SignupForm.handleChange}
                                                        value={SignupForm.values.fname}
                                                        className="form-control mt-4"
                                                        placeholder="First Name"
                                                        style={{fontFamily: 'sans-serif', fontWeight:'bold' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="lname"
                                                        onChange={SignupForm.handleChange}
                                                        value={SignupForm.values.lname}
                                                        className="form-control mt-4"
                                                        placeholder="Last Name"
                                                        style={{fontFamily: 'sans-serif', fontWeight:'bold' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline">
                                            
                                            <input
                                                type="email"
                                                id="email"
                                                onChange={SignupForm.handleChange}
                                                value={SignupForm.values.email}
                                                className="form-control mt-4"
                                                placeholder="Email Address"
                                                style={{fontFamily: 'sans-serif', fontWeight:'bold' }}
                                            />
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4 fw-bold">
                                
                                            <input
                                                type="password"
                                                id="password"
                                                onChange={SignupForm.handleChange}
                                                value={SignupForm.values.password}
                                                className="form-control mt-4 inp"
                                                placeholder="Password"
                                                style={{fontFamily: 'sans-serif', fontWeight:'bold'}}
                                            />
                                        </div>
                                        {/* Checkbox */}
                                        
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn"
                                            style={{backgroundColor: 'darkblue', color:'white', fontFamily: 'sans-serif', fontWeight:'bold', width:"40%", }}
                                        >
                                            Sign Up
                                        </button>
                                        
                                    </form>
                                </div>
                            </div>
                        
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
        </div>

    )
}

export default Signup