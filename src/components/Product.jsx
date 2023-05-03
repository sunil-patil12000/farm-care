import { faker } from '@faker-js/faker'
import { useState } from 'react'





function Product() {

    const [cart, setCart] = useState(() => {
        const existingCart = sessionStorage.getItem('cart');
        return existingCart ? JSON.parse(existingCart) : [];
    })



    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };



    const products = [
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



    const handleadd = (product) => {
























    }





    return (
        <>


            <div className="container" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>

                <div className="row">




                    {products.map((product) => (
                        <div className="col-lg-3" style={{ marginTop: '1rem' }}>
                            <div className="product-card" key={product.id}>
                                <img src={product.image} style={{ height: '10rem', }} alt={product.name} />
                                <div className="product-details">
                                    <h3>{product.name}</h3>

                                    <span style={{ marginTop: '.5rem' }} >₹{product.price}</span>
                                    <button style={{ marginTop: '.5rem' }} onClick={() => { addToCart(products) }} >Add to Cart</button>
                                </div>
                            </div></div>
                    ))}







                </div>



            </div>






        </>
    )
}

export default Product