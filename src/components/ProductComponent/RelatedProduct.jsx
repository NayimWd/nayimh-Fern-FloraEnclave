import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Navigation } from "swiper/modules";
import BestSellercard from "../ui/BestSellercard";


const RelatedProduct = () => {
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
    <div className='mt-6 lg:mt-12'>
    <div className='flex flex-col items-center'>
      <h1 className="text-center font-jost text-black text-2xl md:text-3xl font-semibold leading-10 tracking-wider">Related Products</h1>
    <hr className="text-green border-b-2 border-green w-24 sm:w-32 mt-[6px] text-center" />
    </div>
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
								slidesPerView: 1,
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
						{trees.slice(4).map((tree) => (
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
  )
}

export default RelatedProduct