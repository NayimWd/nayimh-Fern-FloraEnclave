import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DynamicBanner from '../ReusableComponent/DynamicBanner';

const SingleProduct = () => {
    const {id} = useParams();

    const location = useLocation();
  const pathname = location.pathname.slice(1);

  return (
    <>
    <DynamicBanner pathname={pathname} name="Flower"/>
    <div className='container section_p-y '>
    SingleProduct 
    </div>
    </>
  )
}

export default SingleProduct