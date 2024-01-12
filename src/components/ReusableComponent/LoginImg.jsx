import logimg from "../../assets/image/loginImg.webp";

const LoginImg = () => {
	return (
		<div className="hidden md:flex items-center  md:w-1/2">
			<img
				className="max-h-[750px]  object-center object-fill rounded-md md:h-[646px] lg:h-full"
				src={logimg}
				alt="bg"
			/>
		</div>
	);
};

export default LoginImg;
