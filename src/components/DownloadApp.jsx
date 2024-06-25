import React from "react";
import Mobile from "../assets/images/AppImg.png";
import Face from "../assets/images/face.png";
const DownloadApp = () => {
  return (
    <section className="p-10 md:flex md:p-0  ">
      <div className=" sm:flex gap-4 md:w-2/3 ">
        <div className="img mt-8 hidden sm:block sm:w-48 md:w-72 md:mt-0 ">
          <img className="w-full h-auto" src={Mobile} alt="App" />
        </div>
        <div className=" sm:al flex flex-col items-center">
          <h2 className=" text-7xl">Download Our </h2>
          <h3 className=" text-8xl -mt-4 ">App </h3>
          <p className=" text-2xl p-2">Get App Exclusive Discounts & Offers</p>
          <div className=" text-xl p-2">
            <li>Track your orders</li>
            <li>Get in touch with Skincare experts</li>
            <li>Save your routine</li>
            <li>Get special offers & discounts</li>
          </div>
          <div className="buttons flex justify-evenly w-full p-2">
            <button className=" bg-black text-white px-10 py-2 rounded-3xl text-2xl font-semibold">
              Play Store
            </button>
            <button className="bg-black text-white px-10 py-2 rounded-3xl text-2xl font-semibold">
              App Store
            </button>
          </div>
        </div>
      </div>
      <div className=" modelimg hidden md:flex w-[30%] ml-40 justify-end ">
        <img className="w-full md:w-80" src={Face} />
      </div>
    </section>
  );
};

export default DownloadApp;
