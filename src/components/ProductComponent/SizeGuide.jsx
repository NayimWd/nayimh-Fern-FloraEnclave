import Modal from "../modal/Modal";

const SizeGuide = ({ openModal, setOpenModal, handleModal }) => {
	const sizeHeading = ["SIZE", "INCHES", "FOOT", "AGE"];

	return (
		<Modal
			openModal={openModal}
			setOpenModal={setOpenModal}
			handleModal={handleModal}
		>
			<div className="w-full ">
				<p className="text-xl font-semibold  font-lato ">Plant Size Chart</p>
				<div className="w-full flex flex-col justify-center items-center border my-10 py-6">
					<p className="textbase xsm:text-lg font-bold mb-1">PLANTS</p>
					<p>SIZE IN INCHES</p>
					<table className="w-full mt-8">
						<thead>
							<tr className="bg-soft_green/30 ">
								{sizeHeading.map((heading, index) => (
									<th key={index} className="py-3 border border-l-0 ">
										{heading}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="">
							<tr>
								<td className="py-3 border border-l-0 text-center">XL</td>
								<td className="py-3 border border-l-0 text-center">84-144</td>
								<td className="py-3 border border-l-0 text-center">
									7-12 Foot
								</td>

								<td className="py-3 border border-l-0 text-center">
									12-18 Months{" "}
								</td>
							</tr>
							<tr>
								<td className="py-3 border border-l-0 text-center">L</td>
								<td className="py-3 border border-l-0 text-center">60-84 </td>
								<td className="py-3 border border-l-0 text-center">5-7 Foot</td>

								<td className="py-3 border border-l-0 text-center">
									8-12 Months
								</td>
							</tr>
							<tr>
								<td className="py-3 border border-l-0 text-center">M</td>
								<td className="py-3 border border-l-0 text-center">36-60 </td>
								<td className="py-3 border border-l-0 text-center">3-5 Foot</td>

								<td className="py-3 border border-l-0 text-center">
									3-7 Months
								</td>
							</tr>
							<tr>
								<td className="py-3 border border-l-0 text-center">S</td>
								<td className="py-3 border border-l-0 text-center">8.4-36 </td>
								<td className="py-3 border border-l-0 text-center">
									.7-3 Foot
								</td>

								<td className="py-3 border border-l-0 text-center">
									1-3 Months
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p className="text-sm">
					NB: Size Depends on Category(fruites is meximum and others is minimu
					size)*
				</p>
			</div>
		</Modal>
	);
};

export default SizeGuide;
