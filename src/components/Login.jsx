import React, { useState } from 'react'
import './LoginPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('http://localhost:4545/login', {
      email: email,
      pass: password
    }).then((res) => {


      const data = JSON.stringify(res.data)

      Cookies.set('users', data)


    })


    console.log(`Email: ${email}, Password: ${password}`);

  }







  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email" style={{ color: 'black' }}>Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}
export default Login