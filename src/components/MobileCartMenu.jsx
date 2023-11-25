import React from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const MobileCartMenu = ({profile, cart}) => {
  
  return (
    <div className='flex flex-col items-center justify-center gap-3  backdrop-blur-sm bg-soft_green/30 shadow-xl p-2 py-4 rounded-md'>
        <IoMdHeart onClick={profile} className='w-6 h-6 text-darker_green hover:scale-110 cursor-pointer'/>
        <MdOutlineShoppingCart onClick={cart} className='w-6 h-6 text-darker_green hover:scale-110 cursor-pointer'/>

    </div>
  )
}

export default MobileCartMenu