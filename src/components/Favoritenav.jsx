import { MdOutlineClose } from "react-icons/md";
import emptyImg from "../assets/image/Frame.png";

const Favoritenav = ({ close }) => {
	return (
		<div className="flex flex-col  items-center  w-full xsm:w-[390px] h-screen p-8 bg-white_clr  shadow-lg z-10">
			<div className="flex_between w-full">
				<p className="text-darker_green text-xl font-bold font-sans">
					{" "}
					Favorite{" "}
				</p>
				<MdOutlineClose
					onClick={close}
					className="w-6 h-6 bg-dark_green text-white rounded cursor-pointer"
				/>
			</div>
			{/*if cart empty apply logic here */}
			<div className="flex flex-col w-full h-full justify-center items-center ">
				<p className="text-darker_green font-sans font-semibold">
					{" "}
					Favorite Trees is empty{" "}
				</p>
				<img className="w-[120px] mt-6" src={emptyImg} alt="empty" />
			</div>
		</div>
	);
};

export default Favoritenav;
