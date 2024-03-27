import React from "react";
import { PiTruckThin } from "react-icons/pi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import { MdVerifiedUser } from "react-icons/md";

const ServicePolicy = () => {
	const Services = [
		{
			name: "COUNTRYWIDE SHIPPING",
			icon: <PiTruckThin className="w-10 h-10 text-dark_green" />,
		},
		{
			name: "7-DAY RETURNS*",
			icon: <HiOutlineClipboardCheck className="w-10 h-10 text-dark_green" />,
		},
		{
			name: "1 MONTH WARRANTY",
			icon: <SlBadge className="w-10 h-10 text-dark_green" />,
		},
		{
			name: "100% SECRUE CHECKOUT",
			icon: <MdVerifiedUser className="w-10 h-10 text-dark_green" />,
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 padding_x mt-8 sm:mt-16 gap-8 ">
			{Services.map((service, index) => (
				<div
					key={index}
					className="border rounded-sm flex flex-col justify-center items-center gap-5 py-5 xl:py-6"
				>
					<span>{service.icon}</span>
					<p className="tracking-[1px] text-darker_green font-jost leading-7">
						{" "}
						{service?.name}{" "}
					</p>
				</div>
			))}
		</div>
	);
};

export default ServicePolicy;
