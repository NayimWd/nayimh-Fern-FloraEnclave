import { CiFilter } from "react-icons/ci";
import CustomDropdown from "../ReusableComponent/CustomDropdown";
import { useState } from "react";
import SidebarFilter from "./SidebarFilter";
import SearchFilter from "./SearchFilter";

const FilterProducts = () => {
	const [open, setOpen] = useState(false);
	const filterToggle = () => {
		setOpen(!open); // sidebar filter toggle button
	};

	return (
		<section className="mb-10 padding_x">
			<div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
				<div>
					{" "}
					<button
						onClick={filterToggle}
						className="flex items-center gap-1 px-5 py-2 border-[2px] font-bold border-dark_green text-bg_green btn_amination hover:bg-bg_green hover:text-white rounded-sm "
					>
						{" "}
						<CiFilter className="w-6 h-6 text-bg_green" /> Filter{" "}
					</button>{" "}
				</div>
				<div className="flex items-center gap-4 xsm:gap-7">
					{/* product Searchbar */}
					<SearchFilter />
					{/* sort Dropdown */}
					<div>
						<CustomDropdown />
					</div>
				</div>
			</div>
			{/* side filter option */}
			{open ? (
				<div className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_in z-50 overflow-y-scroll">
					<SidebarFilter filterToggle={filterToggle} />
				</div>
			) : (
				<span className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_out duration-300"></span>
			)}
		</section>
	);
};

export default FilterProducts;
