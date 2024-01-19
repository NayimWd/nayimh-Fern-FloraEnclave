import React, { lazy } from 'react';
import Navbar from '../components/Navbar';
import SingleProduct from '../components/ProductComponent/SingleProduct'
const Footer = lazy(()=>(import("../components/Footer")));
const ProductDetails = () => {
    
  return (
    <section>
    <Navbar/>
    <SingleProduct/>
    <Footer/>
    </section>
  )
}

export default ProductDetails