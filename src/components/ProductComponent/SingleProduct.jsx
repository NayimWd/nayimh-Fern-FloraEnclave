import React, {  useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DynamicBanner from "../ReusableComponent/DynamicBanner";
import PlantImg from "../../assets/image/product4.webp";
import { CgHeart } from "react-icons/cg";
import { ErrorToast, SuccessToast } from "../../ui/helper";
import SizeGuide from "./SizeGuide";
import UseToggle from "../hooks/UseToggle";
import Terms from "./Terms";

const SingleProduct = () => {
	const { id } = useParams();
	const [openSizeModal, setOpenSizeModal] = UseToggle(false);
	const [termsModal, settermsModal] = UseToggle(false);
	const [click, setClick] = UseToggle(false);

	const location = useLocation();
	const pathname = location.pathname.slice(1);

	const handleClick = () => {
		setClick(!click); //function for wishlist button
		click
			? SuccessToast("Added to WishList")
			: ErrorToast("Removed From WishList");
	};

	const handleSizeModal = () => {
      setOpenSizeModal(!openSizeModal)
	};

  const handleTerms = () => {
    settermsModal(!termsModal)
  }


	return (
		<>
			<DynamicBanner pathname={pathname} name="Flower" />
			<div className="container section_p-y w-full">
				<div className="flex flex-col md:flex-row justify-center  md:gap-20">
					{/* single Product image */}
					<div className="w-full md:w-1/2 ">
						<img className="w-full rounded" src={PlantImg} alt="plantImg" />
					</div>
					{/* single Product Details */}
					<div className="w-full md:w-1/2 px-2 mt-5 md:mt-0">
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
									Things You Need To Know There are many variations of passages
									of Lorem Ipsum available, but the majority have suffered
									alteration in some form, by injected humour, or randomised
									words which don't look even slightly believable. If you are
									going to use a passage of Lorem Ipsum, you need to...
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
								<p onClick={handleTerms} className="cursor-pointer font-bold xsm:text-lg xsm:tracking-[.75px]  hover:text-darker_green">
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
                  <Terms openModal={termsModal} settermsModal={settermsModal} handleModal={handleTerms}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
