import { MdOutlineClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const NavProfile = ({ close }) => {
	return (
		<div className="flex flex-col justify-center items-center  w-[285px] p-8 bg-white_clr rounded-md shadow-sm shadow-subtle_gray z-10">
			<div className="flex_between w-full">
				<p className="text-darker_green text-xl font-bold font-sans"></p>
				<MdOutlineClose
					onClick={close}
					className="w-6 h-6 bg-bg_green text-white rounded cursor-pointer"
				/>
			</div>
			<div className="w-full flex justify-center items-center gap-5 mt-8">
				<Link to="/signin">
					{" "}
					<button className="bg-bg_green text-white font-lato py-1 px-4 rounded tracking-wider">
						Signin
					</button>
				</Link>
				<Link to="/signup">
					{" "}
					<button className="bg-bg_green text-white font-lato py-1 px-4 rounded tracking-wider">
						Signup
					</button>
				</Link>
			</div>
			<div className="flex flex-col items-center mt-5 ">
				<CgProfile className="w-14 h-14 text-darker_green" />
				<h1 className="text-xl mt-1 text-darker_green"> User Name </h1>
			</div>
		</div>
	);
};

export default NavProfile;
