import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const AdminLogin = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();


        if (email && password) {
            axios.post("http://localhost:4545/adlog", {
                username: email,
                password
            })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                        Cookies.set('admin', JSON.stringify(res.data._id))
                        navigate('/dashboard')
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }


    }








    // Add your login logic here
    // Redirect to the dashboard page





    return (
        <div className="wrapper">
            <div className="card">
                <h2 className="heading">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
                    <input className="input" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
