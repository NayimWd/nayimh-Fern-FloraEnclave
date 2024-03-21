import { MdOutlineClose } from "react-icons/md";
import emptyImg from "../assets/image/Frame.png";

const Favoritenav = ({ close }) => {
	return (
		<div className="flex flex-col  items-center  w-full xsm:w-[390px] h-screen  bg-white_clr  shadow-lg z-10">
		<div className='flex_between items-center w-full   border-b border-dotted'>
        <span className="flex_center h-14 w-14 border-r">
        <MdOutlineClose onClick={close} className='w-7 h-7 bg-dark_green text-white rounded cursor-pointer '/>
        </span>
        <p className='text-darker_green text-xl font-bold font-sans'> WISHLIST </p>
        <p className='flex_center h-14 w-14 text-darker_green text-xl font-bold font-sans  border-l'> 2 </p>
        </div>
			{/*if cart empty apply logic here */}
			<div className="flex flex-col w-full h-full justify-center items-center p-8">
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
