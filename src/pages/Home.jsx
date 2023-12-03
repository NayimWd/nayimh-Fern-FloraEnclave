import React, { lazy } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';



const Home = () => {
  return (
  
    <div> 
   
   
  <Navbar/>
    <Hero/>
    
    <div className='h-[200vh]'></div>
    </div>
  )
}

export default Home