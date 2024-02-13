import { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import BestSellercard from "../ui/BestSellercard";

const ProductSection = () => {
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
		<section className="section_p-y padding_x container w-full">
			<FilterProducts />
			{/* Filter section */}
			<div className="container flex flex-col items-center">
				<div
					className={`container relative mt-8 grid ${
						 "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
							
					}  gap-x-2 gap-y-5 xsm:gap-x-4 sm:gap-7`}
				>
					{trees.map((tree) => (
						<BestSellercard
							key={tree?.id}
							pid={tree?.id}
							image={tree?.img}
							title={tree?.name}
							price={tree?.price}
							
						/>
					))}
				</div>
			</div>
			<div className="flex flex-wrap w-full items-center justify-center gap-3 sm:gap-5 mt-16">
				<p className="px-2 sm:px-4 py-1 border-2  sm:text-lg border-bg_green cursor-pointer rounded-sm bg-bg_green text-white">
					Prev
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					1
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					2
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					3
				</p>
				<p className="px-2 sm:px-4 py-1 border-2 text-bg_green sm:text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
					4
				</p>

				<p className="px-2 sm:px-4 py-1 border-2  sm:text-lg border-bg_green cursor-pointer rounded-sm bg-bg_green text-white">
					Next
				</p>
			</div>
		</section>
	);
};

export default ProductSection;
