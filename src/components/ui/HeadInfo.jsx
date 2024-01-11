import React from "react";
import { FaFacebook, FaInstagramSquare, FaPhone, FaYoutube } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const HeadInfo = () => {
	return (
		<div
			className={`flex justify-center w-full h-12  items-center bg-bg_green border-b-2 border-dark_green padding_x  `}
		>
			<div className="container flex w-full items-center justify-between gap-10 md:gap-0">
				<span className="flex_center gap-1">
					<MdLocationOn className="w-4 h-4 text-white" />
					<p className="text-white"> Baghopara, Bogura</p>
				</span>
				<span className="flex_center gap-1">
					<FaPhone className="w-4 h-4 text-white" />
					<p className="text-white">+880 1743 447070</p>
				</span>
				<span className="flex_center gap-4">
					<FaFacebook className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
					<FaInstagramSquare className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
					<FaYoutube className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
				</span>
			</div>
		</div>
	);
};

export default HeadInfo;
