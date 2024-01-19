import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const id = useParams();
  return (
    <div className='container section_p-y mt-[100px]'>
    SingleProduct 
    </div>
  )
}

export default SingleProduct