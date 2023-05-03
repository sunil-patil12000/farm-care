import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./CartPage.css";


const Cart = () => {
    const df = JSON.parse(sessionStorage.getItem('cart'))
    const [cartItems, setCartItems] = useState(...df);








    const handleQuantityChange = (itemId, value) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + value } : item
            )
        );
    };

    const handleRemoveItem = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h2 className="cart-heading">Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-msg">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-image">
                                <img src={item.image} alt={item.name} className="image" />
                            </div>
                            <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="quantity-control">
                                <button
                                    className="decrement-btn"
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>
                                <span className="item-quantity">{item.quantity}</span>
                                <button
                                    className="increment-btn"
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="remove-btn"
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="total-info">
                        <p className="total-quantity">Total Quantity: {getTotalQuantity()}</p>
                        <p className="total-price">Total Price: ${getTotalPrice()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
