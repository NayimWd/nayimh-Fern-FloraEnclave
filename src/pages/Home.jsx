import { lazy } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
const PromotionalCards = lazy(()=> import("../components/PromotionalCards"));
const IndoorPlant = lazy(()=> import("../components/IndoorPlant"));
const BestSeller = lazy(() => import("../components/BestSeller"));
const PromotionalBanner = lazy(() => import("../components/PromotionalBanner"));
const PromoCartsecond = lazy(()=>import("../components/PromoCartsecond"));
const Deal = lazy(()=> import("../components/Deal"));
const Footer = lazy(()=> import("../components/Footer"));
const Home = () => {
	return (
		<section>
			<Navbar />
			<HeroSection />
			<PromotionalCards />
			<IndoorPlant/>
			<BestSeller />
			<PromotionalBanner/>
			<PromoCartsecond/>
			<Deal/>
			<Footer/>
		</section>
	);
};

export default Home;
