import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

const AddContactSchema = Yup.object().shape({});

const ContactUs = () => {

  const navigate = useNavigate();

  const [selUser, setSelUser] = useState("");


  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
    },
    onSubmit: async (values, action) => {
      values.image = selUser;
      console.log(values);


      const res = await fetch('http://localhost:3000/contacts/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar('Thankyou for contacting us', {
          variant: 'success', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        });
        navigate('/Project')
      } else {
        enqueueSnackbar('failed to contact', {
          variant: 'error', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        });
      }
    },
    validationSchema: AddContactSchema
  }); 

  return (
    <>

      <div className="container-fluid bg-img-contactus">
        <div className="row ">
          <div className="card bg-light bg-opacity-25 ms-5 " style={{ width: "450px", border: "none", left: "250px", marginTop: "70px" }}>
            <div className="card-body">
              <h1 className=" mb-4 text-center fw-bold" style={{ fontFamily: "sans-serif",color:'#02084b' }}>Contact Us</h1>
              <form onSubmit={contactForm.handleSubmit}>

                <input type="text" placeholder='Enter name' id='name' onChange={contactForm.handleChange} value={contactForm.values.name} className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{ border: "none" }} />
                <input type="email" placeholder='Enter Email' id='email' onChange={contactForm.handleChange} value={contactForm.values.email} className='form-control mb-4 shadow py-2 px-4 text-white bg-dark  input-contactus bg-opacity-25' style={{ border: "none" }} />
                <input type="number" placeholder='Phone no.' id='phone_number' onChange={contactForm.handleChange} value={contactForm.values.phone_number} className='form-control mb-4 shadow py-2 px-4 text-white bg-dark input-contactus bg-opacity-25' style={{ border: "none" }} />

                <button type='submit' className="btn btn-primary btn-block py-2" style={{ borderRadius: "20px", backgroundColor: "#0d6efd", border: "none" }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs