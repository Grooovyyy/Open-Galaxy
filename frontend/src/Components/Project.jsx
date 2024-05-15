import React from 'react'
import { enqueueSnackbar } from 'notistack';
import header from '../assets/header.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(sessionStorage.getItem('user'));


  // const { category } = useParams();

  const fetchProject = async () => {
    const res = await fetch("http://localhost:3000/project/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    // if (category) {
    //   setServices(data.filter((ser) => ser.category === category));
    // } else {
    setProjects(data);
    // }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const displayProject = () => {
    return projects.map((pro) => (
      <div className="col-md-6">
        <div className="container d-flex justify-content-center">
          <div className="card p-3 mb-5 p-card shadow">
            <div className="card-head d-flex mx-auto">
              <img
                className="img-fluid p-card-img"
                src={"http://localhost:3000/" + pro.image}
                alt=""
              />
            </div>
            <div className="card-body">
              <h3 style={{ paddingLeft: "20px" }} className="mt-3 text-light">{pro.name}</h3>
              <p style={{ paddingLeft: "20px" }} className="text-light pro-desc">{pro.description}</p>
              <Link
                to={'/ViewProject/' + pro._id}
                className="btn btn-outline-primary m-2"
                onClick={(e) => {
                  if (!user || !isloggedIn) {
                    e.preventDefault();
                    enqueueSnackbar('Please login to apply', { variant: 'error' });
                  }
                }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  }


  return (
    <div className="container">
      <header className='d-flex justify-content-center align-items-center' style={{height:'200px',width:'1200px', backgroundImage:`url(${header})`, marginLeft:'-40px', marginTop:'50px', borderRadius:'30px', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <h1 style={{fontSize:'90px',fontWeight:'bolder',letterSpacing:'10px',color:'white'}}>PROJECTS</h1>
      </header>


      <div className='container mb-5' style={{ marginTop: '100px' }}>
        <div className='row'> {displayProject()} </div>
      </div>
    </div>
  )
}

export default Project