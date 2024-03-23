import { MdOutlineClose } from "react-icons/md";
import emptyImg from "../assets/image/Frame.png";
import img from "../assets/image/product1.webp";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";

const Favoritenav = ({ close }) => {

	const [empty, setEmpty] = useState(true);


	return (
		<div className="flex flex-col  items-center  w-full xsm:w-[390px] h-screen  bg-white_clr  shadow-lg z-10">
		<div className='flex_between items-center w-full   border-b border-dotted'>
        <span className="flex_center h-14 w-14 border-r">
        <MdOutlineClose onClick={close} className='w-7 h-7 bg-dark_green text-white rounded cursor-pointer '/>
        </span>
        <p className='text-darker_green text-xl font-bold font-sans'> WISHLIST </p>
        <p className='flex_center h-14 w-14 text-darker_green text-xl font-bold font-sans  border-l'> 2 </p>
        </div>
		<div>
		
		</div>
			{/*if cart empty apply logic here */}
			{ !empty ?
				<div className="w-full h-full flex flex-col justify-start items-start mt-7 px-4 xsm:px-8">
                <div className="w-full flex justify-between items-center py-3 border-b">
                    <div className="flex items-center gap-3 xsm:gap-5">
                    <img className=" w-16 h-16 xsm:w-[80px] xsm:h-[80px] object-cover object-center" src={img} alt="treeImg" loading="lazy"/>
                    <div className="font-jost flex flex-col gap-2 text-darker_green">
                          <p className="leading-6  xsm:text-xl">Transval Daisy</p>

                          <p className="leading-6  xsm:text-xl">৳200</p>

                      </div>
					  
                    </div>
					<span className=" w-10 h-10 rounded-full" data-tooltip="Add To Cart" data-flow="top"><IoCartOutline className="w-8 h-8  cursor-pointer hover:bg-dark_green/20 p-1"/></span>
                      <span className=" w-10 h-10 rounded-full" data-tooltip="Remove from wislist" data-flow="left">
                    <RiDeleteBin5Line className="w-8 h-8  cursor-pointer hover:bg-dark_green/20 p-1"/>
					</span>
                </div>
                <div className="absolute bottom-0 left-0  w-full  "> 
                  <div className="w-full flex justify-between items-center px-4 xsm:px-8 xsm:mb-0 bg-creamy_white/70 pt-2"> 
                    <p className="font-jost leading-7 xsm:leading-[59px]  xsm:text-xl font-bold tracking-wider text-darker_green">Total:</p>
                    <p className="font-jost leading-[59px]  xsm:text-xl font-bold tracking-wider text-dark_green">৳250</p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <button className="w-1/2 py-[10px] xsm:px-8 xsm:py-6 bg-dark_gray hover:bg-dark_green text-white leading-6 tracking-widest">VIEW CART</button>
                    <button className="w-1/2 py-[10px] xsm:px-8 xsm:py-6 bg-black hover:bg-dark_green text-white leading-6 tracking-widest ">CHECK OUT</button>
                  </div>
                </div>
          </div>
				:
				<div className="flex flex-col w-full h-full justify-center items-center p-8">
				<p className="text-darker_green font-sans font-semibold">
					{" "}
					Your Wishlist is empty{" "}
				</p>
				<img className="w-[120px] mt-6" src={emptyImg} alt="empty" />
			</div>
		}
		</div>
	);
};

export default Favoritenav;
