import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Getstarted.css'
import {enqueueSnackbar} from "notistack"
import { useNavigate } from 'react-router-dom';

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
});

const SignupSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string().required('Required').oneOf([yup.ref('password')], 'Passwords must match'),
});

const GetStartedPage = () => {

  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSignup, setShowSignup] = useState(false);
  const images = ['https://png.pngtree.com/png-vector/20210531/ourmid/pngtree-internet-seo-marketing-data-login-page-concept-illustration-png-image_3389802.jpg', 'https://www.lonefircreative.com/hubfs/blog%20images/lone-fir-creative-Which-Digital-Marketing-Services-Are-Right-For-You.jpg', 'https://esolz.net/wp-content/uploads/2021/04/Digital-Marketing-Services.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
   
    onSubmit: async(values) => {
      console.log(values);

     const res = await fetch("http://localhost:3000/user/authenticate",{
      method:"POST",
      body:JSON.stringify(values),
      headers:{
        "Content-Type" :"application/json"
      }
     })
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("user loggedIn successfully", {variant:"success"})
        navigate("/Home")
      }else{
        enqueueSnackbar("somthing went wrong", {variant:"warning"})
      }
    },
    validationSchema: LoginSchema
  });

  const signupForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    
    onSubmit : async(values) => {
      console.log(values);

      const res = await fetch("http://localhost:3000/user/add",{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          "Content-Type" : "application/json"
        }

      })
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("User added successfully", {variant:"success"})
      }else{
        enqueueSnackbar("somthing worng", {variant:"warning"})
      }
    },
    validationSchema : SignupSchema
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <img src={images[currentImageIndex]} alt="Image" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <h3 className='text-white'>Login</h3>
                      <form onSubmit={loginForm.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={loginForm.values.email}
                            onChange={loginForm.handleChange}
                          />
                          {loginForm.errors.email && <div className="text-danger">{loginForm.errors.email}</div>}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={loginForm.values.password}
                            onChange={loginForm.handleChange}
                          />
                          {loginForm.errors.password && <div className="text-danger">{loginForm.errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Login</button>
                      </form>
                    </div>
                  </div>
                  {!showSignup && (
                    <div className="row mt-3">
                      <div className="col">
                        <button onClick={() => setShowSignup(true)} className="btn btn-link">Don't have an account? Signup</button>
                      </div>
                    </div>
                  )}
                  {showSignup && (
                    <div className="row mt-3">
                      <div className="col">
                        <h3 className='text-white'>Sign Up</h3>
                        <form onSubmit={signupForm.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              name="email"
                              value={signupForm.values.email}
                              onChange={signupForm.handleChange}
                            />
                            {signupForm.errors.email && <div className="text-danger">{signupForm.errors.email}</div>}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              value={signupForm.values.password}
                              onChange={signupForm.handleChange}
                            />
                            {signupForm.errors.password && <div className="text-danger">{signupForm.errors.password}</div>}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              value={signupForm.values.confirmPassword}
                              onChange={signupForm.handleChange}
                            />
                            {signupForm.errors.confirmPassword && <div className="text-danger">{signupForm.errors.confirmPassword}</div>}
                          </div>
                          <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Sign Up</button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
