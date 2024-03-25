import Modal from "../modal/Modal";

const Terms = ({ openModal, handleModal, settermsModal }) => {
	return (
		<Modal
			openModal={openModal}
			handleModal={handleModal}
			setOpenModal={settermsModal}
		>
			<div className="w-full h-fit overflow-y-scroll-scroll p-5 ">
				<div className="mb-5">
					<h1 className="text-lg textdar sm:text-xl leading-[26px] -tracking-[0.5px] mb-2">
						Delivery
					</h1>
					<p className="leading-6 text-dark_gray mb-1">
						All orders shipped with Curier Service.
					</p>
					<p className="leading-6 text-dark_gray mb-1">Always free shipping for orders over US ৳1500.</p>
					<p className="leading-6 text-dark_gray mb-1">All orders are shipped with a UPS tracking number.</p>
				</div>
				<div>
					<h1 className="text-lg sm:text-xl leading-[26px] -tracking-[0.5px] mb-2">
						Returns
					</h1>
					<p className="leading-6 text-dark_gray ">
						Items returned within 14 days of their original shipment date in
						same as new condition will be eligible for a full refund or store
						credit. Refunds will be charged back to the original form of payment
						used for purchase. Customer is responsible for shipping charges when
						making returns and shipping/handling fees of original purchase is
						non-refundable. All sale items are final purchases.
					</p>
				</div>
				<div className="mt-5">
					<h1 className="text-lg sm:text-xl leading-[26px] -tracking-[0.5px] mb-2">
						Help
					</h1>
					<p className="leading-6 text-dark_gray mb-1">
						Give us a shout if you have any other questions and/or concerns.
					</p>
					<p className="leading-6 text-dark_gray mb-1">Email: help@example.com</p>
					<p className="leading-6 text-dark_gray mb-1">Phone: 01743447070</p>
				</div>
			
			</div>
		</Modal>
	);
};

export default Terms;
