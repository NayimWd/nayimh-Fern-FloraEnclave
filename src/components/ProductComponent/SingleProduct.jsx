import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import DynamicBanner from '../ReusableComponent/DynamicBanner';
import PlantImg from "../../assets/image/product4.webp"
import { CgHeart } from 'react-icons/cg';
import { SuccessToast, sweetSuccess } from '../../ui/helper';

const SingleProduct = () => {
    const {id} = useParams();

    const [click, setClick] = useState(false);

    const location = useLocation();
  const pathname = location.pathname.slice(1);

  const handleClick = (e) => {
    setClick(!click);
    click ? sweetSuccess("Added to WishList") : SuccessToast("Removed From WishList")
    
  }

  return (
    <>
    <DynamicBanner pathname={pathname} name="Flower"/>
    <div className='container section_p-y w-full'>
    <div className='flex flex-col md:flex-row justify-center  md:gap-20'>
      <div className='w-full md:w-1/2 '>
          <img src={PlantImg} alt='plantImg'/>
      </div>
      <div className='w-full md:w-1/2'>
          <div className='flex justify-between items-center w-full'>
            <div>
              <p className='font-sans text-2xl leading-7 text-darker_green  font-bold'> Laceleaf Peace </p>
                <p className='mt-2 text-dark_green text-lg leading-7 font-jost font-bold' > ৳300 BDT</p>
            </div>
            <span data-tooltip="Wish List" data-flow="top" className=''> <CgHeart onClick={handleClick} className={`w-14 h-14 cursor-pointer  border rounded-full p-3 ${click ? "bg-dark_green text-white disabled:" : "text-dark_green hover:text-white hover:bg-dark_green"}`} aria-level="wishList button"/> </span>
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default SingleProduct