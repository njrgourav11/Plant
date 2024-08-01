import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginImg from '../assets/login.png';
import EyeIcon from '../assets/eye.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/data/users.json');
      const users = await response.json();
  
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (matchedUser) {
        localStorage.setItem('loggedInUserEmail', matchedUser.email);
        localStorage.setItem('userRole', matchedUser.role); // Save user role
        setError('');
        if (matchedUser.role === 'admin') {
          navigate('/admin/home');
        } else {
          navigate('/');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred');
    }
  };
  

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="page-content">
      <div className="form-v8-content">
        <div className="form-left">
          <img src={LoginImg} alt="form" className="login-image" />
        </div>
        <div className="form-right">
          <div className="tab">
            <div className="tab-inner">
              <button className="tablinks active">Login</button>
            </div>
            <p className="welcome-message">Welcome Back</p>
          </div>
          <form className="form-detail" onSubmit={handleLogin}>
            <div className="tabcontent" id="sign-in">
              <div className="form-row">
                <label className="form-row-inner">
                  <input
                    type="text"
                    name="your_email"
                    id="your_email"
                    className="input-text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="label">Email</span>
                  <span className="border"></span>
                </label>
              </div>
              <div className="form-row password-row">
                <label className="form-row-inner">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    className="input-text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="label">Password</span>
                  <span className="border"></span>
                  <button
                    type="button"
                    className="eye-icon"
                    onClick={togglePassword}
                  >
                    <img src={EyeIcon} alt="Toggle visibility" />
                  </button>
                  <a href="/login" className="forgot-password">Forgot Password?</a>
                </label>
              </div>
              <div className="form-row-last">
                <input
                  type="submit"
                  name="register"
                  className="register"
                  value="Login"
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <p className="signup-text">
                Don't have an account? <a href="/signup" className="signup-link">Sign up for free</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
