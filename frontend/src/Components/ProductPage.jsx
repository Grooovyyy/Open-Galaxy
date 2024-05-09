import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSnackbar } from 'notistack';
import './ProductPage.css';

const ProductPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
    <div className='container'>
    <div className="left-column">
      <img data-image="black" src="images/black.png" alt="" />
      <img data-image="blue" src="images/blue.png" alt="" />
      <img data-image="red" className="active" src="images/red.png" alt="" />
    </div>
    {/* Right Column */}
    <div className="right-column">
      {/* Product Description */}
      <div className="product-description">
        <span className='text-secondary'>Title</span>
        <h1>Project Name</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellendus soluta omnis quo vero veritatis molestiae qui unde obcaecati odit.
        </p>
      </div>
      {/* Product Configuration */}
      <div className="product-configuration">
        </div> 
      </div>
      <div>
        <span></span>
        <a href="/ProjectSignup">
        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Sign Up</button>
        </a>
      </div>
    </div>

    <script>
        
    </script>
    </>
  );
};

export default ProductPage;
