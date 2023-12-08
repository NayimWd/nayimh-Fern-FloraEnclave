import img1 from "../assets/image/poster1.webp";
import img2 from "../assets/image/poster2.webp";
import img3 from "../assets/image/poster3.webp";
import PromotionCard from "./ui/PromotionCard";

const PromotionalCards = () => {
	return (
		<div className="w-full section_p-y">
			<div className="container flex flex-wrap justify-center items-center gap-8 xxl:gap-10 padding_x">
				{/* card 1 */}
				<PromotionCard img={img3} plant="Clusia Rosea Plant" disc="10	" alt={"plant"}/>
				{/* card 2 */}
				<PromotionCard img={img1} plant="Garden Plants" disc="20"/>
				{/* card 3 */}
				<PromotionCard img={img2} plant="Succulent" disc="15"/>
			</div>
		</div>
	);
};

export default PromotionalCards;
