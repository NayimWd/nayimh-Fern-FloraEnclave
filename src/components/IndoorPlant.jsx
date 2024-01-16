import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Navigation } from "swiper/modules";
import BestSellercard from "./ui/BestSellercard";

const IndoorPlant = () => {
	const [trees, setTrees] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/dummydata.json");
				const data = await response.json();
				setTrees(data);
			} catch (err) {
				console.log("error fetching data", err);
			}
		};
		fetchData();
	}, []);

	return (
		<section className="w-full mb-14 xsm:mb-20 sm:mb-24 lg:mb-[120px] ">
			<div className="container flex flex-col items-center padding_x">
				<h1 className="text-center font-jost text-black text-2xl md:text-3xl font-semibold leading-10 tracking-wider">
					{" "}
					Indoor Plants{" "}
				</h1>
				<hr className="text-green border-b-2 border-green w-24 mt-[6px]" />
				<p className="text-dark_gray tracking-wide leading-6 mt-4 font-jost">
					{" "}
					Decorate Your Home With Your Choice!{" "}
				</p>
				<div className="my-6  grid">
					<Swiper
						slidesPerView={4}
						spaceBetween={10}
						loop={false}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							250: {
								slidesPerView: 1,
							},
							290: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							420: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							640: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 40,
							},
						}}
						navigation={true}
						modules={[ Navigation]}
						className="mySwiper"
					>
						{trees.map((tree) => (
							<SwiperSlide key={tree?.id}>
								{" "}
								<BestSellercard
									image={tree?.img}
									title={tree?.name}
									price={tree?.price}
								/>{" "}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default IndoorPlant;
