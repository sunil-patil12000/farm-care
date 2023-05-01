import './all.css'
import './style.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Conect from './components/Conect'

import './components/styles.css'

import Nav from './components/Nav'
import Disege from './components/Disege'
import Product from './components/Product'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'
import Order from './components/Order'
import CheckOut from './components/CheckOut'
import single from './components/[id]'
import Cart from './components/Cart'




function App() {


  return (

    <>

      <Nav />
      <Routes>

        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contect' element={<Conect />} />

        <Route path='/blog' element={<Disege />} />
        <Route path='/products' element={<Product />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/product/:id' element={<single />} />


      </Routes>


      <Footer />

    </>
  )
}

export default App
