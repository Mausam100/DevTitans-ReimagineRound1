import React from "react";
import Mobile from "../assets/images/AppImg.png";
import Face from "../assets/images/face.png";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";
const DownloadApp = () => {
  return (
    <section className="px-4 sm:p-10 flex md:flex-row md:pb-20 items-center justify-evenly gap-10 w-full">

        <div className="img hidden sm:inline-block sm:w-60 md:w-64">
          <img className="w-full h-auto" src={Mobile} alt="App" />
        </div>
      
      <div className=" sm:flex items-center justify-between gap-14">

        

        <div className="flex flex-col justify-center items-center">
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
          <div className="buttons flex justify-evenly w-full gap-4 my-2">
            <button className=" bg-black text-white px-6 py-2 rounded-3xl text-lg dg-medium text-nowrap flex gap-3 items-center justify-center hover:bg-[#fff] border-white hover:transition-all hover:text-[#000] border-2 hover:border-black box-border">
              <span><BiLogoPlayStore /></span>
              Play Store
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-3xl text-lg dg-medium text-nowrap flex items-center justify-center gap-3 hover:bg-[#fff] border-white hover:transition-all hover:text-[#000] border-2 hover:border-black box-border">
              <span><IoIosAppstore /></span>
              App Store
            </button>
          </div>
        </div>
      </div>

        <div className="img hidden lg:inline-block w-72">
          <img className="w-full h-auto aspect-h-9/16 object-cover" src={Face} alt="Model" />
        </div>

    </section>
  );
};

export default DownloadApp;
