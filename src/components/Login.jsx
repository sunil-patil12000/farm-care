import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4545/login', {
        email: email,
        pass: password
      })
      .then((res) => {
        console.log(Cookies.get('user'));
        if (res.data === 'password miss match' || res.data === 'login data not available') {
          alert(res.data);
        } else {
          Cookies.set('user', JSON.stringify(res.data));
          navigate('/');
        }
      });
  };

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" style={{ color: 'black' }}>
              Email
            </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={`show-password-btn ${showPassword ? 'show' : ''}`}
                onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <a href='/forget' className='ms-auto font-bold forg'>Forget Password</a>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
