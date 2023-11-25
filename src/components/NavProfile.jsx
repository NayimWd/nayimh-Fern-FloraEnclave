import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { CgProfile } from "react-icons/cg";
const NavProfile = ({close}) => {
  return (
    <div className="flex flex-col  items-center  h-[400px] w-[285px] p-8 bg-white_clr rounded-md shadow-sm shadow-subtle_gray z-10">
        <div className='flex_between w-full'>
          <p></p>
            <MdOutlineClose onClick={close} className='w-6 h-6 bg-dark_green text-white rounded cursor-pointer'/>
        </div>
        <div className='flex flex-col items-center mt-5 '>
          <CgProfile className='w-14 h-14 text-darker_green'/>
          <h1 className='text-xl mt-1 text-darker_green'> User Name </h1>
        </div>
    </div>
  )
}

export default NavProfile