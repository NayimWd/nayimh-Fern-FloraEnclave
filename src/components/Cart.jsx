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
          return ErrorToast("Stock Out")
        } else {
          setCount(count + 1)
        }

      } else if(e === "-"){

       return setCount(count - 1)
      }
  }

  return (
    <div className=" w-[300px] xsm:w-[400px] h-screen flex flex-col justify-start  py-8 px-4 xsm:px-8   bg-white_clr  shadow-lg  z-10">
        <div className='flex_between w-full'>
         <p className='text-darker_green text-xl font-bold font-sans'> Cart </p>
            <MdOutlineClose onClick={close} className='w-6 h-6 bg-dark_green text-white rounded cursor-pointer'/>
        </div>
        {/*if cart empty apply logic here */}
        {!isEmpty ?
          <div className="w-full h-full flex flex-col justify-start items-start mt-10">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3 xsm:gap-5">
                    <img className=" w-16 h-16 xsm:w-[80px] xsm:h-[80px] object-cover object-center" src={img} alt="treeImg" loading="lazy"/>
                    <div className="font-jost flex flex-col gap-2 text-darker_green">
                          <p className="leading-6 font-semibold xsm:text-xl">Transval Daisy</p>
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
          </div>
           : <div className='flex flex-col w-full h-full justify-center items-center '>
              <p className='text-darker_green font-sans font-semibold'> Your cart is empty! <span className='font-bold font-lato cursor-pointer hover:text-dark_green'>Shop Now</span> </p>
              <img className='w-[120px] mt-6' src={emptyImg} alt="empty"/>
          </div>}
    </div>
  )
}

export default Cart