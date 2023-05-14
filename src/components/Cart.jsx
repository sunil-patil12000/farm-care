import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./CartPage.css";



import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
const Cart = () => {
    const df = JSON.parse(sessionStorage.getItem('cart'))
    const [cartItems, setCartItems] = useState(df);

    const navigate = useNavigate();



    console.log(cartItems)






    const handleQuantityChange = (itemId, value) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, qty: item.qty + value } : item
            )
        );
    };

    const handleRemoveItem = (itemId) => {
        // setCartItems((prevCartItems) =>
        //     prevCartItems.filter((item) => item.id !== itemId)
        // );




        for (let index = 0; index < df.length; index++) {
            if (itemId === df[index]) {
                df.splice(index, 1)
                sessionStorage.setItem('cart', JSON.stringify(df))


            };

        }



    };
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
        navigate('/cart')





    }, [cartItems]);

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.qty, 0);
    };

    const [total, setTotal] = useState();

    const getTotalPrice = () => {
        // return 
        // var tot=0;
        // for (let index = 0; index < cartItems.length; index++) {
        //     const element = parseInt(cartItems[index].price);





        // }

        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += parseInt(item.price);
        });
        return totalPrice;










    };



    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);

    };


    function handlecheckout() {
       
            let gj = getTotalPrice()
            console.log(gj)
            if (gj>0) {
                sessionStorage.setItem('total',gj);
                if (!Cookies.get('user')) {
                        alert("First Login plz...")         
                }
                else{
                    navigate('/checkout')
                }
                
            }

    }

    return (
        <div className="cart-page">
            <h2 className="cart-heading">Cart</h2>
            {!cartItems ? (
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
                                <p className="item-price">₹{item.price}</p>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => {
                                    handleRemoveItem(item.id)
                                    removeFromCart(item.id)
                                }
                                }>
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="total-info">

                        <p className="total-price">Total Price: ₹{

                            getTotalPrice()
                        }</p>
                    </div>

                    <button className="remove-btn" style={{ backgroundColor: 'blue' }} onClick={()=>handlecheckout()}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
