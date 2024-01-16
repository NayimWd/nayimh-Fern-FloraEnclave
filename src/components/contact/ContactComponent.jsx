import { lazy } from "react";
import {
	FaFacebook,
	FaInstagramSquare,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
import NewsLetter from "../ReusableComponent/NewsLetter";
const InstaImage = lazy(()=> import('../About/InstaImage'))

const ContactComponent = () => {

  const handleScroll = () => {
   return  passive = true;
    

  }

	return (
		<div className="w-full section_p-y">
			<div className="container w-full md:h-screen bg-red-200/20 flex flex-col md:flex-row rounded mb-20">
				<div className="w-full h-full px-8 lg:px-14 py-20 md:py-0 flex flex-col justify-center items-start">
					<p className="text-darker_green tracking-[4.8px] leading-4 font-semibold font-jost">
						CONTACT INFORMATION
					</p>
					<hr className="border-b-[2px] border-green w-20 my-10" />
					<p className="mb-5 leading-6 font-jost text-darker_green">
						We do not sell product from our corporate headquarters in New York
						City. If you want to visit, please reach out to our customer service
						team first.
					</p>
					<p className="mb-5 leading-6 font-jost text-darker_green">
						1201 Broadway
					</p>
					<p className="mb-5 leading-6 font-jost text-darker_green">
						{" "}
						Suite 600
					</p>

					<p className=" mt-16 text-2xl xsm:text-3xl md:text-4xl leading-[54px] font-jost font-semibold tracking-wider text-darker_green ">
						{" "}
						help@example.com{" "}
					</p>
					<hr className="border-b-[3px] border-green w-1/2 mt-4 mb-12" />
					<p className="text-darker_green font-jost tracking-[4.8px] leading-4  font-semibold">
						FOLLOW US
					</p>
					<hr className="border-b-[2px] border-green w-20 mt-5 mb-9" />
					<div className="w-full flex justify-start items-center gap-4">
						<FaInstagramSquare className="w-11 h-11 xsm:w-14 xsm:h-14 p-3 rounded-full border border-darker_green cursor-pointer text-darker_green hover:bg-dark_green hover:text-white delay-150 transition-all ease-in" />
						<FaFacebook className="w-11 h-11 xsm:w-14 xsm:h-14 p-3 rounded-full border border-darker_green cursor-pointer text-darker_green hover:bg-dark_green hover:text-white delay-150 transition-all ease-in" />
						<FaYoutube className="w-11 h-11 xsm:w-14 xsm:h-14 p-3 rounded-full border border-darker_green cursor-pointer text-darker_green hover:bg-dark_green hover:text-white delay-150 transition-all ease-in" />
						<FaTwitter className=" w-11 h-11 xsm:w-14 xsm:h-14 p-3 rounded-full border border-darker_green cursor-pointer text-darker_green hover:bg-dark_green hover:text-white delay-150 transition-all ease-in" />
					</div>
				</div>
				<div className="w-full overflow-hidden">
					<div className="overflow-hidden relative pb-[111%]  h-0 ">
						<iframe
              onScroll={handleScroll}
							className="absolute h-full w-full top-0 left-0  border-0 "
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2558.596936612078!2d89.34991098204704!3d24.91835502643241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705346441246!5m2!1sen!2sbd"
							height="700"
							width="900"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Responsive Google Map"
						></iframe>
					</div>
				</div>
			</div>
			<ContactForm />
			<div className="section_m-t">
        <NewsLetter/>
				<InstaImage />
			</div>
		</div>
	);
};

export default ContactComponent;
