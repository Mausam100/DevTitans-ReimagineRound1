import React, { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import Logo from "../assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" flex items-center justify-between px-10 py-4">
        <CgShoppingCart className=" sm:hidden text-3xl" />
        <div className=" w-24 sm:w-36 cursor-pointer">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="flex items-center justify-around gap-5 text-2xl font-thin cursor-pointer">
          <IoSearch className="hidden sm:block " />
          <LuUser className="hidden sm:block " />
          <CgShoppingCart className="hidden sm:block " />
          <div
            className="flex flex-col gap-2 w-8 cursor-pointer"
            onClick={toggleMenu}
          >
            <div
              className={`rounded-2xl h-[2px] w-1/2 bg-black duration-500 origin-right 
        ${
          isOpen ? "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]" : ""
        }`}
            ></div>
            <div
              className={`rounded-2xl h-[2px] w-full bg-black duration-500 
        ${isOpen ? "-rotate-45" : ""}`}
            ></div>
            <div
              className={`rounded-2xl h-[2px] w-1/2 bg-black duration-500 place-self-end origin-left 
        ${
          isOpen ? "rotate-[225deg] translate-x-[12px] translate-y-[1px]" : ""
        }`}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
