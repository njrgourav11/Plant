import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../assets/login.png';
import EyeIcon from '../assets/eye.svg'; // Import the eye icon

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
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
                setUser(matchedUser);
                setError('');
                navigate('/profile');
                // Redirect or handle login success
                console.log('Logged in successfully:', matchedUser);
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
                        <div className="form-row">
                            <label className="form-row-inner">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="input-text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
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
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </label>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <div className="form-row-last">
                            <input
                                type="submit"
                                name="login"
                                className="register"
                                value="Login"
                            />
                        </div>
                        <p className="signup-text">
                            Don't have an account? <a href="#" className="signup-link">Sign up for free</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
