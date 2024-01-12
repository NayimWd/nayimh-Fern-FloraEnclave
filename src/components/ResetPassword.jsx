import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../ui/helper";
import { useState } from "react";
import OtpInput from "react-otp-input";
import MinutesCoundown from "./hooks/MinutesCoundown";
import LoginImg from "./ReusableComponent/LoginImg";

const ResetPassword = () => {
	// states for hold and store data
	let navigate = useNavigate();
	const [otp, setOtp] = useState("");
	const [expire, setExpire] = useState(false);

	// onchange handler
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputData({ ...inputData, [name]: value });
	};

	// submit handler
	const handleSubmit = (e) => {
		e.preventDefault();
		if (otp.length !== 5) {
			ErrorToast("Otp length should be 5");
		} else {
			console.log(otp);
			navigate("/ChagnePassword");
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
							Enter OTP
						</h1>

						<p className="text-darker_green text-[16px] sm:text-[18px] mt-1 font-sans">
							Enter the OTP Code associated with your account and get access to
							reset your password.
						</p>
						<form
							onSubmit={(e) => handleSubmit(e)}
							className="my-7 flex flex-col items-center"
						>
							<OtpInput
								value={otp}
								onChange={setOtp}
								numInputs={5}
								renderSeparator={<span> </span>}
								renderInput={(props) => <input {...props} />}
								inputStyle={{
									width: 40,
									height: 40,
									marginBottom: 30,
									borderRadius: 4,
									backgroundColor: "#A0AB84",
									marginRight: 10,
									textAlign: "center",
								}}
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
						{/* Coundown timer and resend button */}

						<div className="flex items-center justify-center">
							<div className=" flex gap-4 text-center text-xs text-dark_gray font-semibold font-reem cursor-pointer mb-5">
								Expired in :{" "}
								<MinutesCoundown seconds={10} setExpire={setExpire} />{" "}
							</div>
						</div>

						<p className="text-center text-xs text-dark_gray font-semibold font-reem cursor-pointer mb-10">
							Didn't Recieve Code?{" "}
							<span className="text-darker_green font-bold  underline">
								{" "}
								Resend{" "}
							</span>{" "}
						</p>
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

export default ResetPassword;
