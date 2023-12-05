import product1 from "../assets/image/product1.jpg";
import product2 from "../assets/image/product2.jpg";
import product3 from "../assets/image/product3.jpg";
import product4 from "../assets/image/product4.jpg";
import product5 from "../assets/image/product5.jpg";
import product6 from "../assets/image/product6.jpg";
import product7 from "../assets/image/product7.jpg";
import product8 from "../assets/image/product8.jpg";
import BestSellercard from "./ui/BestSellercard";




const BestSeller = () => {
	return (
		<section className="w-full">
			<div className="container flex flex-col items-center padding_x">
				<h1 className="text-center font-jost text-black text-2xl md:text-3xl font-semibold leading-10 tracking-wider">
					{" "}
					Best Seller{" "}
				</h1>
				<hr className="text-green border-b-2 border-green w-24 mt-[6px]" />

				<p className="text-dark_gray tracking-wide leading-6 mt-4 font-jost">
					{" "}
					Best Seller Product This Week!{" "}
				</p>
        {/* cards */}
        <div className="container relative mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5 xsm:gap-x-4 sm:gap-7">
            {/* card */}
            <BestSellercard image={product1} title="Transvaal Daisy" price="200"/>
            <BestSellercard image={product2} title="Purple Flowers" price="250"/>
            <BestSellercard image={product3} title="Palm Branch" price="500"/>
            <BestSellercard image={product4} title="Laceleaf Peace" price="300"/>
            <BestSellercard image={product5} title="Jasmine" price="220"/>
            <BestSellercard image={product6} title="Houseplant Philippine" price="150"/>
            <BestSellercard image={product7} title="Green Succulent" price="200"/>
            <BestSellercard image={product8} title="Green Leafed Plant" price="300"/>
        </div>
			</div>
		</section>
	);
};

export default BestSeller;
