
const DynamicBanner = ({ pathname }) => {
	let	path = pathname.toUpperCase()
	return (
		<section className="w-full h-[200px] md:h-[300px]  mt-[136px] bg-banner object-cover bg-center  bg-no-repeat ">
			<div className="flex flex-col gap-4 justify-center items-center w-full h-full">
			<h1 className="text-white text-lg xsm:text-xl md:text-2xl tracking-wider font-reem">{path}</h1>
				<p className="text-white text-lg  tracking-wider font-reem">				
					HOME {"/"} {path}
				</p>
			</div>
		</section>
	);
};

export default DynamicBanner;
