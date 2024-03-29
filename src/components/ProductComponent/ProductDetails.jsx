import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { CgHeart } from "react-icons/cg";
import SizeGuide from "./SizeGuide";
import Terms from "./Terms";
import { ErrorToast, SuccessToast } from "../../ui/helper";
import UseToggle from "../hooks/UseToggle";

import { useState } from "react";

const ProductDetails = () => {
	const [openSizeModal, setOpenSizeModal] = UseToggle(false);
	const [termsModal, settermsModal] = UseToggle(false);
	const [increment, setIncrement] = useState(1);
	const [click, setClick] = UseToggle(false);

	const handleClick = () => {
		setClick(!click); //function for wishlist button
		click
			? SuccessToast("Added to WishList")
			: ErrorToast("Removed From WishList");
	};

	const handleSizeModal = () => {
		setOpenSizeModal(!openSizeModal);
	};

	const handleTerms = () => {
		settermsModal(!termsModal);
	};

	// increment handler
	const handleIncrement = (e) => {
		if (e === "+") {
			if (increment === 15) {
				return ErrorToast("Stock Out");
			} else {
				setIncrement(increment + 1);
			}
		} else if (e === "-") {
			if (increment < 2) {
				return setIncrement(1);
			}
			return setIncrement(increment - 1);
		}
	};

	return (
		<>
			<div className="flex justify-between items-center w-full">
				<div>
					<p className="font-sans text-xl xsm:text-2xl leading-7   font-bold">
						{" "}
						Laceleaf Peace{" "}
					</p>
					<p className="mt-2 text-dark_green xsm:text-lg leading-7 font-jost font-bold">
						{" "}
						৳300 BDT
					</p>
				</div>
				<span data-tooltip="Wish List" data-flow="top" className="">
					{" "}
					<CgHeart
						onClick={handleClick}
						className={`w-10 h-10 xsm:w-14 xsm:h-14 cursor-pointer  border rounded-full p-2 xsm:p-3 ${
							!click
								? "bg-dark_green text-white disabled:"
								: "text-dark_green  "
						}`}
						aria-level="wishList button"
					/>{" "}
				</span>
			</div>
			<div className="border-t mt-6 lg:mt-12">
				<div className=" py-5 sm:py-7 lg:py-10">
					<p className="font-jost leading-7 tracking-wide text-dark_gray text-sm xsm:text-base">
						Things You Need To Know There are many variations of passages of
						Lorem Ipsum available, but the majority have suffered alteration in
						some form, by injected humour, or randomised words which don't look
						even slightly believable. If you are going to use a passage of Lorem
						Ipsum, you need to...
					</p>
				</div>
				<fieldset className=" border py-4 px-2 md:py-7 md:px-5 rounded-sm mb-5">
					<legend className=" bg-white px-4  ml-12  text-bright_green font-bold text-lg xsm:text-xl leading-6 font-jost">
						Special Offer
					</legend>

					<span className="font-jost text-bright_green leading-7 sm:text-lg">
						<p>
							<span className="mr-1">▶</span> In Stock
						</p>
						<p>▶ Free Delivery Available*</p>
						<p>▶ Sale 10% Off On Over 1500 Taka Order</p>
					</span>
				</fieldset>
				<div className="flex xsm:mt-10 gap-3 xsm:gap-5 sm:gap-8 font-jost leading-6 ">
					<p
						onClick={handleSizeModal}
						className=" cursor-pointer font-bold xsm:text-lg xsm:tracking-[.75px]  hover:text-darker_green"
					>
						Size Guide
					</p>
					<p
						onClick={handleTerms}
						className="cursor-pointer font-bold xsm:text-lg xsm:tracking-[.75px]  hover:text-darker_green"
					>
						Delivery & Return Policy
					</p>
				</div>
				{/* Size and tc modals */}
				<SizeGuide
					openModal={openSizeModal}
					setOpenModal={setOpenSizeModal}
					handleModal={handleSizeModal}
				/>
				{/* terms & condition modals */}
				<Terms
					openModal={termsModal}
					settermsModal={settermsModal}
					handleModal={handleTerms}
				/>
			</div>
			<div className="flex  flex-wrap justify-start items-center gap-8 mt-6">
				<div className="flex border-2 rounded-sm">
					<div className=" flex w-20 justify-center items-center  ">
						<p className="text-lg font-jost leading-7 font-bold">{increment}</p>
					</div>
					<div className="flex flex-col border-l-2">
						<button
							disabled={increment === 15}
							aria-level="increment button"
							onClick={() => handleIncrement("+")}
							className="border-b px-3 cursor-pointer"
						>
							<MdArrowDropUp aria-level="increment icon" className="w-8 h-8 " />
						</button>
						<button
							disabled={increment === 1}
							aria-level="increment button"
							onClick={() => handleIncrement("-")}
							className="px-3 cursor-pointer"
						>
							<MdArrowDropDown
								aria-level="decrement icon"
								className="w-8 h-8 "
							/>
						</button>
					</div>
				</div>
				<div className="flex gap-3 lg:gap-8">
					<button className="bg-dark_green text-sm sm:text-base text-white py-3 px-5 xsm:py-4 xsm:px-7 lg:py-5 lg:px-10 rounded">
						ADD TO CART
					</button>
					<button className="bg-dark_green text-sm sm:text-base text-white py-3 px-5 xsm:py-4 xsm:px-7 lg:py-5 lg:px-10 rounded">
						BUY NOW
					</button>
				</div>
			</div>
			<div className="mt-7">
				<p className="sm:text-lg text-darker_green font-bold font-lato tracking-[1px]">
					Categories: Flower
				</p>
			</div>
		</>
	);
};

export default ProductDetails;
