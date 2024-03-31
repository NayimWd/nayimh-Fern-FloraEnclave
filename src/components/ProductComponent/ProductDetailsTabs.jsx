import { useState } from "react";
import productImage from "../../assets/image/product7.webp";

const ProductDetailsTabs = () => {
	const [selectTab, setSelectedTab] = useState("DESCRIPTION");

	const handleTabs = (e) => {
		setSelectedTab(e);
	};

	return (
		<div className="padding_x mt-8 sm:mt-16">
			<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-9 border-y py-6">
				<p
					onClick={() => handleTabs("DESCRIPTION")}
					className={`font-jost font-semibold  py-1 leading-6 tracking-[1.6px]  border-b-4 border-white hover:border-bright_green hover:delay-300 hover:duration-500 cursor-pointer ${
						selectTab === "DESCRIPTION"
							? "text-black border-b-bright_green"
							: "text-dark_gray border-white"
					} `}
				>
					DESCRIPTION
				</p>
				<p
					onClick={() => handleTabs("INFORMATION")}
					className={`font-jost font-semibold  py-1 leading-6 tracking-[1.6px]  border-b-4 border-white hover:border-bright_green hover:delay-300 hover:duration-500 cursor-pointer ${
						selectTab === "INFORMATION"
							? "text-black border-b-bright_green"
							: "text-dark_gray border-white"
					} `}
				>
					ADDITIONAL INFORMATION
				</p>
				<p
					onClick={() => handleTabs("REVIEW")}
					className={`font-jost font-semibold  py-1 leading-6 tracking-[1.6px]  border-b-4 border-white hover:border-bright_green hover:delay-300 hover:duration-500 cursor-pointer ${
						selectTab === "REVIEW"
							? "text-black border-b-bright_green"
							: "text-dark_gray border-white"
					} `}
				>
					REVIEW
				</p>
			</div>
			<div className="mt-10">
				<div
					className={` ${
						selectTab === "DESCRIPTION" ? "grid " : "hidden"
					} grid-cols-1 md:grid-cols-2  w-full justify-between items-center gap-8 `}
				>
					<div className="w-full order-2 md:order-1 flex flex-col items-end justify-center">
						<div className=" w-full lg:w-[90%]">
							<p className=" text-2xl sm:text-4xl md:text-[40px] leading-[43px] font-jost">
								{" "}
								Things You Need To Know{" "}
							</p>
							<span className="flex items-center gap-5 mt-5 mb-9">
								{" "}
								<hr className="border-b-[3px] border-green w-20" />
								<p className="font-jost text-xs sm:text-base text-dark_gray traking-[3.2px] leading-[18px] ">
									{" "}
									WE GROW TOP QUALITY HEALTHY PLANTS{" "}
								</p>
							</span>
							<p className="font-jost text-[15px] leading-6 mb-4 text-dark_gray">
								Praesent metus tellus, elementum eu, semper a, adipiscing nec,
								purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
								lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
								Aenean massa.
							</p>
							<p className="font-jost text-[15px] leading-6  text-dark_gray">
								In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
								Vivamus consectetuer hendrerit lacus. In hac habitasse platea
								dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit
								amet, consectetuer adipiscing elit.
							</p>
						</div>
					</div>
					<div className="w-full order-1">
						<img
							className="w-full lg:w-[100%]"
							src={productImage}
							alt="aboutImg"
							loading="lazy"
						/>
					</div>
				</div>
				<div
					className={` ${
						selectTab === "INFORMATION" ? "grid " : "hidden"
					} grid-cols-1 md:grid-cols-2  w-full justify-between items-start gap-8 `}
				>
					<div className="w-full order-2 md:order-1 flex flex-col">
						<div className=" w-full lg:w-[90%]">
							<p className=" text-2xl sm:text-4xl md:text-[40px] leading-[43px] font-jost">
								{" "}
								Things You Need To Know{" "}
							</p>
							<span className="flex items-center gap-5 mt-5 mb-9">
								{" "}
								<hr className="border-b-[3px] border-green w-20" />
								<p className="font-jost text-xs sm:text-base text-dark_gray traking-[3.2px] leading-[18px] ">
									{" "}
									MORE INFOMATION TO YOU{" "}
								</p>
							</span>
							<div className="w-full flex flex-wrap justify-between items-center">
								<div className="">
									<p className="font-jost text-lg leading-6 mb-8 text-dark_gray">
										We use industry standard SSL encryption to protect your
										details. Potentially sensitive information such as your
										name, address and card details are encoded so they can only
										be read on the secure server.
									</p>
									<p className="font-jost font-semibold text-lg leading-6 mb-3 text-dark_gray">
										{" "}
										▶ payments Through Bkash, Rocket and Nagad{" "}
									</p>
									<p className="font-jost font-semibold text-lg leading-6 mb-3 text-dark_gray">
										{" "}
										▶ We offer the option of paying cash on delivery{" "}
									</p>
									<p className="font-jost font-semibold text-lg leading-6 mb-3 text-dark_gray">
										{" "}
										▶ Fast delivery{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full order-1">
						<img
							className="w-full lg:w-[100%]"
							src={productImage}
							alt="aboutImg"
							loading="lazy"
						/>
					</div>
				</div>
				<div
					className={` ${
						selectTab === "REVIEW" ? "grid " : "hidden"
					} grid-cols-1 md:grid-cols-2  w-full justify-between items-center gap-8 `}
				>
					<h1>Review</h1>
				</div>
				{/*Related Product*/}
			</div>
		</div>
	);
};

export default ProductDetailsTabs;
