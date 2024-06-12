import React from "react";
import Banner1 from "../assets/images/concerns/wrinkles.png";
import Banner2 from "../assets/images/concerns/hairfall.png";
import Banner3 from "../assets/images/concerns/dandruff.png";
import Banner4 from "../assets/images/concerns/oiliness.png";
import Banner5 from "../assets/images/concerns/tone.png";
import Banner6 from "../assets/images/concerns/acne.png";
import Model from "../assets/images/girl.png";
const Hero = () => {
  return (
    <main className=" px-4 text-[#272727] sm:flex">
      <div className="left-div sm:w-1/2">
        {/* want to get rid section start */}
        <div className="">
          <div className="flex justify-between items-baseline sm:items-center">
            <h1 className=" text-4xl mb-6 sm:mr-6 ">Want to get rid of</h1>
            <h1 className=" text-8xl">?</h1>
          </div>
          <div className="-mt-5">
            <div className="flex gap-2 sm:mr-6">
              <div className=" w-1/3">
                <h4 className="text-center font-semibold ">
                   Wrinkles
                </h4>

                <img className=" w-full" src={Banner1} alt="" />
              </div>
              <div className=" w-1/3">
                <h4 className="text-center font-semibold ">Hair fall</h4>
                <img className=" w-full" src={Banner2} alt="" />
              </div>
              <div className=" w-1/3">
                <h4 className="text-center font-semibold ">Dandruff</h4>
                <img className=" w-full" src={Banner3} alt="" />
              </div>
            </div>
            <div className="flex gap-2 mt-2 sm:ml-4">
              <div className=" w-1/3">
                <img className=" w-full" src={Banner4} alt="" />
                <h4 className="text-center font-semibold ">Oiliness</h4>
              </div>
              <div className=" w-1/3">
                <img className=" w-full" src={Banner5} alt="" />
                <h4 className="text-center font-semibold ">Uneneven Tone</h4>
              </div>
              <div className=" w-1/3">
                <img className=" w-full" src={Banner6} alt="" />
                <h4 className="text-center font-semibold ">Acne</h4>
              </div>
            </div>
          </div>
          <h2 className=" text-4xl mt-3 sm:text-3xl sm:">or Want FLAWLESS skin & hairs ?</h2>
        </div>
        {/* want to get rid section end */}

        {/* answer section start */}
        <div className=" sm:flex">

        <div className="">
          <h1 className=" font-extrabold text-4xl my-3">yes?</h1>
          <p className=" text-2xl leading-6">
            Get Results with our <br />
            Tried and Tested <br /> Products
          </p>
          <button className=" my-2 px-4 pb-1 bg-black text-white text-2xl font-bold">
            Shop Now
          </button>
        </div>
        {/* answer section end */}

        {/* a paragraph */}
        <p className=" my-6 border-2 p-2 text-lg leading-5 sm:w-40 sm:border-none sm:ml-6">
          Our products are authentic, effective skincare solutions for all your
          concerns, with each cherrypicked element chosen for its scientific
          merit.
        </p>
        </div>
      </div>

      {/* click div */}
      <div className="right-div sm:w-1/2 sm:pt-10 sm:items-center">
      <div className=" sm:flex sm:justify-center">
        <img className=" w-full sm:w-64 sm:object-center" src={Model} />

      </div>

        <h3 className=" text-pink-600 text-3xl text-center sm:text-xl">
          click to know my beauty secret
        </h3>
      </div>
    </main>
  );
};

export default Hero;
