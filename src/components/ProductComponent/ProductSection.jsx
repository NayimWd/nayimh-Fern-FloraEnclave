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
		<section className="section_p-y container w-full">
			<FilterProducts />
			{/* Filter section */}
			<div className="container flex flex-col items-center">
				<div className="container relative mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5 xsm:gap-x-4 sm:gap-7">
					{trees.map((tree) => (
						<BestSellercard
							key={tree?.id}
							image={tree?.img}
							title={tree?.name}
							price={tree?.price}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductSection;
