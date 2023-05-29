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
import ProductUploadPage from './Admin/ProductsUploading'
import AgriculturalDiseasesForm from './Admin/DiseBlog'
import Post from './components/Post'

import './test/deploy'
import AdminLogin from './Admin/AdminLogin'
import AdminPanel from './Admin/Dashboard'
import ThankYouPage from './components/ThankYou'
import VideoCardList from './components/Videocard'




function App() {

  const disease = {
    name: 'Example Disease',
    symptoms: 'Fever, yellowing of leaves, wilting',
    treatment: 'Apply fungicide, prune affected areas',
    prevention: 'Ensure proper drainage, use disease-resistant varieties',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lorem at ipsum faucibus eleifend ac non lacus. Curabitur ullamcorper eros at egestas fermentum.',
    image: 'example.jpg',
  };


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
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/blog' element={<Disege />} />
        <Route path='/upload' element={<ProductUploadPage />} />
        <Route path='/video' element={<VideoCardList />} />
        <Route path='/dashboard' element={<AdminPanel />} />
        <Route path='/thankyou' element={<ThankYouPage />} />
        <Route path='/uploadBlog' element={<AgriculturalDiseasesForm />} />

        <Route path='/blog/:id' element={<Post name={disease.name}
          symptoms={disease.symptoms}
          treatment={disease.treatment}
          prevention={disease.prevention}
          description={disease.description}
          image={disease.image} />} />
        <Route path='/products' element={<Product />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        {/* <Route path='/product/:id' element={<single />} /> */}
        <Route path='/post/:id' element={<Post />} />


      </Routes>


      <Footer />

    </>
  )
}

export default App
