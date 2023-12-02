import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HelmetSeo from '../components/HelmetSeo'





const Home = () => {
  return (
  
    <div> 
    {/* Helmet for seo */}
   
  <Navbar/>
    <Hero/>
    <div className='h-[200vh]'></div>
    </div>
  )
}

export default Home