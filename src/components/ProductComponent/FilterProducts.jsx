import filtericon from "../../assets/icon/filter.png";
import { FaList } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import CustomDropdown from "../ReusableComponent/CustomDropdown";
import { useState } from "react";
import SidebarFilter from "./SidebarFilter";

const FilterProducts = () => {
	const [selected, setSelected] = useState(false);
	const [view, setView] = useState("grid");
	const [open, setOpen] = useState(false);

	// function for list view and grid view
	const toggleView = (e) => {
		setSelected(!selected);
		e === "grid" ? setView("grid") : setView("list");
	};

	const filterToggle = () => {
		setOpen(!open);
	};

	// option for filter
	let dropdownOption = [
		{
			option: "Default Sorting",
		},
		{
			option: "A-Z",
		},
		{
			option: "Z-A",
		},
		{
			option: "High to Low",
		},
		{
			option: "Low to High",
		},
		{
			option: "Best Selling",
		},
	];

	return (
		<section className="mb-10">
			<div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center">
				<div>
					{" "}
					<button onClick={filterToggle} className="flex items-center gap-1 px-5 py-2 border-[2px] font-bold border-dark_green text-bg_green btn_amination hover:bg-bg_green hover:text-white rounded-sm ">
						{" "}
						<img
							className="w-6 h-6"
							src={filtericon}
							alt="filter"
						/> Filter{" "}
					</button>{" "}
				</div>
				<div className="flex items-center gap-4 xsm:gap-7">
					<div className="flex items-center gap-2 xsm:gap-5 bg-green/20 px-3 xsm:px-8 py-3 rounded-sm">
						<FaList
							onClick={() => toggleView("list")}
							className={`w-6 h-6  cursor-pointer ${
								view === "list" ? "text-bg_green" : "text-dark_gray"
							}`}
						/>
						<IoGridOutline
							onClick={() => toggleView("grid")}
							className={`w-6 h-6  cursor-pointer ${
								view === "grid" ? "text-bg_green" : "text-dark_gray"
							}`}
						/>
					</div>
					<div>
						<CustomDropdown dropdownOption={dropdownOption} />
					</div>
				</div>
			</div>
			{/* side filter option */}
			{open ? (
				<div className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_in z-50">
					<SidebarFilter filterToggle={filterToggle}  />
				</div>
			) : (<span className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_out duration-300"></span>)}
		</section>
	);
};

export default FilterProducts;
