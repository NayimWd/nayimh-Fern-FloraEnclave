import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import DynamicBanner from '../components/ReusableComponent/DynamicBanner';

const Contact = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  return (
    <section>
    <Navbar/>
      <DynamicBanner pathname={pathname}/>
    <Footer/>
    </section>
  )
}

export default Contact