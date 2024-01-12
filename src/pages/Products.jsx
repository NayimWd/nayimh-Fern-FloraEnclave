import React, { lazy } from "react";
import Navbar from "../components/Navbar"
import DynamicBanner from "../components/ReusableComponent/DynamicBanner";
import { useLocation } from "react-router-dom";
import ProductSection from "../components/ProductSection";
const Footer = lazy(() => import("../components/Footer"));

const Products = () => {
	const location = useLocation();
	const pathname = location.pathname.slice(1);

	return (
		<section>
			<Navbar />
			<div className="">
				<DynamicBanner pathname={pathname} />
				<ProductSection/>
			</div>
			<Footer />
		</section>
	);
};

export default Products;
