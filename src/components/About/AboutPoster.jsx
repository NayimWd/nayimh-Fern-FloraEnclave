import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ic1 from "../../assets/image/ic1.png";
import ic2 from "../../assets/image/ic2.png";
import ic3 from "../../assets/image/ic3.png";
import ic4 from "../../assets/image/ic4.png";

import { Navigation } from "swiper/modules";

const AboutPoster = () => {
  return (
    <div className="w-full  section_p-y  bg-aboutBanner bg-center bg-no-repeat bg-fixed">
				<div className="container grid  w-full  font-jost">
					<Swiper
						slidesPerView={3}
						spaceBetween={10}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							250: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 2,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 4,
							},
						}}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper bg-none"
					>
						<SwiperSlide>
							<div className="flex flex-col justify-center items-center">
								<img className="w-24" src={ic1} alt="icon" />
								<p className="text-white mt-9 text-3xl "> GROWTH </p>
								<hr className="border-b-2 border-white w-24 mt-2 mb-5" />
								<p className="text-white font-thin text-center w-[80%]">
									{" "}
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.{" "}
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col justify-center items-center">
								<img className="w-24" src={ic2} alt="icon" />
								<p className="text-white mt-9 text-3xl "> INOVATION </p>
								<hr className="border-b-2 border-white w-24 mt-2 mb-5" />
								<p className="text-white font-thin text-center w-[80%]">
									{" "}
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.{" "}
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col justify-center items-center">
								<img className="w-24" src={ic3} alt="icon" />
								<p className="text-white mt-9 text-3xl "> JOURNEY </p>
								<hr className="border-b-2 border-white w-24 mt-2 mb-5" />
								<p className="text-white font-thin text-center w-[80%]">
									{" "}
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.{" "}
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex flex-col justify-center items-center">
								<img className="w-24" src={ic4} alt="icon" />
								<p className="text-white mt-9 text-3xl "> NATURE </p>
								<hr className="border-b-2 border-white w-24 mt-2 mb-5" />
								<p className="text-white font-thin text-center w-[80%]">
									{" "}
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.{" "}
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				{/* Insta section */}
			</div>
  )
}

export default AboutPoster