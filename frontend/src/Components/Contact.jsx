import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSnackbar } from 'notistack';
import './Contact.css';

const ContactPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className="contact-card" >    
      <section className="contact" id="contact">
        <div className="content">
          <div className="title">
            <span>Contact US</span>
          </div>
          <div className="text">{/* ... (contact details and icons) ... */}</div>
        </div>
      </section>

      <div className="container mt-1">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    console.log(values);

                    const res = await fetch("http://localhost:3000/feedback/add", { // Updated URL
                      method: 'POST',
                      body: JSON.stringify(values),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    });

                    console.log(res.status);
                    if (res.status === 201) { // Changed status check to match the server response
                      enqueueSnackbar("Message sent successfully", { variant: "success" });
                      resetForm();
                    } else {
                      enqueueSnackbar("Try Again", { variant: "warning" });
                    }
                  }}
                >
                  {formik => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="name" className='text-secondary'>Name:</label>
                        <Field
                          style={{  width: '100%', padding: '10px', border: '2px solid #067a75', borderRadius: '5px', backgroundColor: 'transparent', color: '#fff', }}
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          name="name"
                          id="name"
                        />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className='text-secondary'>Email:</label>
                        <Field
                          style={{ width: '100%', padding: '10px', border: '2px solid #067a75', borderRadius: '5px', backgroundColor: 'transparent', color: '#fff', }}
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          name="email"
                          id="email"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className='text-secondary'>Phone Number:</label>
                        <Field
                          style={{ width: '100%', padding: '10px', border: '2px solid #067a75', borderRadius: '5px', backgroundColor: 'transparent', color: '#fff', }}
                          type="text"
                          className="form-control"
                          placeholder="Enter your phone number"
                          name="phone"
                          id="phone"
                        />
                        <ErrorMessage name="phone" component="div" className="text-danger" />
                      </div>    
                      <div className="form-group">
                        <label htmlFor="message" className='text-secondary'>Message</label>
                        <Field
                          style={{ width: '100%', padding: '10px', border: '2px solid #067a75', borderRadius: '5px', backgroundColor: 'transparent', color: '#fff', }}
                          type="text"
                          className="form-control"
                          placeholder="Enter Project Code"
                          name="message"
                          id="message"
                        />
                        <ErrorMessage name="message" component="div" className="text-danger" />
                      </div>
                      <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
