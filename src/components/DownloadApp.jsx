import React from "react";
import Mobile from "../assets/images/AppImg.png";
import Face from "../assets/images/face.png";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";
const DownloadApp = () => {
  return (
    <section className="p-10 flex md:flex-row md:pb-20 bg-emerald-300 items-center justify-center sm:gap-5">
      <div className=" sm:flex md:w-2/3 items-center justify-center ">
        <div className="img mt-8 hidden sm:block sm:w-48 md:w-72 md:mt-0 md:ml-4 bg-amber-300">
          <img className="w-full h-auto " src={Mobile} alt="App" />
        </div>

        <div className=" sm:al flex flex-col items-center md:ml-4 bg-pink-300">
          <h2 className=" text-5xl text-center text-nowrap">Download Our </h2>
          <h3 className=" text-8xl text-center -mt-4 relative">App
            <span className="absolute top-6 -right-10 bg-[#cccccc] rounded-full w-8 h-8"><GoArrowUpRight className="w-4 h-4 translate-x-1/2 translate-y-1/2" /></span>
          </h3>
          <p className=" text-2xl pt-6 pb-0">Get App Exclusive Discounts & Offers</p>
          <div className=" text-xl py-2">
            <li>Track your orders</li>
            <li>Get in touch with Skincare experts</li>
            <li>Save your routine</li>
            <li>Get special offers & discounts</li>
          </div>
          <div className="buttons flex justify-evenly w-full p-2 gap-4">
            <button className=" bg-black text-white px-6 py-2 rounded-3xl text-lg dg-medium text-nowrap flex gap-3 items-center justify-center hover:bg-[#333333]">
              <span><BiLogoPlayStore /></span>
              Play Store
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-lg dg-medium text-nowrap flex items-center justify-center gap-3 hover:bg-[#333333]">
              <span><IoIosAppstore /></span>
              App Store
            </button>
          </div>
        </div>
      </div>


      <div className="modelimg hidden md:flex w-[30%] ml-40 justify-end bg-blue-300">
        <div className="relative w-full">
          <img className="w-full aspect-h-9/16 object-cover" src={Face} alt="Model" />
        </div>
      </div>

    </section>
  );
};

export default DownloadApp;
