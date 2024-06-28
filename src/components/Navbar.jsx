import React from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import Logo from "../assets/icons/logo.png";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between px-4 pt-3 items-center md:gap-10 dg-normal">
        <div className="flex gap-6 md:hidden ">
          <IoMenu className="text-2xl" />
          <IoSearch className="text-2xl hidden sm:block md:hidden" />
        </div>
        {/* logo */}
        <div>
          <img className=" w-32" src={Logo} alt="logo" />
        </div>
        {/* hyperlinks */}
        <div className="hidden md:flex md:gap-32 border-b-2 border-[#272727] text-nowrap  ">
          <div className=" flex gap-10 text-xl ">
            <a href="#">Best Sellers</a>
            <a href="#">Skin+Body Care</a>
            <a href="#">Hair Care</a>
          </div>
          <div className=" flex gap-10 text-xl">
            <a href="#">Build Your Routine</a>
            <a href="#">Track order</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex gap-6">
          <LuUser className=" text-2xl" />
          <CgShoppingCart className="text-2xl hidden sm:block " />
          <IoSearch className="text-2xl hidden md:block" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
