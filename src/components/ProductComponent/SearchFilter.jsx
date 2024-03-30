import { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import useClickOutSide from "../hooks/useClickOutSide";
import useDebounce from "../hooks/useDebounce";

const SearchFilter = () => {
	const [openSearch, setOpenSearch] = useState(false);
	const [search, setSearch] = useState()
	const debounchSearch = useDebounce(search)
	const SearchBarContainer = useRef(null);

	useEffect(()=>{
		console.log(debounchSearch)
	},[debounchSearch])

	

	

	const toggleSearchBtn = () => {
		setOpenSearch(!openSearch); // toggle search function
	};

	// close searchBar on outside click
	useClickOutSide(SearchBarContainer, ()=> setOpenSearch(false))

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
				<div ref={SearchBarContainer} className="absolute top-14 left-0   w-[220px] h-10  bg-white">
					<input
						onChange={(e)=>setSearch(e.target.value)}
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
