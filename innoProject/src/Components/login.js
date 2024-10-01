import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../index.css';
import image1 from '../assets/Sandy illustrations_business vol.2_44.png'; // Import the image used in the design
import { Slide } from 'react-awesome-reveal';
function Login() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const isLoginPath = location.pathname === '/login';
  const [isLogin, setIsLogin] = useState(isLoginPath);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'Participant', // Default role
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.username || !formData.password || (!isLogin && !formData.email)) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill all required fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return false;
    }
    return true;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('https://straighthup.com/api/login/', {
        username: formData.username,
        password: formData.password,
      });
      console.log('Login successful:', response.data);
      Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome back!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/dashboard'); // Adjust redirection as needed
      });
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      Swal.fire({
        title: 'Login Failed!',
        text: error.response ? error.response.data.message : 'An error occurred during login.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      role: formData.role,
    };

    try {
      const response = await axios.post('https://straighthup.com/api/signup/', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Signup successful:', response.data);
      Swal.fire({
        title: 'Success!',
        text: 'You are now part of the InnoNexus family!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      console.error('Signup error:', error.response ? error.response.data : 'An error occurred during signup.');
      Swal.fire({
        title: 'Signup Failed!',
        text: error.response ? error.response.data : 'An error occurred during signup.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <Slide>
    <div className="login-container d-flex flex-row ">
    <Slide direction='left' >
        <div className="image-section">
          <img src={image1} alt="Login visual" className="login-image" />
        </div></Slide>
      <div className="login-content">

        <div className="form-section ">
          <div className="form-header">
            <button
              className={isLogin ? 'form-toggle active' : 'form-toggle'}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'form-toggle active' : 'form-toggle'}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          <div className="form-body">
            {isLogin ? (
              <Slide direction='right'>
              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="username" className="input-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="styled-input"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="styled-input"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit" style={{backgroundColor:'#EFCC3D',color:'black'}} className="submit-button">Login</button>
              </form></Slide>
            ) : (
              <Slide direction='right'>
              <form onSubmit={handleSignupSubmit}>
                <label htmlFor="email" className="input-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="styled-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="username" className="input-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="styled-input"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label htmlFor="role" className="input-label">Role</label>
                <select
                  id="role"
                  name="role"
                  className="styled-input"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="Participant">Participant</option>
                  <option value="Company">Company</option>
                  <option value="Mentor">Mentor</option>
                </select>
                <label htmlFor="password" className="input-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="styled-input"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="submit" style={{backgroundColor:'#EFCC3D',color:'black'}} className="submit-button">Sign Up</button>
              </form></Slide>
            )}
          </div>
        </div>
      </div>
    </div></Slide>
  );
}

export default Login;
