import { lazy, useEffect } from "react";
import PlantImg from "../../assets/image/product4.webp";
import ProductDetails from "./ProductDetails";
import { useSearchParams } from "react-router-dom";
const ServicePolicy = lazy(()=> import("./ServicePolicy"));
const ProductDetailsTabs = lazy(()=> import("./ProductDetailsTabs"));
const RelatedProduct = lazy(()=> import("./RelatedProduct"));


const SingleProduct = () => {
	const [product, setProduct] = useSearchParams()

	useEffect(()=> {
		setProduct({Product: "Laceleaf Peace"})
	},[])

	const productTitle = product.get("Product")

	return (
		<>
			<div className="container section_p-y mt-[90px] sm:mt-14 w-full">
				<div className="mb-10">
					<div className="px-2 flex flex-wrap justify-start items-center gap-2 leading-7 tracking-wider sm:text-lg font-bold">
						{" "}
						<span className="text-dark_green"> </span>{" "}
						<span className="text-dark_green ">
							{" "}
							Product
							<span className="text-2xl text-dark_green"> &#62;</span> {productTitle}
						</span>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center  md:gap-20">
					{/* single Product image */}
					<div className="w-full md:w-1/2 ">
						<img className="w-full rounded" src={PlantImg} alt="plantImg" loading="lazy"/>
					</div>
					{/* single Product Details */}
					<div className="w-full md:w-1/2 px-2 mt-5 md:mt-0">
						<ProductDetails />
					</div>
				</div>
				{/* service policy */}
				<ServicePolicy />
				{/* tabs for product details and information */}
				<div>
					<ProductDetailsTabs />
				</div>
				<RelatedProduct/>
			</div>
		</>
	);
};

export default SingleProduct;
