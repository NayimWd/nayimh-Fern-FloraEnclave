import Input from "../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast, isEmail } from "../ui/helper";
import { useState } from "react";
import LoginImg from "./ReusableComponent/LoginImg";

const ForgetPassword = () => {
	// states for hold and store data
	const [inputData, setInputData] = useState({
		email: "",
	});
	let navigate = useNavigate();

	// onchange handler
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputData({ ...inputData, [name]: value });
	};

	// submit handler
	const handleSubmit = (e) => {
		e.preventDefault();

		// storing data to state
		const formData = { ...inputData };

		// input validation
		let email = inputData.email;

		if (!isEmail(email)) {
			ErrorToast("Enter Invalid Email");
		} else {
			SuccessToast("Email Send");
			console.log(formData);
			navigate("/EnterOTPCode");
			// setInputData({email: ""})
			// e.target.reset();
		}
	};
	return (
		<section className="container flex items-center justify-center min-h-screen w-full ">
			{/*/ container */}
			<div className="flex bg-creamy_white max-h-[750px] rounded-md">
				{/* form */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
					<div className="w-full xsm:w-[420px]  px-4 xsm:px-8 py-[50px]  md:py-14">
						<h1 className="font-sans w-full font-bold text-darker_green text-3xl  md:text-4xl flex_between items-center mb-6">
							Submit Email
						</h1>

						<p className="text-darker_green text-[16px] sm:text-[18px] mt-1 font-sans">
							Enter the email address associated with your account and we will
							send you a link to reset your password.
						</p>
						<form onSubmit={(e) => handleSubmit(e)} className="my-7">
							<Input
								name={"email"}
								type={"text"}
								placeHolder={"Enter Your Email"}
								label={"Email"}
								value={inputData.email}
								handleChange={handleChange}
							/>
							{/* Button */}
							<button
								type="submit"
								className="w-full h-[34px] rounded-md items-center flex justify-center bg-darker_green text-white text-lg py-1 font-sans"
							>
								{" "}
								Continue{" "}
							</button>
						</form>

						<p className="text-center text-lg text-dark_gray font-semibold font-reem cursor-pointer mb-10">
							Back To{" "}
							<Link
								className="text-darker_green font-bold text-xl underline"
								to="/signin"
							>
								{" "}
								Sign In{" "}
							</Link>{" "}
						</p>
					</div>
				</div>
				{/* image */}
				<LoginImg />
			</div>
		</section>
	);
};

export default ForgetPassword;
