import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/image/plantLogo.svg";
import cart from "../assets/icon/cart.png";
import user from "../assets/icon/userIcon.png";
import search from "../assets/icon/search.png";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose, MdLocationOn  } from "react-icons/md";
import { FaPhone, FaFacebook, FaInstagramSquare, FaYoutube} from "react-icons/fa";

const Navbar = () => {
  // state for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // state for sticky navbar
  const [isSticky, setIsSticky] = useState(false)

  // toggle funciton 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
// close menu on outsite click
let menuRef = useRef();

// function
useEffect(()=>{
  let handler = (e) => {
    if(!menuRef.current.contains(e.target)){
      setIsOpen(false)
    }
  }
  document.addEventListener('mousedown', handler);
},[])


  // sticky on scroll function
  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 300){
        setIsSticky(true);
      } else {
        setIsSticky(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return ()=> {
      window.addEventListener('scroll', handleScroll);
    }

  },[]);

  // array for nav items
  const navItems = [
    {link: "home", path: "/"},
    {link: "products", path: "/products"},
    {link: "about", path: "/about"},
    {link: "contact", path: "/contact"},
    {link: "dashboard", path: "/dashboard"},
  ]

  return (
    <header className='fixed w-[100vw] top-0 left-0 -right-[1px] z-10'>
    {/* contact info large screen */}
      <div className={`${isSticky ? "hidden" : "block" }`}>
      <div className={`hidden sm:flex justify-center w-full h-12  items-center bg-dark_green border-b border-darker_green px-8 overflow-x-hidden `}>
      
      <div className='flex w-full items-center justify-between gap-10 md:gap-0'> 
      <span className='flex_center gap-1'>
      <MdLocationOn className='w-4 h-4 text-white'/>
      <p className='text-white'> Baghopara, Bogura</p>
      </span>
      <span className='flex_center gap-1'>
      <FaPhone className='w-4 h-4 text-white'/>
      <p className='text-white'>+880 1743 447070</p>
      </span>
      <span className='flex_center gap-4'>
      <FaFacebook className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      <FaInstagramSquare className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      <FaYoutube className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      
      </span>
     
      </div>
      
      </div>
      </div>
{/* contact info small screen */}
    <div className={`${isSticky ? "hidden" : "block" }`}>
    <div className={`flex sm:hidden justify-center w-full h-12  items-center bg-dark_green border-b border-darker_green px-8 overflow-x-hidden `}>
    <marquee className="sm:hidden">
      <div className='flex w-full items-center justify-between gap-10 md:gap-0'> 
      <span className='flex_center gap-1'>
      <MdLocationOn className='w-4 h-4 text-white'/>
      <p className='text-white'> Baghopara, Bogura</p>
      </span>
      <span className='flex_center gap-1'>
      <FaPhone className='w-4 h-4 text-white'/>
      <p className='text-white'>+880 1743 447070</p>
      </span>
      <span className='flex_center gap-4'>
      <FaFacebook className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      <FaInstagramSquare className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      <FaYoutube className='w-6 h-6 text-subtle_gray cursor-pointer hover:scale-110'/>
      
      </span>
     
      </div>
      </marquee>
      </div>
      </div>
    <nav className={`w-full px-2 lg:px-8 py-4 border-b  ${isSticky ? "sticky top-0 left-0 -right-1 bg-bg_green duration-300 shadow-xl" : "bg-dark_green border-darker_green"}`}>
      <div className='flex_between items-center font-sans'>
     {/* logo and name */}
     <Link to="/">
     <span className={`flex items-center gap-2 md:gap-3`}>
         <img className='w-14 h-14 inline-block items-center' src={logo} alt='logo'/>
         <h1 className='text-white_clr font-sans mt-3 text-xl md:text-2xl'> Fern & Flora </h1>
     </span>
   </Link>

        {/* nav items for large screen */}
        <ul className='hidden lg:flex space-x-12 '>
        {
          navItems.map(({link, path})=>(
            <NavLink className={({ isActive, isPending }) =>
            isPending ? "text-darker_green" : isActive ? "text-green" : "text-white_clr"
          } key={path} to={path}>
             <p className=' textbase hover:text-gray-300 first:font-medium uppercase'>{link}</p> 
            </NavLink>
          ))
        }
        </ul>
     
      
      {/* icon for large screen */}
          <div className="hidden lg:flex_center gap-5">
            <img className='cursor-pointer hover:scale-110 delay-200 ease-in' src={cart} alt='cart'/>
            <img className='cursor-pointer hover:scale-110 delay-200 ease-in' src={user} alt='cart'/>
            <img className='cursor-pointer hover:scale-110 delay-200 ease-in' src={search} alt='cart'/>
          </div>
          <div className='flex_center lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none focus:text-darker_green cursor-pointer p-1 bg-darker_green rounded'>
            {
              isOpen ? <MdOutlineClose className='w-6 h-6 text-white_clr'/> : <CiMenuFries className='w-6 h-6 text-white_clr' />
            }
          </button>
          </div>
      </div>
      {/* item for mobile screen */}
      <div ref={menuRef} className={` flex flex-col lg:hidden items-center gap-6 py-10 px-4   rounded z-10 ${isSticky ? "bg-bg_green mt-[80px]" : "bg-dark_green mt-[130px]"} ${isOpen ? "block  fixed w-[280px] top-0  -right-[1px]" : "hidden "}`}>
      {
        
        navItems.map(({link, path})=>(
          <NavLink className={({ isActive, isPending }) =>
          isPending ? "text-darker_green" : isActive ? "text-green" : "text-white_clr"
        } key={path} to={path}>
           <p className=' textbase hover:text-gray-300 first:font-medium uppercase'>{link}</p> 
          </NavLink>
        ))
      }
      </div>
    </nav>
    </header>
  )
}

export default Navbar

