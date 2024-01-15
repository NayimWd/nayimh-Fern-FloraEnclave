import { lazy } from "react";
import about1 from "../../assets/image/about1.webp";
import about2 from "../../assets/image/about2.webp";
const InstaImage = lazy(() => import("./InstaImage"));
const AboutPoster = lazy(() => import("./AboutPoster"));

const AboutComponent = () => {
	return (
		<section className="w-full section_p-y ">
			<div className="container grid grid-cols-1 md:grid-cols-2  w-full justify-between items-center gap-8 mb-24">
				<div className="w-full order-2 md:order-1 flex flex-col items-end justify-center">
					<div className=" w-full lg:w-[90%]">
						<p className=" text-3xl sm:text-4xl md:text-[40px] leading-[43px] font-jost">
							{" "}
							Our Story{" "}
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
							dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
							consectetuer adipiscing elit.
						</p>
					</div>
				</div>
				<div className="w-full order-1">
					<img
						className="w-full lg:w-[90%] hover:scale-90 delay-300 duration-300"
						src={about1}
						alt="aboutImg"
					/>
				</div>
			</div>
			<div className="container grid md:grid-cols-2 w-full justify-between items-center gap-12 mb-14">
				<div className="w-full">
					<img
						className=" w-full lg:w-[90%] hover:scale-90 delay-300 duration-300"
						src={about2}
						alt="aboutImg"
					/>
				</div>
				<div className="w-full flex flex-col items-start justify-center">
					<div className="w-full lg:w-[90%]">
						<p className="text-3xl sm:text-4xl md:text-[40px] leading-[43px] font-jost">
							Who We Are ?{" "}
						</p>
						<span className="flex items-center gap-5 mt-5 mb-9">
							{" "}
							<hr className="border-b-[3px] border-green w-20" />
							<p className="font-jost text-xs sm:text-base text-dark_gray traking-[3.2px] leading-[18px] ">
								{" "}
								THE HIGH STRESS FAVOUTIRE{" "}
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
							dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet,
							consectetuer adipiscing elit.
						</p>
					</div>
				</div>
			</div>
			
				<AboutPoster />
				
				
			<InstaImage />
		</section>
	);
};

export default AboutComponent;
