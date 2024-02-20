const SidebarFilterOption = ({ name, options, type, selectOption, handleFilterOpt }) => {
	return (
		<div className="my-7 font-jost">
			<h1 className="text-darker_green text-xl sm:text-3xl mb-4 ">{name}</h1>
			{options.map((opt, index) => (
				<div
					key={opt}
					className="flex justify-start items-center gap-3 text-lg  cursor-pointer  tracking-wider px-4 py-1 hover:text-bg_green"
				>
					<input
						className="cursor-pointer w-4 h-4 accent-bg_green"
						type={type}
						name={opt}
						id={opt}
						value={name}
						defaultChecked={selectOption === opt}
						onClick={()=>handleFilterOpt(opt)}
					/>
					<label className="cursor-pointer" id={index} htmlFor={opt}>
						{opt}
					</label>
				</div>
			))}
		</div>
	);
};

export default SidebarFilterOption;
