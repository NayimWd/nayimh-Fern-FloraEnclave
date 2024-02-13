import { IoIosClose } from "react-icons/io";

const SidebarFilter = ({ filterToggle }) => {
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
			<div className="my-7 font-jost">
				<h1 className="text-darker_green text-xl sm:text-3xl mb-4 ">
					CATEGORIES
				</h1>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green ">
					{" "}
					Indoor{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					Flower{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					Fruites{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					Herbs{" "}
				</p>
			</div>
			<div className="my-7 font-jost">
				<h1 className="text-darker_green text-xl sm:text-3xl mb-4">PRICE</h1>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					৳100-300{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					৳300-500{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					৳500-1000{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					৳1000-1500{" "}
				</p>
				<p className="text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green">
					{" "}
					৳1500-2000{" "}
				</p>
			</div>
			<div className="my-7 font-jost">
				<h1 className="text-darker_green text-xl sm:text-3xl mb-4">SIZE</h1>
				<div className="flex gap-2 items-center">
					<p className="px-5 py-2 border-2 text-bg_green text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
						S
					</p>
					<p className="px-5 py-2 border-2 text-bg_green text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
						M
					</p>
					<p className="px-5 py-2 border-2 text-bg_green text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
						L
					</p>
					<p className="px-5 py-2 border-2 text-bg_green text-lg border-bg_green cursor-pointer rounded-sm hover:bg-bg_green hover:text-white">
						XL
					</p>
				</div>
			</div>
		</div>
	);
};

export default SidebarFilter;
