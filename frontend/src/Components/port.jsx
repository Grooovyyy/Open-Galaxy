import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from 'react'
import './Navbar.css'

const Port = () => {
  return (
<>
  <canvas className="background" />
  {/* Move to up bottom */}
  <div className="scroll-button">
    <a href="#home">
      <i className="fas fa-arrow-up" />
    </a>
  </div>
  {/* navigation menu */}
  <nav>
    <div className="navbar">
      <div className="logo">
        <a href="#">Portfolio</a>
      </div>
      <ul className="menu">
        <li className="li">
          <a href="#home">Home</a>
        </li>
        <li className="li">
          <a href="#about">About</a>
        </li>
        <li className="li">
          <a href="#skills">Skills</a>
        </li>
        <li className="li">
          <a href="#services">Services</a>
        </li>
        <li className="li">
          <a href="#contact">Contact</a>
        </li>
        <div className="cancel-btn">
          <i className="fas fa-times" />
        </div>
      </ul>
      <div className="media-icons">
        <a href="https://www.linkedin.com/in/rc-codex-469564261/" />
        <a href="https://github.com/rccodex0001" />
        <a href="https://www.facebook.com//">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com//">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com/rccodex/" />
      </div>
    </div>
    <div className="menu-btn">
      <i className="fas fa-bars" />
    </div>
  </nav>
  {/* Home Section Start */}
  <section className="home" id="home">
    <div className="home-content">
      <div className="text">
        <div className="text-one">Hello,</div>
        <div className="text-two">
          <h3 className="span loader">
            <span className="m">I'm</span>&nbsp;
            <br />
            <span className="m">R</span>
            <span className="m">c</span>
            <span className="m" />
            &nbsp;
            <span className="m">C</span>
            <span className="m">o</span>
            <span className="m">d</span>
            <span className="m">e</span>
            <span className="m">x</span>
          </h3>
        </div>
        <div className="text-three">Full Stack Developer</div>
        <div className="text-four">An Open Source </div>
      </div>
    </div>
  </section>
  {/* About Section Start */}
  <section className="about" id="about">
    <div className="content">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="about-details">
        <div className="left">
          {/* <img src="images/ananthu.jpg" alt="Portfolio"> */}
        </div>
        <div className="right">
          <div className="topic">Designing Is My Passion</div>
          <p>
            Welcome to my mini portfolio website! My name is RC. I am a frontend
            developer and currently staying in India. I am a person who has high
            passion in web development, game development. One of my dreams is to
            master all the technologies and become one of the TOP developers in
            the world, and now, I am working toward it!
          </p>
          <div className="button">
            <button onclick="window.open('images/ananthu.pdf')">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* My Skill Section Start */}
  <section className="skills" id="skills">
    <div className="content">
      <div className="title">
        <span>My Skills</span>
      </div>
      <div className="skills-details">
        <div className="text">
          <div className="topic">Skills Reflects Our Knowledge</div>
          <p>
            The universe is full of magical things, patiently waiting for our
            wits to grow sharper
          </p>
          <div className="experience">
            <div className="num">2</div>
            <div className="exp">
              Years Of <br /> Experience
            </div>
          </div>
        </div>
        <div className="boxes">{/* ... (skills boxes) ... */}</div>
      </div>
    </div>
  </section>
  {/* My Services Section Start */}
  <section className="services" id="services">
    <div className="content">
      <div className="title">
        <span>My Services</span>
      </div>
      <div className="boxes">{/* ... (service boxes) ... */}</div>
    </div>
  </section>
  {/* Contact Me Section Start */}
  <section className="contact" id="contact">
    <div className="content">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <div className="text">{/* ... (contact details and icons) ... */}</div>
    </div>
  </section>
  {/* Footer Section Start */}
  <footer>
    <div className="text">
      <span>
        <a href="#">rccodex.co.in</a> | © 2023
      </span>
    </div>
  </footer>
</>

 );
};
  export default Port;
