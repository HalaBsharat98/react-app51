import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'
import Resturent from './components/resturent/Resturent.jsx'
import About from './components/about/About.jsx'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'
export default function App() {
  return (
    <>
    
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/resturent' element={<Resturent/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer />
    
    </>
  )
}
