import {useState} from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import emptyImg from "../assets/image/Frame.png";
import img from "../assets/image/product1.webp";
import { ErrorToast } from "../ui/helper";

const Cart = ({close}) => {
  // state for toggle
  const [isEmpty, isIsEmpty] = useState(false);
  // state for product count 
  const [count, setCount] = useState(0)

  const handleCount = (e) => {
      if(e === "+"){
        if(count === 15){
           ErrorToast("Stock Out")
        } else {
          setCount(count + 1)
        }

      } else if(e === "-"){

       return setCount(count - 1)
      }
  }

  return (
    <div className=" w-[300px] xsm:w-[400px] h-screen flex flex-col justify-start  py-0    bg-white_clr  shadow-lg  z-10 relative">
        <div className='flex_between items-center w-full   border-b border-dotted'>
        <span className="flex_center h-14 w-14 border-r">
        <MdOutlineClose onClick={close} className='w-7 h-7 bg-dark_green text-white rounded cursor-pointer '/>
        </span>
        <p className='text-darker_green text-xl font-bold font-sans'> Cart </p>
        <p className='flex_center h-14 w-14 text-darker_green text-xl font-bold font-sans  border-l'> 2 </p>
        </div>
        {/*if cart empty apply logic here */}
        {!isEmpty ?
          <div className="w-full h-full flex flex-col justify-start items-start mt-7 px-4 xsm:px-8">
                <div className="w-full flex justify-between items-center py-3 border-b">
                    <div className="flex items-center gap-3 xsm:gap-5">
                    <img className=" w-16 h-16 xsm:w-[80px] xsm:h-[80px] object-cover object-center" src={img} alt="treeImg" loading="lazy"/>
                    <div className="font-jost flex flex-col gap-2 text-darker_green">
                          <p className="leading-6  xsm:text-xl">Transval Daisy</p>
                        <div className="flex items-center gap-1 xsm:gap-3">  <p className="leading-6  xsm:text-xl">QTY : </p>
                        <div className="flex items-center gap-5 border"> 
                          <button disabled={count === 15} onClick={()=> handleCount("+")} className={`${count > 14 && "bg-creamy_white text-white"} text-lg xsm:text-2xl font-bold cursor-pointer px-2  border-r rounded-sm hover:bg-creamy_white bg-dark_green/20`}>+</button>
                          <span className="relative text-lg xsm:text-xl w-2 text-center"> <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{count}</p> </span>
                          <button disabled={count === 0} onClick={()=> handleCount("-")} className={`${count === 0 && "bg-creamy_white text-white"} text-lg xsm:text-2xl font-bold cursor-pointer px-2  border-l rounded-sm hover:bg-creamy_white bg-dark_green/20`}>---</button>
                        </div>
                       </div> 
                          <p className="leading-6  xsm:text-xl">৳200</p>

                      </div>
                    </div>
                      
                    <RiDeleteBin5Line className="w-8 h-8  cursor-pointer hover:bg-dark_green/20 p-1"/>
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
           : <div className='flex flex-col w-full h-full justify-center items-center '>
              <p className='text-darker_green font-sans font-semibold'> Your cart is empty! <span className='font-bold font-lato cursor-pointer hover:text-dark_green'>Shop Now</span> </p>
              <img className='w-[120px] mt-6' src={emptyImg} alt="empty"/>
          </div>}
    </div>
  )
}

export default Cart