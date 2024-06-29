import React from "react";
import transparency from "../assets/images/transparency.svg";
import Efficacy from "../assets/images/efficacy.svg";
import Affordable from "../assets/images/affordable.svg";
import BestIngrideints from "../assets/images/globe.svg";

function Cantdoubt() {
  return (
    <>
    <div className="w-full h-fit mb-10 flex flex-col md:flex-row justify-between items-center">
      <div className="cantdoubt px-4 w-full h-fit sm:w-[65%] md:w-1/2 p-5 flex flex-col">
        <h1 className=" text-5xl sm:text-6xl md:text-7xl py-2 font-[400] uppercase mb-5">
              CAN’T DOUBT OUR
              <br />
              PRODUCTS{" "}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex gap-5 flex-col">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="1st w-full h-24 flex flex-row items-center justify-start gap-5">
                <div className="w-24 h-24 bg-[#E7E8EA] rounded-3xl flex justify-center items-center">
                  <img src={transparency} className="w-1/2 h-1/2" alt="" />
                </div>
                <div className="w-2/3 h-full flex flex-col items-start justify-center">
                  <h3 className="text-2xl">Total Transparency</h3>
                  <p className="text-md leading-none">
                    Full disclosure of ingredients used & their concentration
                  </p>
                </div>
              </div>
              <div className="2nd w-full h-24 flex flex-row items-center justify-start gap-5">
                <div className="w-24 h-24 bg-[#E7E8EA] rounded-3xl flex justify-center items-center">
                  <img src={Efficacy} className="w-1/2 h-1/2" alt="" />
                </div>
                <div className="w-2/3 h-full flex flex-col items-start justify-center">
                  <h3 className="text-2xl">Efficacy</h3>
                  <p className="text-md leading-none">
                    Formulations developed in our in-house laboratories
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-col md:flex-row gap-5">
              <div className="3rd w-full h-24 flex flex-row items-center justify-start gap-5">
                <div className="w-24 h-24 bg-[#E7E8EA] rounded-3xl flex justify-center items-center">
                  <img src={Affordable} className="w-1/2 h-auto" alt="" />
                </div>
                <div className="w-2/3 h-full flex flex-col items-start justify-center">
                  <h3 className="text-2xl">Affordable</h3>
                  <p className="text-md leading-none">
                    Quality Skincare for all
                  </p>
                </div>
              </div>
              <div className="4th w-full h-24 flex flex-row items-center justify-start gap-5">
                <div className="w-24 h-24 bg-[#E7E8EA] rounded-3xl flex justify-center items-center">
                  <img src={BestIngrideints} className="w-1/2 h-1/2" alt="" />
                </div>
                <div className="w-2/3 h-full flex flex-col items-start justify-center">
                  <h3 className="text-2xl">Best Ingredients</h3>
                  <p className="text-md leading-none">
                    sourced from across the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="quiz w-full md:w-1/2 h-fit flex justify-center items-center my-16">
        <div className="w-72 h-56 relative bg-gradient-to-r from-white to-[#E7E8EA] rounded-lg max-w-md mx-auto p-5">

          <div className="w-20 h-12 hidden md:inline-block md:flex items-center justify-center absolute top-2 left-2 -translate-x-1/2 -translate-y-1/2 border-[#121413] border-2 p-2 rounded-xl text-[#121413] text-xl dg-bold">
            ???
          </div>

          <div className="text-md leading-none text-[#272727] text-right mb-4 dg-medium">
            confused what to<br /> consider?
          </div>

          <div className="text-left">
            <p className="text-xl dg-medium mb-2">
              Get Science-Backed<br /> Personalized Recommendation
            </p>
            <p className="text-xl mb-4 dg-medium text-[#5B5B5B]">
              with a Simple Quiz
            </p>
            <button className="w-24 h-12 mx-auto absolute md:translate-x-1/2 md:translate-y-1/2 -translate-x-5 -translate-y-5 bottom-0 right-0 bg-black text-white text-lg py-2 px-4 rounded-lg text-nowrap">
              Start Quiz
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Cantdoubt;
