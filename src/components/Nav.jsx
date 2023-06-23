import { FaShoppingCart } from "react-icons/fa";



import "./styles.css";
import Cookies from "js-cookie";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {

   let navigate = useNavigate()

   const ulogin = Cookies.get('user');


   if (ulogin !== null) {
      const st = true

   }
   else {
      const st = false
   }



   const cartd = JSON.parse(sessionStorage.getItem('cart'))




   return (
      <>

         <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
            <div class="container" style={{ maxHeight: '4rem' }}>
               <a class="navbar-brand" href="/">
                  <span className="text-lg  font-bold" style={{ color: 'green', fontSize: '2rem', fontWeight: 'bold', paddingBottom: '2rem' }}>RYTHA BANDHU</span>
               </a>
               <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="fas fa-bars"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/video">Videos</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/blog">Services</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="/products">Products</a>
                     </li>

                     {
                        !Cookies.get('user') ? (<>

                           <li class="nav-item">
                              <a class="nav-link" href="/register">Register</a>
                           </li>


                           <li class="nav-item">
                              <a class={`nav-link`} href="/login">Login</a>
                           </li>

                        </>) : (<> <li class="nav-item">
                           <a class={`nav-link`} onClick={() => {
                              Cookies.remove('user')
                              navigate('/')
                              window.location.reload(false);

                           }}>Logout</a>
                        </li>
                           <li class="nav-item">
                              <a class={`nav-link`} href="/orders">My Orders</a>
                           </li>
                           <li class="nav-item">
                              <a class={`nav-link`} href="/feedback">Feedback</a>
                           </li>
                        </>)
                     }
                     <li class="nav-item" >
                        <a style={{ color: 'white' }} href="/cart" type="button" class="btn btn-secondary"><FaShoppingCart /> </a>


                     </li>

                  </ul>
               </div>
            </div>
         </nav>



      </>
   )
}

export default Nav