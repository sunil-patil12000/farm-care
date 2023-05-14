import { faker } from '@faker-js/faker'
import { useState } from 'react'




function Product() {



    const [quantity, setQuantity] = useState(1);



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



    const products = [
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageUrl(640, 480, 'farming'),
            price: faker.commerce.price(),
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageUrl(640, 480, 'farming'),
            price: faker.commerce.price(),
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.nature(),
            price: faker.commerce.price()
        },
        {

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




                    {products.map((product, index) => (
                        <div className="col-lg-3" style={{ marginTop: '1rem' }}>
                            <div className="product-card" key={index}>
                                <img src={product.image} style={{ height: '10rem', }} alt={product.name} />
                                <div className="product-details">
                                    <h3>{product.name}</h3>

                                    <span style={{ marginTop: '.5rem' }} >₹{product.price}</span>
                                    <button style={{ marginTop: '.5rem' }} onClick={() => { addToCart(products, index) }} >Add to Cart</button>
                                </div>
                            </div></div>
                    ))}







                </div>



            </div>






        </>
    )
}

export default Product