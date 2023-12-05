import { CiHeart, CiSearch, CiClock2 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
const DealsCard = ({ img, title, price, desc }) => {
	return (
		<div className=" flex flex-col  border-2 border-light_gray rounded">
			<div className="w-full  flex flex-col xl:flex-row gap-7 p-8 pb-4">
				<div className=" w-full xl:w-1/2">
					{" "}
					<img className="rounded" src={img} alt="plant" loading="lazy" />{" "}
				</div>
				<div className="w-full xl:w-1/2 font-jost">
					<h1 className="text-black hover:text-dark_green cursor-default text-[22px] leading-[26.4px] mb-3">
						{" "}
						{title}{" "}
					</h1>
					<p className="text-dark_green font-semibold leading-[27px] text-lg mb-5"> ৳{price} </p>
					<hr className="mb-4" />
					<p className="text-dark_gray leading-6 text-[15px] mb-4"> {desc} </p>
					<div className="flex flex-wrap items-center border-soft_green  gap-2">
						<button className="flex  gap-1 border py-2 px-4 items-center text-darker_green hover:bg-bg_green hover:text-white text-sm font-medium rounded-sm btn_amination">
							<IoCartOutline className="w-5" /> ADD TO CART{" "}
						</button>
						<span>
							<button className="py-2 px-3 items-center border text-darker_green hover:bg-bg_green hover:text-white text-sm font-medium rounded-sm btn_amination" aria-label="view">
								{" "}
								<CiSearch className="w-5" />{" "}
							</button>
						</span>
						<span>
							<button className="py-2 px-3 items-center border text-darker_green hover:bg-bg_green hover:text-white text-sm font-medium rounded-sm  btn_amination" aria-label="wishlist">
								{" "}
								<CiHeart className="w-5" />{" "}
							</button>
						</span>
					</div>
				</div>
			</div>
			<div className=" w-full py-5 sm:py-9 md:py-5 xl:py-9 border-t-2 flex flex-wrap gap-4 justify-between items-center px-8">
            <div>
				<span className="flex  justify-center items-center gap-4 text-dark_red">
					{" "}
					<CiClock2 className="w-6 font-extrabold  " />{" "}
					<h1 className="font-jost font-bold text-lg tracking-wider leading-6">
						{" "}
						Hurry up!{" "}
					</h1>{" "}
				</span>
            </div>
				<span className="flex flex-wrap justify-center items-center">
					<h1 className="font-bold text-dark_gray font-jost">
						{" "}
						Offers End in :{" "}
						
					</h1>
                    <p className="text-dark_red font-bold font-jost text-center"> 23h 55 minutes 21 seconds </p>
					{/* <p className="text-dark_red px-4 py-3 border border-dark_red rounded-3xl ml-2">Expired!</p>*/}
				</span>
			</div>
		</div>
	);
};

export default DealsCard;
