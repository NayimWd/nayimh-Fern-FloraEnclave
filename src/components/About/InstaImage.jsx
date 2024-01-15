import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

const InstaImage = () => {
	const [trees, setTrees] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/aboutImage.json");
				const data = await response.json();
				setTrees(data);
			} catch (err) {
				console.log("error fetching data", err);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="w-full mt-12">
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				loop={false}
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
					350: {
						slidesPerView: 2,
					},
					640: {
						slidesPerView: 4,
						spaceBetween: 2,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 4,
					},
				}}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper bg-none"
			>
				{trees?.map((tree) => (
					<SwiperSlide key={tree?.id}>
						<img className="" src={tree?.img} alt="picture" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default InstaImage;
