import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";

const Input = ({ placeHolder, type, label }) => {
	// state for outline
	const [click, setClick] = useState(false);
	// state for password field
	const [close, setClose] = useState(false);
  // state for type
  const [inputType, setInputType] = useState(type)
  
	// setting icon based on input type
	let icon = "";

	if (type === "text") {
		icon = <MdOutlineMail className={`w-6 h-6  ${
			click ? "text-soft_green" : "text-darker_green"
		}`} />;
	} else if (type === "password") {
		icon = <MdLockOutline className={`w-6 h-6  ${
			click ? "text-soft_green" : "text-darker_green"
		}`} />;
	}

  const handleClose = () => {
    setClose(!close);
    if(inputType === "password"){
      setInputType("text")
    } else {
      setInputType("password");
    }
  }

	return (
		<div className="relative">
   {/*<p className="text-dark_gray text-[16px]  mt-1 font-sans">{label}</p>*/}
			<span
				className={`flex items-center justify-between  w-full h-[34px] bg-white_clr p-4 rounded-md mb-4 border-2  ${
					click ? "border-soft_green" : "border-light_gray"
				}`}
			>
				{icon}
				
				<input
					
					placeholder={placeHolder}
					type={inputType}
					className="h-full sm:w-[280px] p-2 w-full rounded-md outline-none bg-white text-dark_gray placeholder:text-subtle_gray font-sans"
					onFocus={() => setClick(true)}
					onBlur={() => setClick(false)}
				/>
				
        {/* 
        eye icon and icon toggle */}
				{type === "password" && (close ? <AiFillEye className="w-6 h-6 text-darker_green" onClick={handleClose}/> : <IoMdEyeOff className="w-6 h-6 text-darker_green" onClick={handleClose}/>)}
			</span>
			{
				click && type === "password" ? <p className="absolute top-10 right-0 bg-soft_green py-1 px-2 rounded-md text-white">password must contained: 
				<br/>	
				minimum 6 character, <br/> 1 number, <br/> 1 letter & <br/> 1 special symbol  </p> : ""
			}
		</div>
	);
};

export default Input;
