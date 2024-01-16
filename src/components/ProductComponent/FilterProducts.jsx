import { CiFilter, CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import CustomDropdown from "../ReusableComponent/CustomDropdown";
import { useRef, useState } from "react";
import SidebarFilter from "./SidebarFilter";

const FilterProducts = () => {
	const [open, setOpen] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);
	const searchRef = useRef(null);

	const filterToggle = () => {
		setOpen(!open);
	};

	const toggleSearch = () => {
		setOpenSearch(!openSearch);
	};

	const handleSearch = () => {
		if (searchRef.current?.value?.length >= 3) {
			console.log(searchRef.current.value);
		}
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
					{/* Searchbar */}
					<div className=" bg-green/20 px-2 w-14 h-12 flex justify-center items-center  border-b-2 border-b-dark_green relative rounded-sm">
						{openSearch ? (
							<IoIosClose
								onClick={toggleSearch}
								className="w-8 h-8 cursor-pointer text-dark_green "
							/>
						) : (
							<CiSearch
								onClick={toggleSearch}
								className="w-8 h-8 cursor-pointer text-dark_green "
							/>
						)}
						{openSearch && (
							<div className="absolute top-14 left-0   w-[220px] h-10  bg-white">
								<input
									onChange={handleSearch}
									ref={searchRef}
									placeholder="Search Here"
									type="text"
									className=" text-bg_green font-semibold tracking-wider bg-green/20 py-2 px-4 rounded-sm outline-none border-b-2 border-b-dark_green"
								/>
							</div>
						)}
					</div>
					{/* Dropdown */}
					<div>
						<CustomDropdown dropdownOption={dropdownOption} />
					</div>
				</div>
			</div>
			{/* side filter option */}
			{open ? (
				<div className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_in z-50">
					<SidebarFilter filterToggle={filterToggle} />
				</div>
			) : (
				<span className="fixed top-0 left-0 h-screen w-full xsm:w-[350px] bg-white animation_out duration-300"></span>
			)}
		</section>
	);
};

export default FilterProducts;
