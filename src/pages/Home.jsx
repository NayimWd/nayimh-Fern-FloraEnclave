import { lazy } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PromotionalCards from "../components/PromotionalCards";
const BestSeller = lazy(() => import("../components/BestSeller"));
const PromotionalBanner = lazy(() => import("../components/PromotionalBanner"));
const PromoCartsecond = lazy(()=>import("../components/PromoCartsecond"));
const Deal = lazy(()=> import("../components/Deal"));
const Home = () => {
	return (
		<section>
			<Navbar />
			<HeroSection />
			<PromotionalCards />
			<BestSeller />
			<PromotionalBanner/>
			<PromoCartsecond/>
			<Deal/>
		</section>
	);
};

export default Home;
