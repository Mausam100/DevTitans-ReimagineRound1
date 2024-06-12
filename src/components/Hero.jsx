import React from "react";
import Banner1 from "../assets/images/concerns/wrinkles.png";
import Banner2 from "../assets/images/concerns/hairfall.png";
import Banner3 from "../assets/images/concerns/dandruff.png";
import Banner4 from "../assets/images/concerns/oiliness.png";
import Banner5 from "../assets/images/concerns/tone.png";
import Banner6 from "../assets/images/concerns/acne.png";
import Model from '../assets/images/girl.png'
const Hero = () => {
  return (
    <main className=" px-4 text-[#272727]">
      {/* want to get rid section start */}
      <div className="">
        <div className="flex justify-between items-baseline">
          <h1 className=" text-4xl mb-6">Want to get rid of</h1>
          <h1 className=" text-8xl">?</h1>
        </div>
        <div className="-mt-5">
          <div className="flex gap-2">
            <div className=" w-1/3">
              <h4 className="text-center font-semibold">
                Fine Lines / Wrinkles
              </h4>

              <img className=" w-full" src={Banner1} alt="" />
            </div>
            <div className=" w-1/3">
              <h4 className="text-center font-semibold">Hair fall</h4>
              <img className=" w-full" src={Banner2} alt="" />
            </div>
            <div className=" w-1/3">
              <h4 className="text-center font-semibold">Dandruff</h4>
              <img className=" w-full" src={Banner3} alt="" />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className=" w-1/3">
              <img className=" w-full" src={Banner4} alt="" />
              <h4 className="text-center font-semibold">Oiliness</h4>
            </div>
            <div className=" w-1/3">
              <img className=" w-full" src={Banner5} alt="" />
              <h4 className="text-center font-semibold">Uneneven Tone</h4>
            </div>
            <div className=" w-1/3">
              <img className=" w-full" src={Banner6} alt="" />
              <h4 className="text-center font-semibold">Acne</h4>
            </div>
          </div>
        </div>
        <h2 className=" text-4xl mt-3">or Want FLAWLESS skin & hairs ?</h2>
      </div>
      {/* want to get rid section end */}

      {/* answer section start */}
      <div className="" >
        <h1 className=" font-extrabold text-4xl my-3">yes?</h1>
        <p className=" text-2xl leading-6">Get Results with our <br />
        Tried and Tested <br /> Products</p>
        <button className=" my-2 px-4 pb-1 bg-black text-white text-2xl font-bold">Shop Now</button>
      </div>
      {/* answer section end */}

      {/* a paragraph */}
      <p className=" my-6 border-2 p-2 text-lg leading-5">Our products are authentic, effective skincare solutions for all your concerns, with each cherrypicked element chosen for its scientific merit.</p>

      {/* click div */}
      <div>
         <img src={Model} alt="" />
      </div>

    </main>
  );
};

export default Hero;
