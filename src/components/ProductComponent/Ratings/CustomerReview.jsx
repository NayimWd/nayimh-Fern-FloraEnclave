import React from 'react'
import ReviewContent from './ReviewContent'

const CustomerReview = () => {
  return (
    <div className='mt-10 border rounded p-5 sm:p-10'>
    <p className='text-xl md:text-2xl'>Review List</p>
    <hr className='mt-1'/>
        <ReviewContent/>
        
    </div>
  )
}

export default CustomerReview