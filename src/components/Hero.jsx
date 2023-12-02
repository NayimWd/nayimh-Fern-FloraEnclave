import React from "react";
import img1 from "../assets/image/hero1.png";
import img2 from "../assets/image/hero2.png";
import img3 from "../assets/image/hero3.png";

import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
	return (
		<section className="bg-bg_green w-full   section_p-y">
		
			{/* for content */}
			<div className="container  flex flex-col  md:flex-row gap-10 lg:gap-0 justify-between items-center w-full  mt-[100px] padding_x -right-[1px]">
				<div className="flex  justify-start items-center w-full md:w-1/2 mb-8">
					<div className="flex flex-col items-start justify-center w-full lg:w-[420px] gap-5 md:gap-8 ">
						<h1 className="text-white w-full font-medium md:font-bold font-reem text-4xl sm:text-5xl md:text-[64px] leading-10 sm:leading-[56px] md:leading-[72px] tracking-[1.5px]">
							{" "}
							Happiness blooms from within{" "}
						</h1>
						<p className="text-white font-lato leading-7 tracking-[0.5px] ">
							Our environment, the world in which we live and work, is a mirror
							of our attitudes and expectations.
						</p>
						<div className="flex items-center gap-3 xsm:gap-7 font-lato">
							<button className=" px-6 py-2 md:px-[41px] md:py-[16px] bg-white text-bg_green tracking-[0.2px] rounded-sm btn_animation-top hover:bg-subtle_gray  ">
								Shop Now
							</button>
							<button className="flex items-center gap-2 xsm:gap-3 xsm:hover:gap-[14px] sm:gap-4 hover:gap-[18px] ease-in duration-200 text-white ">
								{" "}
								Explore Plants <FaArrowRightLong className="w-4" />
							</button>
						</div>
					</div>
				</div>
				{/* for images */}
				<div className="flex  items-center justify-start w-full h-full md:w-1/2  gap-[5px]">
					<div className="hidden xl:flex flex-col gap-[5px]  w-[40%] h-full">
						<div className="relative ">
							<img
								className="object-cover bg-center w-full h-1/2 cursor-pointer rounded-md"
								src={img1}
								alt="tree"
							/>
							<span className="absolute  flex-col justify-end items-start  p-3 sm:p-5 md:p-3 lg:p-6 gap-4 overlay">
								<h1 className="font-lato text-white text-3xl md:text-xl lg:text-3xl ">
									Anthurium Flower
								</h1>
								<p className="font-lato text-white">
									The flower of human being. The plant always grow whatever
									season and weather...
								</p>
								<button className="text-bg_green py-2  bg-white w-[100%] rounded uppercase">
									Read More
								</button>
							</span>
						</div>
						<div className="relative overflow-hidden">
							<img
								className="  object-cover bg-center w-full h-1/2 cursor-pointer rounded-md"
								src={img2}
								alt="tree"
							/>
							<span className="absolute  flex-col justify-end items-start  p-3 sm:p-5 md:p-3 lg:p-6 gap-4 overlay">
								<h1 className="font-lato text-white text-3xl md:text-xl lg:text-3xl ">
									Anthurium Flower
								</h1>
								<p className="font-lato text-white">
									The flower of human being. The plant always grow whatever
									season and weather...
								</p>
								<button className="text-bg_green py-2  bg-white w-[100%] rounded uppercase">
									Read More
								</button>
							</span>
						</div>
					</div>
					<div className=" w-full xl:w-[60%] h-full relative overflow-hidden">
						<img
							className="w-full object-cover object-center h-1/2 md:h-full cursor-pointer rounded-md"
							src={img3}
							alt="tree"
						/>
						<span className="absolute  flex-col justify-end items-start  p-3 sm:p-5 md:p-3 lg:p-6 gap-4 overlay">
							<h1 className="font-lato text-white text-3xl md:text-xl lg:text-3xl ">
								Anthurium Flower
							</h1>
							<p className="font-lato text-white">
								The flower of human being. It has meaningful of fact that the
								plant always grow whatever season and weather...
							</p>
							<button className="text-bg_green py-2  bg-white w-[100%] rounded uppercase">
								Read More
							</button>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
