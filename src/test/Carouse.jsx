
import React from 'react';
import './test.css'
import Cookies from 'js-cookie';

const Carouse = ({ products }) => {

    

    return (
        <div className="horizontal-products container">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                        <h3>{product.name}</h3>

                        <span>₹{product.price}</span>
                        <button >Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );


}

export default Carouse