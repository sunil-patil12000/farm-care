import React from 'react'
import Carsul from './components/Carsul'
import Content from './components/Content'
import Footer from './components/Footer'
import Carouse from './test/Carouse'
import { faker } from '@faker-js/faker'
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
   

];

const Home = () => {
    return (
        <>



            <Carsul />
            <Content products={products}/>
          
            {/* <Footer /> */}



        </>
    )
}

export default Home