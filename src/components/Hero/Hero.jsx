import React from "react";
import Banner1 from "../../assets/images/concerns/wrinkles.png";
import Banner2 from "../../assets/images/concerns/hairfall.png";
import Banner3 from "../../assets/images/concerns/dandruff.png";
import Banner4 from "../../assets/images/concerns/oiliness.png";
import Banner5 from "../../assets/images/concerns/tone.png";
import Banner6 from "../../assets/images/concerns/acne.png";
import Quemark from "../../assets/icons/quemark.svg";
import Model from "../../assets/images/girl.png";
const Hero = () => {
  return (
    <main className="px-4 md:flex gap-8">
      {/* want to get rid section start */}

      <div className=" md:w-1/2">
        <h1 className=" text-4xl mt-10 font-thin">Want to get rid of</h1>

        <div className="">
          <div className=" relative flex items-center gap-2  py-2">
            <div className=" w-1/3">
              <h4 className="text-center font-semibold ">Wrinkles</h4>

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
            <div className="hidden sm:block w-20 "></div>
            <img
              src={Quemark}
              alt="?"
              className=" absolute right-0 -top-14 h-14 sm:-top-8 sm:h-28 sm:-right-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block w-20 "></div>
            <div className=" w-1/3">
              <img className=" w-full" src={Banner4} alt="" />
              <h4 className="text-center font-semibold ">Oiliness</h4>
            </div>
            <div className="w-1/3">
              <img className=" w-full" src={Banner5} alt="" />
              <h4 className="text-center font-semibold text-nowrap ">
                Uneneven Tone
              </h4>
            </div>
            <div className="w-1/3">
              <img className=" w-full" src={Banner6} alt="" />
              <h4 className="text-center font-semibold ">Acne</h4>
            </div>
          </div>
        </div>
        <h2 className=" text-3xl pt-4 font-thin">
          or Want FLAWLESS skin & hairs ?
        </h2>
      </div>

      {/* want to get rid section end */}

      <div className=" md:w-1/2 gap-8 sm:flex sm:items-center sm:justify-between pt-10">
        {/* answer section start */}
        <div className=" pt-4">
          <h1 className=" font-semibold text-4xl my-6">yes?</h1>
          <p className=" text-2xl font-light leading-6">
            Get Results with our <br />
            Tried and Tested Products
          </p>
          <button className=" my-4 px-4 pb-1 text-black border-black border-2 text-2xl font-semibold rounded-3xl">
            Shop Now
          </button>
        </div>
        {/* answer section end */}

        {/* click div */}
        <div className="right-div">
          <img className="w-full md:h-96" src={Model} />

          <h3 className=" text-pink-600 text-3xl text-center sm:text-xl">
            click to know my beauty secret
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Hero;
