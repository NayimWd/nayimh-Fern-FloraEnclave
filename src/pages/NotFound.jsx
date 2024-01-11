import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <section className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
      <h1 className='text-3xl sm:text-7xl text-dark_gray mb-8'> 404 </h1>
      <h2 className='text-2xl font-bold sm:text-4xl text-dark_gray mb-3'> Oops! That Page Can’t Be Found. </h2>
      <h2 className='text-xl font-semibold text-dark_gray mb-6'> THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS </h2>
      <p className='text-lg'> Please return to  <span className='text-green cursor-pointer font-semibold'><Link to="/"> Home page </Link>  </span> </p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default NotFound;