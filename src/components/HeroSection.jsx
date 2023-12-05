const HeroSection = () => {
	return (
		<section className="w-full h-screen bg-heroBg  object-cover bg-center bg-no-repeat mt-[136px] transition-all delay-200 duration-150 ">
			<div className="w-full  h-full flex_center flex-col  bg-black/50 bg-cover bg-center gap-6 padding_x section_p-y">
				<h1 className="text-white w-full text-center font-medium md:font-bold font-reem text-4xl sm:text-5xl md:text-[64px] leading-10 sm:leading-[56px] md:leading-[72px] tracking-[1.5px]">
					{" "}
					Happiness blooms from within{" "}
				</h1>
				<p className="text-white text-center font-lato leading-7 tracking-[0.5px] ">
					Our environment, the world in which we live and work, is a mirror of
					our attitudes and expectations.
				</p>
				<div className="flex items-center gap-3 xsm:gap-7 font-lato">
					<button className=" px-6 py-2 md:px-[41px] md:py-[16px] bg-white text-bg_green tracking-[0.2px] rounded-sm btn_animation-top hover:bg-bg_green hover:text-white  ">
						Shop Now
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
