import logo from "../assets/image/plantLogo.svg";
import support from "../assets/image/support.webp";
import { IoMdPaperPlane } from "react-icons/io";
import { CgYoutube, CgFacebook, CgInstagram } from "react-icons/cg";
const Footer = () => {
	return (
		<section className="w-full bg-[#f5f5f5]">
			<div className=" flex flex-col border-t-2">
				{/* footer content */}
				<div className="container padding_x  w-full grid grid-cols-4   items-center justify-between py-10 gap-5">
					{/* first col */}
					<div className="flex justify-start items-center col-start-1 col-span-4 lg:col-start-1 lg:col-span-1 flex-col mb-8 lg:mb-0 gap-6">
						<span className="flex flex-col items-center gap-4">
							<img
								className="w-24 h-24 object-cover"
								src={logo}
								alt="logo"
								loading="lazy"
							/>
							<h1 className="text-3xl font-sans text-darker_green font-bold">
								{" "}
								Fern & Flora{" "}
							</h1>
						</span>
						<p className="font-jost text-sm leading-5 text-center">
							{" "}
							Subscribe our newsletter and get discount 30% off{" "}
						</p>

						<span className="flex items-center">
							{" "}
							<input
								className="outline-none w-full lg:w-[220px] py-1 px-4 font-jost text-base italic"
								placeholder="Your Email Address"
							/>{" "}
							<IoMdPaperPlane className="w-8 h-8 cursor-pointer bg-bg_green text-white p-1 hover:bg-darker_green" />{" "}
						</span>

						<div className="flex items-center gap-4">
							<CgInstagram className="w-8 h-8 bg-bg_green hover:bg-darker_green hover:darker_green p-1 text-white rounded cursor-pointer hover:scale-105 delay-75 duration-150 ease-linear" />
							<CgFacebook className="w-8 h-8 bg-bg_green hover:bg-darker_green p-1 text-white rounded cursor-pointer hover:scale-105 delay-75 duration-150 ease-linear" />
							<CgYoutube className="w-8 h-8 bg-bg_green hover:bg-darker_green p-1 text-white rounded cursor-pointer hover:scale-105 delay-75 duration-150 ease-linear" />
						</div>
					</div>
					{/* Menus */}
					<div className="h-full w-full col-start-1 col-span-4 lg:col-start-2 lg:col-span-4 flex  justify-between">
						<div className="w-full flex  lg:border-l flex-wrap justify-around">
							{/* second col */}
							<div className=" px-10 py-5 md:border-r sm:w-1/3">
								<h1 className="font-jost text-lg text-darker_green tracking-wide">
									{" "}
									Categories{" "}
								</h1>
								<hr className="border-b border-darker_green mt-3 sm:mt-5 w-10" />
								<div className="flex flex-col gap-2 mt-5 sm:mt-10 font-jost tracking-wide leading-8 text-darker_green">
									<p> Fruites </p>
									<p> Flowers </p>
									<p> Indoor </p>
									<p> Outdoor </p>
									<p> Herbs </p>
								</div>
							</div>
							{/* third col */}
							<div className=" px-10 py-5  md:border-r sm:w-1/3">
								<h1 className="font-jost text-lg text-darker_green tracking-wide ">
									{" "}
									Quick Links{" "}
								</h1>
								<hr className="border-b border-darker_green mt-3 sm:mt-5 w-10" />
								<div className="flex flex-col gap-2 mt-5 sm:mt-10 font-jost tracking-wide leading-8 text-darker_green">
									<p> About Us </p>
									<p> Privacy Policy </p>
									<p> Terms & Conditions </p>
									<p> Products Return </p>
									<p> Wholesale Policy </p>
								</div>
							</div>
							{/* 4th col */}
							<div className="px-10 py-5 col-start-1 col-span-4  lg:border-l sm:w-1/3">
								<h1 className="font-jost text-lg text-darker_green tracking-wide">
									{" "}
									Customer Care{" "}
								</h1>
								<hr className="border-b border-darker_green mt-3 sm:mt-5 w-10" />
								<div className="flex flex-col xsm:flex-row sm:flex-col xl:flex-row items-center gap-5 mt-5 sm:mt-10 font-jost tracking-wide leading-8 text-darker_green">
									<img
										className="w-[58px] h-[66px] object-cover object-center aspect-[1/1] "
										src={support}
										alt="img"
										loading="lazy"
									/>
									<div className=" font-jost">
										<span>
											<p className="leading-7 text-darker_green">
												{" "}
												9:30 AM to 7:30 PM{" "}
											</p>
											<h1 className="leading-8 traking-[0.5px] text-darker_green">
												{" "}
												+880 1743-44 7070{" "}
											</h1>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* copyright */}
				<div className=" h-20 w-full border-2">
					<p className="container flex items-center justify-center font-jost text-darker_green text-lg tracking-wide h-full px-4">
						{" "}
						All Rights ReservedCopyrighted by ©2023 Nayim Hasan
					</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
