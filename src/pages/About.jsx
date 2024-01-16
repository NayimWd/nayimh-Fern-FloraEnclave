import React, { lazy } from 'react'
import Navbar from '../components/Navbar'
import DynamicBanner from '../components/ReusableComponent/DynamicBanner'
import { useLocation } from 'react-router-dom'
import AboutComponent from '../components/About/AboutComponent'
import Input from '../ui/Input'
const Footer = lazy(()=>import('../components/Footer'))

const About = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  return (
    <section>
    <Navbar/>
      <DynamicBanner pathname={pathname}/>
        <AboutComponent/>
      
    <Footer/>

   </section>
  )
}

export default About