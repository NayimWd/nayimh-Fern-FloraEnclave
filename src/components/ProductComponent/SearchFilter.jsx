import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
	const [openSearch, setOpenSearch] = useState(false);
	const searchRef = useRef(null);

	const handleProductSearch = (search) => {
		if (search.length > 3) {
			console.log(search);
		}
	};

	const toggleSearchBtn = () => {
		setOpenSearch(!openSearch); // toggle search function
	};

	return (
		<div className=" bg-green/20 px-2 w-14 h-12 flex justify-center items-center  border-b-2 border-b-dark_green relative rounded-sm">
			{openSearch ? (
				<IoIosClose
					onClick={toggleSearchBtn}
					className="w-8 h-8 cursor-pointer text-dark_green "
				/>
			) : (
				<CiSearch
					onClick={toggleSearchBtn}
					className="w-8 h-8 cursor-pointer text-dark_green "
				/>
			)}
			{openSearch && (
				<div className="absolute top-14 left-0   w-[220px] h-10  bg-white">
					<input
						ref={searchRef}
						onChange={() => handleProductSearch(searchRef.current?.value)}
						placeholder="Search Here"
						type="text"
						className=" text-bg_green font-semibold tracking-wider bg-green/20 py-2 px-4 rounded-sm outline-none border-b-2 border-b-dark_green"
					/>
				</div>
			)}
		</div>
	);
};

export default SearchFilter;
