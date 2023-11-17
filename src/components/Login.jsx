import React from "react";
import Input from "../ui/Input";
import loginBg from "../assets/image/loginImg.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container flex items-center justify-center min-h-screen w-full bg-white_clr">
			{/*/ container */}
			<div className="flex bg-creamy_white  rounded-md">
				{/* form */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
					<div className="w-full md:w-[404px]  px-[10px] sm:px-8 py-[80px] md:py-0">
						<h1 className="font-sans font-medium md:font-bold text-darker_green text-2xl sm:text-3xl  md:text-4xl">
							Welcome back!
						</h1>
						<p className="text-darker_green text-[16px] sm:text-[18px] mt-1 font-sans">
							Enter your Credentials to access your account
						</p>
						<form onSubmit={(e) => handleSubmit(e)} className="mt-7">
							<Input
								type={"text"}
								placeHolder={"Enter Your Email"}
								label={"Email"}
							/>

							<Input
								type={"password"}
								placeHolder={"Enter Password"}
								label={"password"}
							/>

							<div className="flex justify-between -mt-2 mb-4 px-1 text-sm text-subtle_gray">
								<span className="flex gap-2">
									<input className="accent-dark_green" type="checkbox" />{" "}
									<p>remember me</p>
								</span>
								<span className="font-bold"> forget password </span>
							</div>
							{/* Button */}
							<button className="w-full h-[34px] rounded-md items-center flex justify-center bg-darker_green text-white text-lg py-1">
								{" "}
								sign in{" "}
							</button>
						</form>
						{/* other option of sign in */}
						<div className="my-8 flex justify-between items-center">
							<hr className="w-[100px] border-t-2 border-subtle_gray" />{" "}
							<p className="text-[14px] text-dark_green font-bold">
								or sign in with
							</p>{" "}
							<hr className="w-[100px] border-t-2 border-subtle_gray" />
						</div>
						{/* sign in button for google & fb */}
						<div className="w-full flex justify-between gap-4 mb-8">
							{/* Google */}
							<div className="flex gap-3 items-center justify-center h-12 w-1/2 bg-subtle_gray  cursor-pointer rounded-md">
								<FcGoogle className="w-6" />
								<p className="font-bold text-xl text-darker_green">Google</p>
							</div>
							{/* fb */}
							<div className="flex gap-3 items-center justify-center h-12 w-1/2 bg-subtle_gray  cursor-pointer rounded-md">
								<FaFacebook className="w-6" />
								<p className="font-bold text-xl text-darker_green">Facebook</p>
							</div>
						</div>
						<p className="text-center text-lg text-dark_gray font-semibold font-reem">
							Don't have an account?{" "}
							<span className="text-darker_green font-extrabold cursor-pointer font-sans">
								Sign Up
							</span>
						</p>
					</div>
				</div>
				{/* image */}
				<div className="hidden md:block  md:w-1/2 ">
					<img className="max-h-[750px] rounded-md" src={loginBg} alt="bg" />
				</div>
			</div>
		</div>
	);
};

export default Login;
