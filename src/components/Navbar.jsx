import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/plantLogo.svg";
import cart from "../assets/icon/cart.png";
import user from "../assets/icon/userIcon.png";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose, MdLocationOn } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {
	FaPhone,
	FaFacebook,
	FaInstagramSquare,
	FaYoutube,
} from "react-icons/fa";
import Cart from "./Cart";
import Favoritenav from "./Favoritenav";
import NavProfile from "./NavProfile";
import MobileCartMenu from "./MobileCartMenu";

const Navbar = () => {
	// state for mobile menu toggle
	const [isOpen, setIsOpen] = useState(false);
	// state for sticky navbar
	const [isSticky, setIsSticky] = useState(false);
	// profile, cart, favorite state
	const [isFav, setIsFav] = useState(false);
	const [isCart, setIsCart] = useState(false);
	const [isProfile, setIsProfile] = useState(false);
	// -------------------------------------------------- //
	// toggle funciton
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleFav = () => {
		setIsFav(!isFav);
		setIsCart(false);
		setIsProfile(false);
	};
	const toggleCart = () => {
		setIsCart(!isCart);
		setIsFav(false);
		setIsProfile(false);
	};

	const toggleProfile = () => {
		setIsProfile(!isProfile);
		setIsFav(false);
		setIsCart(false);
	};

	// -------------------------------------------------- //
	// close menu on outsite click
	let menuRef = useRef();
	let favRef = useRef();
	let cartRef = useRef();
	let profileRef = useRef();

	// function
	useEffect(() => {
		// close menu outside

		let menuhandler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", menuhandler);
	}, []);

	let id = Date.now();

	// sticky on scroll function
	useLayoutEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	// -------------------------------------------------- //

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
		<header className="fixed w-[100vw] top-0 left-0 -right-[1px] z-10">
			{/* contact info large screen */}
			<div className={`${isSticky ? "hidden" : "block"}`}>
				<div
					className={`hidden sm:flex justify-center w-full h-12  items-center bg-bg_green border-b border-darker_green px-8 overflow-x-hidden `}
				>
					<div className="flex w-full items-center justify-between gap-10 md:gap-0">
						<span className="flex_center gap-1">
							<MdLocationOn className="w-4 h-4 text-white" />
							<p className="text-white"> Baghopara, Bogura</p>
						</span>
						<span className="flex_center gap-1">
							<FaPhone className="w-4 h-4 text-white" />
							<p className="text-white">+880 1743 447070</p>
						</span>
						<span className="flex_center gap-4">
							<FaFacebook className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
							<FaInstagramSquare className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
							<FaYoutube className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
						</span>
					</div>
				</div>
			</div>
			{/* contact info small screen */}
			<div className={`${isSticky ? "hidden" : "block"}`}>
				<div
					className={`flex sm:hidden justify-center w-full h-12  items-center bg-bg_green border-b border-darker_green px-8 overflow-x-hidden `}
				>
					<marquee className="sm:hidden">
						<div className="flex w-full items-center justify-between gap-10 md:gap-0">
							<span className="flex_center gap-1">
								<MdLocationOn className="w-4 h-4 text-white" />
								<p className="text-white"> Baghopara, Bogura</p>
							</span>
							<span className="flex_center gap-1">
								<FaPhone className="w-4 h-4 text-white" />
								<p className="text-white">+880 1743 447070</p>
							</span>
							<span className="flex_center gap-4">
								<FaFacebook className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
								<FaInstagramSquare className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
								<FaYoutube className="w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110" />
							</span>
						</div>
					</marquee>
				</div>
			</div>
			<nav
				className={`w-full relative px-2 lg:px-8 py-4 border-b  ${
					isSticky
						? "sticky top-0 left-0 -right-1 bg-bg_green delay-150 duration-300 shadow-xl"
						: "bg-bg_green border-darker_green"
				}`}
			>
				<div className="flex_between items-center font-sans">
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
					<ul className="hidden lg:flex space-x-12 ">
						{navItems.map(({ link, path }) => (
							<NavLink
								className={({ isActive, isPending }) =>
									isPending
										? "text-darker_green"
										: isActive
										? "text-green"
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
					</ul>

					{/* icon for large screen */}
					<div className="hidden lg:flex_center gap-5">
						<div className="relative">
							<IoMdHeart
								onClick={toggleFav}
								className="w-6 h-6 cursor-pointer hover:scale-110 text-red-500 delay-200 ease-in"
							/>
							{isFav ? (
								<span
									ref={favRef}
									className="absolute  mt-9 -ml-[220px] animation_in"
								>
									{" "}
									<Favoritenav setIsFav={setIsFav} close={toggleFav} />{" "}
								</span>
							) : (
								<span className="absolute animation_out duration-300 "> </span>
							)}
						</div>
						<div className="relative ">
							<img
								className="cursor-pointer hover:scale-110 delay-200 ease-in"
								onClick={toggleCart}
								src={cart}
								alt="cart"
							/>

							{isCart ? (
								<span
									ref={cartRef}
									className="absolute  mt-9 -ml-[220px] slider_in"
								>
									{" "}
									<Cart close={toggleCart} />{" "}
								</span>
							) : (
								<span className="absolute slider_out "> </span>
							)}
						</div>
						<div className="relative">
							<img
								onClick={toggleProfile}
								className="cursor-pointer hover:scale-110 delay-200 ease-in"
								src={user}
								alt="cart"
							/>
							{isProfile ? (
								<span
									ref={profileRef}
									className="absolute  mt-9 -ml-[260px] slider_in"
								>
									{" "}
									<NavProfile close={toggleProfile} />{" "}
								</span>
							) : (
								<span className="absolute slider_out "> </span>
							)}
						</div>
					</div>
					<div className="flex mt-[10px] lg:hidden">
						<button
							onClick={toggleMenu}
							className="focus:outline-none focus:text-darker_green cursor-pointer p-1 bg-darker_green rounded"
						>
							{isOpen ? (
								<MdOutlineClose className="w-6 h-6 text-white_clr" />
							) : (
								<CiMenuFries className="w-6 h-6 text-white_clr" />
							)}
						</button>
					</div>
				</div>
				{/* item for mobile screen */}
				<div
					ref={menuRef}
					className={` flex flex-col lg:hidden  items-center gap-6 py-10 px-4 rounded shadow-2xl z-10 ${
						isSticky ? "bg-bg_green mt-[85px]" : "bg-bg_green mt-[134px]"
					} ${
						isOpen
							? "animation_in fixed w-[280px] xsm:w-[300px] top-0  right-0"
							: "fixed animation_out"
					}`}
				>
					{/* Profile and name */}
					<div className="flex flex-col items-center gap-4">
						<CgProfile className="w-16 h-16 text-gray-400" />
						<p className="font-reem text-2xl text-subtle_gray"> User Name </p>
					</div>
					{navItems.map(({ link, path }) => (
						<NavLink
							className={({ isActive, isPending }) =>
								isPending
									? "text-darker_green"
									: isActive
									? "text-green"
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
				</div>
			</nav>
			{/* use condition: is cart and fav is empty hide it */}

			<div className="relative z-50">
			<div
				className={`absolute mt-[100px] right-2 delay-150 ${
					isSticky ? "slider_in" : "slider_out"
				} lg:hidden ]`}
			>
				<MobileCartMenu profile={toggleFav} cart={toggleCart}/>
			</div>
			{isFav ? (
				<span
					ref={favRef}
					className="absolute  mt-9 right-0 animation_in"
				>
					{" "}
					<Favoritenav setIsFav={setIsFav} close={toggleFav} />{" "}
				</span>
			) : (
				<span className="absolute animation_out duration-300 "> </span>
			)}
			{isCart ? (
				<span
					ref={cartRef}
					className="absolute  mt-9 right-0 slider_in"
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
