import React, { lazy } from "react";
import Navbar from "../components/Navbar";
import DynamicBanner from "../components/ReusableComponent/DynamicBanner";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductComponent/ProductSection";
const Footer = lazy(() => import("../components/Footer"));

const Products = () => {
	const location = useLocation();
	const pathname = location.pathname.slice(1);

	return (
		<section>
			<Navbar />
			<div className="">
				{/* Banner */}
				<DynamicBanner pathname={pathname} />
				{/* Products */}
				<ProductSection />
			</div>
			<Footer />
		</section>
	);
};

export default Products;
