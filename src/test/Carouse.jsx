
import {useState} from 'react';
import './test.css'
import Cookies from 'js-cookie';
import { faker } from '@faker-js/faker';


const Carouse = () => {


    const  products = [
        {
            id: 1,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageUrl(640, 480, 'farming'),
            price: faker.commerce.price(),
        },
        {
            id: 2,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {
            id: 3,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {
            id: 4,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {
            id: 5,
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
       
    
    ];
    const [cart, setCart] = useState(() => {
        const existingCart = sessionStorage.getItem('cart');
        return existingCart ? JSON.parse(existingCart) : [];
    })



    const addToCart = (item, index) => {
        const cart2 = Object.assign(...item, { id: index });
        const updatedCart = [...cart, cart2];
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));

        console.log(cart2)
    };

    

    return (
        <div className="horizontal-products container">
            {products.map((product,i) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="product-details">
                        <h3>{product.name}</h3>

                        <span>₹{product.price}</span>
                        {/* <button onClick={() => addToCart(product, i)}>Add to Cart</button> */}

                    </div>
                </div>
            ))}
        </div>
    );


}

export default Carouse





