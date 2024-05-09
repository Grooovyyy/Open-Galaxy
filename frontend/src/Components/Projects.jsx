import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  // Define products
  const products = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
    { id: 6, name: "Project 6" },
    { id: 7, name: "Project 7" },
    { id: 8, name: "Project 8" },
    { id: 1, name: "Project 9" },
    { id: 2, name: "Project 10" },
    { id: 3, name: "Project 11" },
    { id: 4, name: "Project 12" },
    { id: 5, name: "Project 13" },
    { id: 6, name: "Project 14" },
    { id: 7, name: "Project 15" },
    { id: 8, name: "Project 16" },
    // Add more Projects as needed
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Products per page
  const productsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calculate indexes of products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <button className="button_add">Add Project</button>
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          {/* Loop through current products */}
          {currentProducts.map(product => (
            <div key={product.id} className="row p-2 rounded mt-2">
              <div className="col-md-3 mt-1">
                {/* Product image */}
                
                <img className="img-fluid img-responsive rounded product-image" src="Open Galaxy.png" alt='IMAGE' />
              </div>
              
              <div className="col-md-6 mt-1">
                <h5>{product.name}</h5>
                {/* Add other product details here */}
                <div className="d-flex flex-row">
          </div>

            
        </div>
              
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                {/* Buttons for product actions */}
                <div className="d-flex flex-column mt-4">
                <a href="/ProductPage">
        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Details</button>
        </a>
        <a href="/ProjectSignup">
        <button type="submit" className="btn btn-success" style={{ backgroundColor: '#067a75', color: '#091618', borderColor: '#091618'}}>Sign Up</button>
        </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination buttons */}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary mr-2" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button className="btn btn-primary" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Projects;
