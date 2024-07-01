import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import Logo from "../assets/icons/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex items-center justify-between px-10 py-4">
        <CgShoppingCart className="sm:hidden text-3xl" />
        <div className="w-24 sm:w-36 cursor-pointer">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="flex items-center justify-around gap-5 text-2xl font-thin cursor-pointer">
          <IoSearch className="hidden sm:block" />
          <LuUser className="hidden sm:block" />
          <CgShoppingCart className="hidden sm:block" />
          <div
            className="flex z-50 flex-col gap-2 w-8 cursor-pointer"
            onClick={toggleMenu}
          >
            <div
              className={`rounded-2xl h-[2px] w-1/2 bg-black duration-500 origin-right 
              ${
                isOpen
                  ? "rotate-[225deg] -translate-x-[12px] -translate-y-[1px]"
                  : ""
              }`}
            ></div>
            <div
              className={`rounded-2xl h-[2px] w-full bg-black duration-500 
              ${isOpen ? "-rotate-45" : ""}`}
            ></div>
            <div
              className={`rounded-2xl h-[2px] w-1/2 bg-black duration-500 place-self-end origin-left 
              ${
                isOpen
                  ? "rotate-[225deg] translate-x-[12px] translate-y-[1px]"
                  : ""
              }`}
            ></div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black z-40 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-1/3 sm:w-2/3`}
      >
        <div className="flex mt-24 items-center px-10 justify-between ">
          <button className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white">
            Log In
          </button>
          <button className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white">
            {" "}
            Create New Account
          </button>
        </div>
        <ul className=" cursor-pointer px-10 mt-6 text-lg dg-medium">
          <li
           className=" text-2xl relative group w-fit">
            BEST SELLERS
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-300 ease-out group-hover:left-0 group-hover:w-full"></span>
           </li>
          <li className=" text-2xl pt-3 relative group w-fit">
            NEW LAUNCHES
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
            </li>
          <li className=" text-2xl pt-3 relative group w-fit">
            SKIN, BODY, LIP & EYE CARE
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
            </li>
          <li className=" text-2xl pt-3 relative group w-fit">
            HAIR CARE
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
            </li>
          <li className=" text-2xl pt-3 relative group w-fit">
            BABY CARE 
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
            </li>
        </ul>
        <div className="px-10 mt-4 ">
          <h3 className="text-3xl font-semibold">Email</h3>
          <a className=" text-2xl dg-medium relative group w-fit" href="help@beminimalist.co">
            help@beminimalist.co
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>
            </a>
        </div>
        <div className="pl-10 mt-4  ">
          <h3 className="text-3xl font-semibold">Socials</h3>
          <div className=" flex items-center justify-between pr-10">
          <a className=" text-2xl dg-medium relative w-fit group" href="">Facebook 
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>

          </a>
          <a className=" text-2xl dg-medium relative w-fit group" href="">Instagram
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>

          </a>
          <a className=" text-2xl dg-medium relative w-fit group" href="">Youtube
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-black transition-all duration-500 ease-out group-hover:left-0 group-hover:w-full"></span>

          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
