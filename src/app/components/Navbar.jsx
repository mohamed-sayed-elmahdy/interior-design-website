"use client";
import React, { useEffect, useState } from "react";
import logoWhite from "../assets/icons/logo-white.svg";
import logoBlack from "../../../public/blackLogo.png";
import Image from "next/image";
import CustomButton from "./buttons/custom-button/CustomButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar({ togglePopup }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClassNames = (path) => {
    if (pathname === "/portfolio" || pathname === "/services") {
      return scrolled ? "text-white  border-white"  : "text-black border-black";
    } 
    else if (pathname === path) {
      return scrolled ? "border-b-2 border-black" : "border-b-2 border-white";
    } else {
      return scrolled ? "hover:text-black" : "hover:text-white";
    }
  };

  const logoSrc = () => {
    if (pathname === "/portfolio" && scrolled || pathname === "/services" && scrolled) {
      return logoWhite;
    }
    if (pathname === "/portfolio" || pathname === "/services") {
      return logoBlack;
    }
    return scrolled ? logoBlack : logoWhite;
  };

  return (
 <div>
     <nav
       className={`hidden md:flex navigation justify-between fixed top-0 left-0 right-0  w-full transition-all duration-300 px-8 md:px-16 py-4 ${
        ( pathname === "/portfolio" && scrolled || pathname === "/services" && scrolled)
           ? "bg-black text-white"
           : scrolled
           ? "bg-white text-black"
           : "bg-transparent text-white"
       }`}
       style={{ zIndex: 60 }}
     >
       <div className="w-full flex flex-row flex-wrap justify-between">
         <div className="flex flex-wrap justify-between items-center  w-full md:w-fit md:gap-24">
           <Link href="/">
             <Image src={logoSrc()} className="h-12 w-14" alt="Logo" />
           </Link>
           <div className="md:hidden flex items-center text-center text-black ">
           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
             {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
           </button>
         </div>
           <div
             className={`md:flex ${menuOpen ? "flex" : "hidden"} flex-col md:flex-row md:items-center w-full md:w-auto`}
             id="navbar-default"
           >
             <ul
               className="w-full text-sm pt-16 font-normal flex items-center flex-col p-4 py-12 my-10 md:p-0 md:m-0   border border-gray-100 rounded-lg bg-gray-50 md:flex-row self-end md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 bg-transparent"
               style={{ fontSize: "12px" }}
             >
               <li>
                 <Link href="/" passHref>
                   <span
                     className={`block py-2 pb-2 ${linkClassNames("/")}`}
                     aria-current={pathname === "/" ? "page" : undefined}
                   >
                     Home
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/about" passHref>
                   <span className={`block py-2 pb-2 ${linkClassNames("/about")}`}>
                     About
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/services" passHref>
                   <span
                     className={`block py-2 pb-2 ${linkClassNames("/services")} ${`${pathname === "/services" ? "border-b-2 border-black" : ""}`} `}
                   >
                     Services
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/portfolio" passHref>
                   <span
                     className={`block py-2 pb-2 ${linkClassNames("/portfolio")} ${`${pathname === "/portfolio" ? "border-b-2 border-black" : ""}`} `}
                   >
                     Portfolio
                   </span>
                 </Link>
               </li>
               <li className="md:m-0 mb-6">
                 <Link href="/contact" passHref >
                   <span
                     className={`block py-2 pb-2 ${linkClassNames("/contact")}`}
                   >
                     Contact
                   </span>
                 </Link>
               </li>
               <div className=" items-center md:hidden md:p-0 py-1 px-4">
           <CustomButton scrolled={scrolled} onClick={togglePopup}>
             Make a Request
           </CustomButton>
         </div>
             </ul>
           </div>
         </div>
         <div className=" items-center hidden md:flex">
           <CustomButton scrolled={scrolled} onClick={togglePopup}>
             Make a Request
           </CustomButton>
         </div>
       </div>
     </nav>
     <nav className="bg-white text-black flex md:hidden navigation justify-between relative  w-full transition-all duration-300 px-8 md:px-16 py-4 z-50">
     <div className="w-full flex flex-row flex-wrap justify-between">
         <div className="flex flex-wrap justify-between items-center  w-full md:w-fit md:gap-24">
           <Link href="/">
             <Image src="/blackLogo.png" width={1500} height={1500} className="h-12 w-14" alt="Logo" />
           </Link>
           <div className="md:hidden flex items-center text-center text-black ">
           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
             {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
           </button>
         </div>
           <div
             className={`md:flex ${menuOpen ? "flex" : "hidden"} absolute top-16 left-0 bg-white flex-col md:flex-row md:items-center w-full md:w-auto`}
             id="navbar-default"
           >
             <ul
               className="w-full text-sm pt-16 font-normal flex items-center flex-col p-4 py-12 my-10 md:p-0 md:m-0  border-gray-100 rounded-lg bg-gray-50 md:flex-row self-end md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 bg-transparent"
               style={{ fontSize: "12px" }}
             >
               <li>
                 <Link href="/" passHref>
                   <span
                     className={`block py-2 pb-2 `}
                     aria-current={pathname === "/" ? "page" : undefined}
                   >
                     Home
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/about" passHref>
                   <span className={`block py-2 pb-2 `}>
                     About
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/services" passHref>
                   <span
                     className={`block py-2 pb-2  ${`${pathname === "/services" ? "border-b-2 border-black" : ""}`} `}
                   >
                     Services
                   </span>
                 </Link>
               </li>
               <li>
                 <Link href="/portfolio" passHref>
                   <span
                     className={`block py-2 pb-2  ${`${pathname === "/portfolio" ? "border-b-2 border-black" : ""}`} `}
                   >
                     Portfolio
                   </span>
                 </Link>
               </li>
               <li className="md:m-0 mb-6">
                 <Link href="/contact" passHref >
                   <span
                     className={`block py-2 pb-2 `}
                   >
                     Contact
                   </span>
                 </Link>
               </li>
               <div className=" items-center md:hidden md:p-0 py-1 px-4">
           <button
        className="bg-black text-white text-center text-xs py-2 font-normal px-8  "
       
        onClick={togglePopup}
      >
        Make a Request
      </button>
         </div>
             </ul>
           </div>
         </div>
       </div>
     </nav>
 </div>
  );
}

export default Navbar;