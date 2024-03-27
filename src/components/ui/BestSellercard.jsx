import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const BestSellercard = ({ image, title, price, pid }) => {
	const { id } = useParams();

	return (
		<div className=" flex  w-full flex-col items-center justify-center overflow-hidden">
			{/* card Image*/}
			<div className=" w-full relative overflow-hidden">
				<img
					className=" cursor-pointer p-1 xsm:p-2 sm:p-3 hover:scale-105 delay-100 duration-200"
					src={image}
					alt="plant"
					loading="lazy"
				/>
				{/* icons for large screens */}
				<div className="  hidden absolute md:flex justify-center items-end cartHover mb-12">
					<div className="flex  gap-4">
						<span
							className=" w-10 h-10 rounded-full"
							data-tooltip="cart"
							data-flow="top"
						>
							<IoCartOutline className="w-10 h-10 bg-white hover:bg-dark_green rounded-sm p-2 text-dark_green hover:text-white" />
						</span>
						<Link
							to={`/products/${pid}`}
							aria-label={`Read more of Product ${title}`}
						>
							<span
								className="w-10 h-10 rounded-full"
								data-tooltip="View"
								data-flow="top"
							>
								<CiSearch className="w-10 h-10 hover:bg-dark_green rounded-sm p-2 bg-white text-dark_green hover:text-white" />
							</span>{" "}
						</Link>
						<span
							className="w-10 h-10 rounded-full"
							data-tooltip="wishList"
							data-flow="top"
						>
							<CiHeart className="w-10 h-10 bg-white hover:bg-dark_green rounded-sm p-2 text-dark_green hover:text-white" />
						</span>
					</div>
				</div>

				{/* icons for small screens */}
				<div className="absolute top-2 right-2 xsm:top-4 xsm:right-4 sm:top-5 sm:right-5  md:hidden">
					<div className="flex flex-col gap-1 sm:gap-2">
						<span
							className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
							data-tooltip="cart"
							data-flow="left"
						>
							<IoCartOutline className="w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-dark_green rounded-sm p-1 sm:p-2 text-dark_green hover:text-white" />
						</span>
						<span
							className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
							data-tooltip="View"
							data-flow="left"
						>
							<CiSearch className="w-6 h-6 sm:w-8 sm:h-8 hover:bg-dark_green rounded-sm p-1 sm:p-2 bg-white text-dark_green hover:text-white" />
						</span>
						<span
							className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
							data-tooltip="wishList"
							data-flow="left"
						>
							<CiHeart className="w-6 h-6 sm:w-8 sm:h-8 bg-white hover:bg-dark_green rounded-sm p-1 sm:p-2 text-dark_green hover:text-white" />
						</span>
					</div>
				</div>
			</div>
			{/* Content */}
			<div className="text-center mt-4 ">
				<h1 className="cursor-pointer text-black hover:text-dark_green font-bold font-jost tracking-wider leading-6 ">
					{" "}
					{title}{" "}
				</h1>
				<p className="text-dark_green font-bold mt-1 font-lato">
					{" "}
					&#2547; {price}
				</p>
			</div>
		</div>
	);
};

export default BestSellercard;
