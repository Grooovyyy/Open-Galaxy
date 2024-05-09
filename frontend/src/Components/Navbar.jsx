import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div className="navbar">
      <div className="logo">
        <a href="#"></a>
      </div>
      <ul className="menu">
        <li className="li">
          <a href="/home">Home</a>
        </li>
        {/* <li className="li">
          <a href="#about">About</a>
        </li> */}
        <li className="li">
          <a href="/Getstarted">Admin Login</a>
        </li>
        <li className="li">
          <a href="/Projects">Projects</a>
        </li>
        <li className="li">
          <a href="/Contact">Contact</a>
        </li>
        <li className="li">
          <a href="/AdminDashboard">Admin Dashboard</a>
        </li>
        <div className="cancel-btn">
          <i className="fas fa-times" />
        </div>
      </ul>
      <div className="media-icons">
        <a href="" />
        <a href="" />
        <a href="">
          <i className="" />
        </a>
        <a href="">
          <i className="" />
        </a>
        <a href="" />
      </div>
    </div>
    <div className="menu-btn">
      <i className="fas fa-bars" />
    </div>
  </nav>




  )
}

export default Navbar