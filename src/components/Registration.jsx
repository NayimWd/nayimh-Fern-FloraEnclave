import React, { useState } from "react";
import Input from "../ui/Input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import {
	ErrorToast,
	SuccessToast,
	isEmail,
	isEmpty,
	isPassword,
} from "../ui/helper";
import LoginImg from "./ReusableComponent/LoginImg";

const Registration = () => {
	// states for hold and store data
	const [inputData, setInputData] = useState({
		name: "",
		email: "",
		password: "",
		check: "",
	});

	const navigate = useNavigate();

	// onchange handler
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setInputData({ ...inputData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// store form data to state
		const formData = { ...inputData };

		// form validatoin
		let name = inputData.name;
		let email = inputData.email;
		let password = inputData.password;
		let check = inputData.check;

		if (isEmpty(name)) {
			ErrorToast("Enter your name");
		} else if (!isEmail(email)) {
			ErrorToast("Enter a valid email");
		} else if (!isPassword(password)) {
			ErrorToast("Invalid Password! read Instruction");
		} else if (isEmpty(check)) {
			ErrorToast("Fill the checkbox");
		} else {
			SuccessToast("Registration success!");
			console.log(formData);
			// navigate("/signin")
			setInputData({ email: "", password: "", check: "" });
			e.target.reset();
		}
	};
	return (
		<section className="container flex items-center justify-center min-h-screen w-full ">
			{/*/ container */}
			<div className="flex bg-creamy_white  rounded-md">
				{/* form */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
					<div className="w-full xsm:w-[404px]  px-4 xsm:px-8 py-[50px]  md:py-14">
						<span className="font-sans font-bold text-darker_green text-3xl  md:text-4xl flex_between items-center">
							<h1>Get Started Now</h1>{" "}
							<Link to="/" title="home">
								{" "}
								<TiHome className="w-9 cursor-pointer" />{" "}
							</Link>
						</span>
						<p className="text-darker_green text-[16px] sm:text-[18px] mt-1 font-sans ">
							Enter your Information to create your account
						</p>
						<form onSubmit={(e) => handleSubmit(e)} className="mt-7">
							<Input
								name={"name"}
								type={"text"}
								placeHolder={"Enter Your Name"}
								label={"name"}
								value={inputData.name}
								handleChange={handleChange}
							/>

							<Input
								name={"email"}
								type={"text"}
								placeHolder={"Enter Your Email"}
								label={"Email"}
								value={inputData.email}
								handleChange={handleChange}
							/>

							<Input
								name={"password"}
								type={"password"}
								placeHolder={"Enter Password"}
								label={"password"}
								value={inputData.password}
								handleChange={handleChange}
							/>
							{/* Button */}
							<button className="w-full mt-6 h-[34px] rounded-md items-center flex justify-center bg-darker_green text-white text-lg py-1">
								{" "}
								sign in{" "}
							</button>
						</form>
						{/* other option of sign in */}
						<div className="my-8 flex justify-between items-center">
							<hr className="w-[86px] xsm:w-[110px] border-t-2 border-subtle_gray" />{" "}
							<p className="text-[14px] text-dark_green font-bold">
								or sign in with
							</p>{" "}
							<hr className="w-[86px] xsm:w-[110px] border-t-2 border-subtle_gray" />
						</div>
						{/* sign in button for google & fb */}
						<div className="w-full flex justify-between gap-4 mb-8">
							{/* Google */}
							<div className="flex gap-2 xsm:gap-3 items-center justify-center h-12 w-1/2 bg-white  cursor-pointer rounded-md">
								<FcGoogle className="w-6" />
								<p className="font-bold text-xl text-darker_green">Google</p>
							</div>
							{/* fb */}
							<div className="flex gap-2 xsm:gap-3 items-center justify-center h-12 w-1/2 bg-white  cursor-pointer rounded-md">
								<FaFacebook className="w-6" />
								<p className="font-bold text-xl text-darker_green">Facebook</p>
							</div>
						</div>
						<p className="text-center text-lg text-dark_gray font-semibold font-reem">
							Don't have an account?{" "}
							<span className="text-darker_green font-extrabold text-xl cursor-pointer font-sans">
								<Link to="/signin"> Sign In </Link>
							</span>
						</p>
					</div>
				</div>
				{/* image */}
				<LoginImg />
			</div>
		</section>
	);
};

export default Registration;
