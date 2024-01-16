import React from "react";
import InputField from "../ReusableComponent/InputField";

const ContactForm = () => {
	const handleForm = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container w-full">
			<div className="w-full flex flex-col items-center justify-center mb-5 sm:mb-7 md:mb-8">
				<h1 className="font-jost text-darker_green leading-[48px] tracking-wide text-2xl xsm:text-3xl sm:text-4xl md:text-[40px]">
					{" "}
					Contact Form{" "}
				</h1>
				<hr className="border-b-[2px] border-darker_green w-[100px] mt-4 mb-4 sm:mb-6 md:mb-8" />
			</div>
			{/* contact form */}

			<form
				onSubmit={handleForm}
				className="px-3 xsm:px-6 md:px-20 flex flex-col items-center"
			>
				<div className="w-full flex justify-center items-center gap-5">
					<InputField type="text" label="Name" placeHolder="Enter Your Name" />
					<InputField
						type="text"
						label="Address"
						placeHolder="Enter Your Address"
					/>
				</div>
				<div className="mt-10 w-full">
					<InputField
						type={"textarea"}
						row="10"
						label="Your Message"
						placeHolder="Your Message"
					/>
				</div>
				<button
					className=" mt-9 text-center text-white bg-bg_green hover:bg-darker_green py-4 px-10 rounded"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
