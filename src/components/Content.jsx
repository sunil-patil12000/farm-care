
import { useEffect, useState } from "react";
import Carouse from "../test/Carouse";
import { faker } from '@faker-js/faker';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Content = () => {

   const [service, setService] = useState([])
   let navigate = useNavigate();

   useEffect(() => {


      const test = () => {
         axios.get('http://localhost:4545/api/homedis').then((res) => {
            setService(res.data)
            console.log(res);
         })
      }
      test()
   }, [])


   // const service = [{
   //    id: faker.datatype.uuid(),
   //    name: faker.company.name(),
   //    disp: faker.commerce.productDescription(),
   //    img: "images/services-img-01.jpg"


   // },


   // {
   //    id: faker.datatype.uuid(),
   //    name: faker.company.name(),
   //    disp: faker.commerce.productDescription(),
   //    img: "images/services-img-02.jpg"


   // },
   // {
   //    id: faker.datatype.uuid(),
   //    name: faker.company.name(),
   //    disp: faker.commerce.productDescription(),
   //    img: "images/services-img-03.jpg"


   // },


   // ]







   return (
      <>

         <div class="container">

            <div class="about-main">
               <div class="row">
                  <div class="col-lg-6">
                     <h2>Welcome to farming Care</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <h5>Our smart approach</h5>
                     <ul>
                        <li>Sed at tellus eu quam posuere mattis.</li>
                        <li>Phasellus quis erat et enim laoreet posuere ac porttitor ipsum.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Duis porttitor odio pellentesque mollis vulputate.</li>
                        <li>Quisque ac eros non ex hendrerit vehicula.</li>
                     </ul>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                  </div>
                  <div class="col-lg-6">
                     <img class="img-fluid rounded" src="images/about-img.jpg" alt="" />
                  </div>
               </div>

            </div>

            <div class="portfolio-main">
               <h2>Products</h2>
               <Carouse />
               <div className="" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a href={'/products'}> Viwe All</a>
               </div>
            </div>




            <div class="services-bar">
               <h1 class="my-4">Diseases </h1>


            </div>


            <div class="row">

               {
                  service == [] ? (<><p>No avalible</p></>) :

                     (service.map((item, i) => {
                        return (


                           <div class="col-lg-4 mb-4" key={i}>
                              <div class="card h-100">
                                 <h4 class="card-header">{item.name}</h4>
                                 <div class="card-img">
                                    <img class="img-fluid" src={'http://localhost:4545/' + item.path} alt="" />
                                 </div>
                                 <div class="card-body">
                                    <p class="card-text">{item.description.substring(0, 122)}</p>
                                 </div>
                                 <div class="card-footer">
                                    <a href="#" class="btn btn-primary" onClick={() => {
                                       navigate(`/post/${item._id}`)
                                    }}>Learn More</a>
                                 </div>
                              </div>
                           </div>

                        );
                     }))





               }


            </div>



         </div>


      </>
   )
}

export default Content