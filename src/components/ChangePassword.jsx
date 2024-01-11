import { useState } from "react";
import Input from "../ui/Input";
import loginBg from "../assets/image/loginImg.webp";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast, isPassword } from "../ui/helper";

const ChangePassword = () => {
	// states for hold and store data
	// const [storeData, setStoreData] = useState({});
	const [inputData, setInputData] = useState({
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

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
		// setStoreData(formData)
		// input validation

		let password = inputData.password;
		let confirmPassword = inputData.confirmPassword;

		if (!isPassword(password)) {
			ErrorToast("Invalid Password! read Instruction");
		} else if (password !== confirmPassword) {
			ErrorToast("Password did not matched!");
		} else {
			SuccessToast("Reset success");
			console.log(formData);
			setInputData({ password: "", confirmPassword: "" });
			e.target.reset();
			navigate("/signin");
		}
	};
	return (
		<section className="container flex items-center justify-center min-h-screen w-full ">
			{/*/ container */}
			<div className="flex bg-creamy_white max-h-[750px] rounded-md">
				{/* form */}
				<div className="w-full md:w-1/2 flex flex-col justify-center items-center ">
					<div className="w-full xsm:w-[404px]  px-4 xsm:px-8 py-[50px]  md:py-14">
						<div className="font-sans w-full font-bold text-darker_green text-3xl  md:text-4xl flex_between items-center">
							<h1>Change Your Password</h1>
						</div>
						<p className="text-darker_green text-[16px] sm:text-[18px] mt-1 font-sans">
							Enter New Password to reset your password
						</p>
						<form onSubmit={(e) => handleSubmit(e)} className="mt-7">
							<Input
								name={"password"}
								type={"password"}
								placeHolder={"Enter Password"}
								label={"password"}
								value={inputData.password}
								handleChange={handleChange}
							/>
							<Input
								name={"confirmPassword"}
								type={"password"}
								placeHolder={"Re-type Password"}
								label={"password"}
								value={inputData.confirmPassword}
								handleChange={handleChange}
							/>

							{/* Button */}
							<button
								type="submit"
								className="w-full h-[34px] rounded-md items-center flex justify-center bg-darker_green text-white text-lg py-1"
							>
								{" "}
								Reset Password{" "}
							</button>
						</form>
					</div>
				</div>
				{/* image */}
				<div className="hidden md:flex items-center  md:w-1/2">
					<img
						className="max-h-[750px]  object-center object-fill rounded-md md:h-[646px] lg:h-full"
						src={loginBg}
						alt="bg"
					/>
				</div>
			</div>
		</section>
	);
};

export default ChangePassword;
