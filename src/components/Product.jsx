import { faker } from '@faker-js/faker'
import axios from 'axios';
import { useEffect, useState } from 'react'




function Product() {

    const [products, setProducts] = useState([])


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

    useEffect(() => {


        const test = () => {
            axios.get('http://localhost:4545/api/products').then((res) => {
                setProducts(res.data)
                console.log(res);
            })
        }
        test()
    }, [])


    // const products = [
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.imageUrl(640, 480, 'farming'),
    //         price: faker.commerce.price(),
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.imageUrl(640, 480, 'farming'),
    //         price: faker.commerce.price(),
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {
    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },
    //     {

    //         name: faker.commerce.productName(),
    //         description: faker.commerce.productDescription(),
    //         image: faker.image.nature(),
    //         price: faker.commerce.price()
    //     },


    // ];



    const handleadd = (product) => {
























    }





    return (
        <>


            <div className="container" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>

                <div className="row">




                    {products.map((product, index) => (
                        <div className="col-lg-3" style={{ marginTop: '1rem', margin: '2rem' }}>
                            <div className="product-card" key={index}>
                                <img src={'http://localhost:4545/' + product.path} style={{ height: '10rem', }} alt={product.title} />
                                <div className="product-details">
                                    <h3>{product.title}</h3>

                                    <span style={{ marginTop: '.5rem' }} >₹{product.price}</span>
                                    <button style={{ marginTop: '.5rem' }} onClick={(e) => {
                                        e.preventDefault()
                                        addToCart(products, index)
                                    }} >Add to Cart</button>
                                </div>
                            </div></div>
                    ))}







                </div>



            </div>






        </>
    )
}

export default Product