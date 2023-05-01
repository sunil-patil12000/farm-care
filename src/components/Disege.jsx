import React from 'react'
import { faker } from '@faker-js/faker';
const Disege = () => {


    const service = [{
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        disp: faker.commerce.productDescription(),
        img: "images/services-img-01.jpg"


    },


    {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        disp: faker.commerce.productDescription(),
        img: "images/services-img-02.jpg"


    },
    {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        disp: faker.commerce.productDescription(),
        img: "images/services-img-03.jpg"


    },


    ]




    return (
        <>

            <div class="full-title">
                <div class="container">

                    <h1 class="mt-4 mb-3">About
                        <small>Subheading</small>
                    </h1>
                </div>
            </div>

            <div class="container">
                <div class="breadcrumb-main">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active">About</li>
                    </ol>
                </div>

                <div class="about-main">
                    <div class="row">

                        {
                            service.map((item) => {
                                return (


                                    <div class="col-lg-4 mb-4">
                                        <div class="card h-100">
                                            <h4 class="card-header">{item.name}</h4>
                                            <div class="card-img">
                                                <img class="img-fluid" src={item.img} alt="" />
                                            </div>
                                            <div class="card-body">
                                                <p class="card-text">{item.disp}</p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                );
                            })





                        }


                    </div>

                </div>




            </div>

































        </>
    )
}

export default Disege