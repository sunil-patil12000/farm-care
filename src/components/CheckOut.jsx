import React, { useState } from 'react';
import './CheckoutPage.css';
import axios from 'axios';
import Cookies from 'js-cookie';
const CheckOut = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(JSON.parse(Cookies.get('user')));


  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')));
  const [total, setTotal] = useState(JSON.parse(sessionStorage.getItem('total')));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    

    axios.post("http://localhost:4545/order",{
      lid:id,
      fname:firstName,
      lname:lastName,
      phone:phone,
      address:address,
      pincode:pinCode,
      email:email,
      products:cart,
      total:total

    }).then((res)=>{
      console.log(res);
    }).catch((e)=>console.log(e))




  };

  return (
    <div className="checkout-page">
      <h1 className="heading">Checkout</h1>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pincode</label>
              <input type="text" id="pinCode" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="order-summary">
            <h2 className="heading">Order Summary</h2>

            {

              cart.map((item, i) => {
                return (
                  <div className="item">
                    <div className="item-image">
                      <img className='item-image' src={item.image} alt="" />
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">₹{item.price}</p>
                    </div>
                  </div>

                )
              })
            }
            <div className="total">
              <p className="total-label">Total</p>
              <p className="total-price">₹{sessionStorage.getItem('total')}</p>
            </div>
            <button className="place-order-button" onClick={handleSubmit}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
