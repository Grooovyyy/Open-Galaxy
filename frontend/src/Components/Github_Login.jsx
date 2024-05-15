import React from 'react';
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext';
import logo from "../assets/GL.png";
import login from "../assets/login.gif";

const Github_Login = () => {
  const { setLoggedIn } = useAppContext();

  const handleLogin = () => {
    // Redirect the user to the GitHub login page
    window.location.href = 'http://localhost:3000/auth/github'; // Change the URL to your backend authentication route
  };

  const getData = async () => {
    try {
      // Fetch the data from the backend
      const res = await fetch('http://localhost:3000/user');

      if (res.status === 200) {
        const data = await res.json();

        // Save user data in session
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        // Assuming navigate is from a routing library like React Router
        // navigate('/');
      } else if (res.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      enqueueSnackbar('Failed to fetch user data', { variant: 'error' });
    }
  };

  return (
    <div style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', height: '91vh' }}>
      <div className='container d-flex justify-content-center'>
        <div className="card login-card">
          <img src={logo} alt="GitHub Logo" className='git-logo' />
          <button type="button" className='login-btn' onClick={handleLogin}>
            Login with GitHub
          </button>
          {/* Uncomment the following line to test fetching user data */}
          {/* <button onClick={getData}>Get User Data</button> */}
        </div>
      </div>
    </div>
  );
};

export default Github_Login;
