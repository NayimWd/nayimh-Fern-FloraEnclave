import Navbar from "../components/Navbar";

import HeroSection from "../components/HeroSection";
import PromotionalCards from "../components/PromotionalCards";
// import BestSeller from "../components/BestSeller";
import { lazy,  } from "react";
const BestSeller = lazy(()=>import("../components/BestSeller"))

const Home = () => {
	return (
		<div>
			<Navbar />

			<HeroSection />
      <PromotionalCards/>
      
			<BestSeller/>
		</div>
	);
};

export default Home;
