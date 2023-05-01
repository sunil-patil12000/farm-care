import React, { useState } from 'react'
import './RegisterPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const navigate = useNavigate();



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Phone: ${phone}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // You can submit the form data to a server here




  }
  const handleData = () => {

    if (password === confirmPassword) {


      axios.post('http://localhost:4545/register', {
        fname: firstName,
        lname: lastName,
        p_number: phone,
        email: email,
        password: password

      }).then((res) => {
        console.log(res)
        if (res.data.error === "user Already registered") {
          alert("user Already registered")

        }
        else {
          navigate('/login')
        }
      }).catch((e) => {
        console.log(" error", e)
      })
    }
    else {
      alert("Password miss match");
    }










  }
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
        <div className="flex">
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="flex">
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        <button type="submit" onClick={handleData}>Register</button>
      </form>
    </div>
  );
}

export default Register