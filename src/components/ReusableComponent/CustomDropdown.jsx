import { useEffect, useRef, useState } from "react"
import { RiArrowDropDownFill } from "react-icons/ri";

const CustomDropdown = ({dropdownOption}) => {
   const [isOption, setIsoption] = useState("Default Sorting")
   const [open, setOpen] = useState(false);

 

   const handleClick = () => {
        setOpen(!open)
   }

   const handleSelect = (e) => {
        setIsoption(e);
        setOpen(false);
       
   }

  return (
    <div className="relative">
        <button onClick={handleClick} className="flex text-center bg-green/10 justify-between px-4 py-2 text-bg_green text-xl font-jost w-[200px] border-b-2 border-b-dark_green">{isOption} <RiArrowDropDownFill className="w-8 h-8"/> </button>
        <div>
        { open &&
        <div  className="absolute flex flex-col justify-center items-start right-0 top-16  w-[200px] h-[200px] bg-white  z-50 rounded shadow-xl">
             {
                dropdownOption.map((opt, i)=> <p onClick={()=> handleSelect(opt.option)} className="px-4 py-1 cursor-pointer hover:bg-bg_green/90 w-full hover:text-white ]" key={i}> {opt.option} </p>)  
             }
            </div>}
            </div>
           
    </div>
  )
}

export default CustomDropdown