import { IoIosClose } from "react-icons/io";
import SidebarFilterOption from "./SidebarFilterOption";
import { useState } from "react";

const SidebarFilter = ({ filterToggle }) => {
    const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
    const [selectedPrice, setSelectedPrice] = useState(""); // State for selected price

	const [selectedSize, setSelectedSize] = useState(""); // state for selected size
    const handleCategories = (category) => {
        setSelectedCategory(category); // Update selected category
        console.log(category)
		
    };

    const handlePrice = (price) => {
        setSelectedPrice(price); // Update selected price
        console.log(price)
		
    };

	const handleSize = (size) => {
		setSelectedSize(size) // Update selected size
        setSelectedSize(size)
        console.log(size)
		
	}



    const categoryList = ["All", "Indoor", "Flower", "Fruits", "Herbs"];
    const priceList = ["৳100-300", "৳300-500", "৳500-1000", "৳1000-1500"];
	const sizeList = ["S", "M", "L", "XL" ]
    return (
        <div className="flex flex-col p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-bg_green text-xl xsm:text-2xl">Filter</h1>
                <IoIosClose
                    onClick={filterToggle}
                    className="w-12 h-12 text-bg_green cursor-pointer border border-bg_green rounded-sm "
                />
            </div>
            <hr className="w-full mt-5 border-b-2 border-bg_green" />
             {/* category filter */}
            <SidebarFilterOption
                name="CATEGORIES"
                type="checkbox"
                options={categoryList}
                selectOption={selectedCategory} // Pass selected category
                handleFilterOpt={handleCategories} // Pass handler function for categories
            />
             {/* price filter */}
            <SidebarFilterOption
                name="PRICE"
                type="checkbox"
                options={priceList}
                selectOption={selectedPrice} // Pass selected price
                handleFilterOpt={handlePrice} // Pass handler function for prices
            />
            {/* size filter */}
            <div className="my-7 font-jost">
				<h1 className="text-darker_green text-xl sm:text-3xl mb-4">SIZE</h1>
				<div className="flex gap-2 items-center">
					{sizeList.map((siz) => (
						<p
							onClick={() => handleSize(siz)}
							key={siz}
							className={`px-5 py-2 border-2 ${selectedSize === siz ? `bg-bg_green text-white` : `text-bg_green`} border-bg_green text-lg hover:bg-bg_green hover:text-white cursor-pointer rounded-sm `}
						>
							{siz}
						</p>
					))}
				</div>
					</div>
        </div>
    );
};

export default SidebarFilter;

