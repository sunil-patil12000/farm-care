import React, { useState } from 'react';
import './ForgetPassword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Password reset email sent to:', email);

    if (!email) {
      alert("You must provide an Email");

    }
    else {
      axios.post('http://localhost:4545/api/forget', {
        email: email
      }).then((res) => {
        console.log(res);

        alert(res.data);

        navigate('/login')


      }).catch((e) => console.log(e))
    }



  };

  return (
    <div className="forget-password-container">
      <h2>Forgot Your Password?</h2>
      <p>Please enter your email address.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
