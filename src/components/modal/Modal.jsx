import { useRef } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Modal = ({ openModal, handleModal, setOpenModal, children }) => {
	const modalRef = useRef(null);
	useClickOutSide(modalRef, () => setOpenModal(false));

	if (!openModal) return null;

	return (
		<div className="flex_center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] z-10 ">
			{/* Modal content container */}
			<div
				ref={modalRef}
				className="w-[94%] h-content xsm:w-[70%] p-5 bg-white rounded relative px-2 sm:px-4 py-4"
			>
				{/* close button */}
				<span
					onClick={handleModal}
					className="absolute top-3 right-3 py-1 px-3 border rounded cursor-pointer text-black hover:text-dark_green hover:bg-dark_gray/20 font-bold"
				>
					✖
				</span>

				{children}
			</div>
		</div>
	);
};

export default Modal;
