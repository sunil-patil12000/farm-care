import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./CartPage.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Cart = () => {
    const df = JSON.parse(sessionStorage.getItem('cart'));
    const [cartItems, setCartItems] = useState(df);

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/cart');
    }, [cartItems]);

    const handleRemoveItem = (index) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(index, 1);
            return updatedCartItems;
        });
    };

    const getTotalPrice = () => {
        let totalPrice = 0;
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach(item => {
                totalPrice += parseInt(item.price);
            });
        }
        return totalPrice;
    };

    function handlecheckout() {
        let gj = getTotalPrice();
        console.log(gj);
        if (gj > 0) {
            sessionStorage.setItem('total', gj);
            if (!Cookies.get('user')) {
                toast.error("Please log in first");
            } else {
                navigate('/checkout');
            }
        } else {
            toast.error("Add products to the cart");
        }
    }

    return (
        <div className="cart-page">
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="cart-heading">Cart</h2>
            {!cartItems || cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-image">
                                <img src={'http://localhost:4545/' + item.path} alt={item.name} className="image" />
                            </div>
                            <div className="item-info">
                                <p className="item-name">{item.title}</p>
                                <p className="item-price">₹{item.price}</p>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</button>
                        </div>
                    ))}
                    <div className="total-info">
                        <p className="total-price">Total Price: ₹{getTotalPrice()}</p>
                    </div>
                    <button className="remove-btn" style={{ backgroundColor: 'blue' }} onClick={handlecheckout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
