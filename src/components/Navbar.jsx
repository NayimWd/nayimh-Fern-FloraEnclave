import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/plantLogo.svg";
import cart from "../assets/icon/cart.png";
import user from "../assets/icon/userIcon.png";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Cart from "./Cart";
import Favoritenav from "./Favoritenav";
import NavProfile from "./NavProfile";
import MobileCartMenu from "./MobileCartMenu";
import HeadInfo from "./ui/HeadInfo";
import DotNotification from "./ui/DotNotification";
import useClickOutSide from "./hooks/useClickOutSide";

const Navbar = () => {
	// state for mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);
	// state for sticky navbar
	const [isSticky, setIsSticky] = useState(false);
	// profile, cart, favorite state
	const [isFav, setIsFav] = useState(false);
	const [isLargeFav, setIsLargeFav] = useState(false);
	const [isCart, setIsCart] = useState(false);
	const [isLargeCart, setIsLargeCart] = useState(false);
	const [isProfile, setIsProfile] = useState(false);
	// -------------------------------------------------- //
	let menuRef = useRef(null);
	let favRef = useRef(null);
	let cartRef = useRef(null);
	let profileRef = useRef(null);

	// toggle funciton
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleFav = () => {
		setIsFav(!isFav);
	};
	const toggleLargeFav = () => {
		setIsLargeFav(!isLargeFav);
	};
	const toggleCart = () => {
		setIsCart(!isCart);
	};
	const toggleLargeCart = () => {
		setIsLargeCart(!isLargeCart);
	};

	const toggleProfile = () => {
		setIsProfile(!isProfile);
	};

	// close sidebar or modals on outside click
	useClickOutSide(menuRef, () => setIsOpen(false));
	useClickOutSide(favRef, () => setIsFav(false));
	useClickOutSide(cartRef, () => setIsCart(false));
	useClickOutSide(profileRef, () => setIsProfile(false));

	// sticky on scroll function
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// -------------------------------------------------- //
	// array for nav items
	const navItems = [
		{ link: "home", path: "/" },
		{ link: "products", path: "/products" },
		{ link: "about", path: "/about" },
		{ link: "contact", path: "/contact" },
		{ link: "dashboard", path: "/dashboard" },
	];

	return (
		<header className="fixed  w-[100vw] top-0 left-0 -right-[1px] h-16 z-10">
			{/* ---------------------------------------- */}
			{/* position above the navbar contact info large screen */}
			<meta name="Plant Nursery In Bangladesh" content="Home" />
			<div className={`${isSticky ? "hidden" : "block"}`}>
				<div className="hidden sm:flex">
					<HeadInfo />
				</div>
			</div>
			{/* contact info small screen */}
			<div className={`${isSticky ? "hidden" : "block"}`}>
				<div
					className={`flex  sm:hidden justify-center w-full h-12  items-center bg-bg_green border-b border-darker_green padding_x overflow-x-hidden `}
				>
					<marquee className="sm:hidden">
						<HeadInfo />
					</marquee>
				</div>
			</div>
			{/* ---------------------------------------- */}
			{/* Navbar start */}
			<nav
				className={` w-full  relative padding_x py-4   ${
					isSticky
						? "sticky top-0 left-0 -right-1 bg-bg_green shadow-xl delay-300	"
						: "bg-bg_green   "
				}`}
			>
				{/* Nav container */}
				<div className="container flex_between items-center font-sans padding_x">
					{/* logo and name */}
					<Link to="/">
						<span className={`flex items-center gap-2 md:gap-3`}>
							<img
								className="w-14 h-14 inline-block items-center"
								src={logo}
								alt="logo"
							/>
							<h1 className="text-white_clr font-sans mt-3 text-xl md:text-2xl">
								{" "}
								Fern & Flora{" "}
							</h1>
						</span>
					</Link>

					{/* nav items for large screen */}
					<span className="hidden lg:flex space-x-12 ">
						{navItems.map(({ link, path }) => (
							<NavLink
								className={({ isActive, isPending }) =>
									isPending
										? "text-darker_green"
										: isActive
										? "text-[#90F993]"
										: "text-white_clr"
								}
								key={path}
								to={path}
							>
								<p className=" textbase hover:text-gray-300 first:font-medium uppercase">
									{link}
								</p>
							</NavLink>
						))}
					</span>

					{/* icon for large screen: favorite, cart and product button */}
					<div className="hidden lg:flex_center gap-5">
						<div className="relative">
							<CiHeart
								onClick={toggleLargeFav}
								className="w-6 h-6 cursor-pointer hover:scale-110 text-white delay-200 ease-in"
							/>
							<div className="absolute -top-1 -right-[6px] ">
								<DotNotification />
							</div>
							{isLargeFav ? (
								<span className="fixed top-0 right-0 animation_in">
									{" "}
									<Favoritenav
										close={toggleLargeFav}
										toggle={setIsLargeFav}
									/>{" "}
								</span>
							) : (
								<span className="fixed animation_out duration-300 "> </span>
							)}
						</div>
						<div className="relative ">
							<img
								className="cursor-pointer w-5 h-5 hover:scale-110 delay-200 ease-in"
								onClick={toggleLargeCart}
								src={cart}
								alt="cart"
							/>
							<div className="absolute -top-1 -right-2 ">
								<DotNotification />
							</div>
							{isLargeCart ? (
								<span className="fixed top-0 right-0  animation_in">
									{" "}
									<Cart close={toggleLargeCart} toggle={setIsLargeCart} />
								</span>
							) : (
								<span className="fixed animation_out duration-300 "> </span>
							)}
						</div>
						<div className="relative">
							<img
								onClick={toggleProfile}
								className="cursor-pointer w-5 h-5 hover:scale-110 delay-200 ease-in"
								src={user}
								alt="cart"
							/>
							{isProfile ? (
								<span
									ref={profileRef}
									className="absolute  mt-8 -ml-[250px] slider_in"
								>
									{" "}
									<NavProfile close={toggleProfile} />{" "}
								</span>
							) : (
								<span className="absolute slider_out "> </span>
							)}
						</div>
					</div>
					{/* ---------------------------------------- */}
					{/* Toggle button: for small screen */}
					<div className="flex mt-[10px] relative lg:hidden">
						{!isOpen && (
							<button
								onClick={toggleMenu}
								className="focus:outline-none focus:text-darker_green cursor-pointer p-1 bg-darker_green rounded"
								aria-label="toggle"
								alt="close"
							>
								<CiMenuFries
									aria-level="menu opener button"
									className="w-6 h-6 text-white_clr"
								/>
							</button>
						)}
					</div>
				</div>
				{/* item for mobile screen */}
				<div
					ref={menuRef}
					className={` flex flex-col lg:hidden  items-center gap-6 py-10 padding_x rounded shadow-2xl z-10 ${
						isSticky ? "bg-bg_green mt-[85px]" : "bg-bg_green mt-[134px]"
					} ${
						isOpen
							? "animation_in fixed w-[280px] xsm:w-[300px] top-0  right-0"
							: "fixed animation_out"
					}`}
				>
					{/* apply condition here: if not loggedin show login button */}

					{/* Profile and name */}
					<div className="flex flex-col items-center gap-4">
						<CgProfile className="w-16 h-16 text-gray-400" />
						<p className="font-reem text-2xl text-subtle_gray"> User Name </p>
					</div>
					{/* small screen menu */}
					{navItems.map(({ link, path }) => (
						<NavLink
							className={({ isActive, isPending }) =>
								isPending
									? "text-darker_green"
									: isActive
									? "text-[#90F993]"
									: "text-white_clr"
							}
							key={path}
							to={path}
						>
							<p className=" textbase hover:text-gray-300 first:font-medium uppercase">
								{link}
							</p>
						</NavLink>
					))}
					<div className="absolute top-0 right-0 px-5">
						<button
							onClick={toggleMenu}
							className="focus:outline-none focus:text-darker_green cursor-pointer p-1 bg-darker_green rounded"
							aria-label="toggle"
							alt="close"
						>
							<MdOutlineClose
								aria-level="menu closer button"
								className="w-6 h-6  text-white_clr  "
							/>
						</button>
					</div>
				</div>
			</nav>
			{/* ---------------------------------------- */}
			{/* small screen: buttons for cart and fav items */}
			{/* use condition: is cart and fav is empty hide it */}

			<div className="relative z-50">
				<div
					className={`absolute mt-[100px] right-2 delay-150 ${
						isSticky ? "slider_in" : "slider_out"
					} lg:hidden ]`}
				>
					{/* ---------------Import component and pass function---------- */}
					<MobileCartMenu profile={toggleFav} cart={toggleCart} />
				</div>
				{isFav ? (
					<span
						ref={favRef}
						className={`absolute lg:hidden  ${
							isSticky ? "-mt-[87px]" : "-mt-[136px]"
						} right-0 animation_in`}
					>
						{" "}
						<Favoritenav close={toggleFav} />{" "}
					</span>
				) : (
					<span className="absolute slider_out duration-300 "> </span>
				)}
				{isCart ? (
					<span
						ref={cartRef}
						className={`absolute lg:hidden right-0 animation_in ${
							isSticky ? "-mt-[87px]" : "-mt-[136px]"
						} `}
					>
						{" "}
						<Cart close={toggleCart} />{" "}
					</span>
				) : (
					<span className="absolute slider_out "> </span>
				)}
			</div>
		</header>
	);
};

export default Navbar;
