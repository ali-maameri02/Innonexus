import React, { useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from './imgs/img1.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './login.css';

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
    if (!formData.username || !formData.password || (isLogin ? false : !formData.email)) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please fill all required fields.',
        icon: 'error',
        confirmButtonText: 'OK'
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
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/dashboard'); // Adjust redirection as needed
      });
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      Swal.fire({
        title: 'Login Failed!',
        text: error.response ? error.response.data.message : 'An error occurred during login.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://straighthup.com/api/signup/', payload , {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Signup successful:', response.data);
      Swal.fire({
        title: 'Success!',
        text: 'You will be a member of the InnoNexus family!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      // Log detailed error information
      console.error('Signup error:', {
        status: error.response ? error.response.status : 'N/A',
        headers: error.response ? error.response.headers : 'N/A',
        data: error.response ? error.response.data : 'N/A',
        message: error.message,
      });
      Swal.fire({
        title: 'Signup Failed!',
        text: error.response ? error.response.data.message : 'An error occurred during signup.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  
  

  return (
    <div className="container">
      <Row className="row1">
        <Col className="col1">
          <span className="image-container">
            <img src={image1} alt="Login visual" />
          </span>
        </Col>
        <Col className="col2">
          <span className="btn-container">
            <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
            <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Sign Up</button>
          </span>
          <p className="description">Welcome To Innonexus!</p>
          
          {isLogin ? (
            <form className="visible" onSubmit={handleLoginSubmit} method='post'>
              <label htmlFor="username" className="label">User Name</label><br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="styled-input"
                value={formData.username}
                onChange={handleInputChange}
              /><br />
              
              <label htmlFor="password" className="label">Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="styled-input"
                value={formData.password}
                onChange={handleInputChange}
              /><br />
              
              <span className="display-block">
                <span className="left">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </span>
                <span className="right">
                  <a href="#">Forget Password?</a>
                </span>
              </span>
              
              <button type="submit" className="login-button">Login</button>
            </form>
          ) : (
            <form className="visible" onSubmit={handleSignupSubmit} method='post'>
              <label htmlFor="email" className="label">Email Address</label><br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="styled-input"
                value={formData.email}
                onChange={handleInputChange}
              /><br />
              
              <label htmlFor="username" className="label">User Name</label><br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="styled-input"
                value={formData.username}
                onChange={handleInputChange}
              /><br />
              
              <label htmlFor="role" className="label">Your Role</label><br />
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
              </select><br />
              
              <label htmlFor="password" className="label">Password</label><br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="styled-input"
                value={formData.password}
                onChange={handleInputChange}
              /><br />
              
              <button type="submit" className="login-button">Register</button>
            </form>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Login;
