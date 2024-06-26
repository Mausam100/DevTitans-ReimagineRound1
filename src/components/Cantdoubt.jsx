import React from "react";
import transparency from "../assets/images/transparency.svg";
import Efficacy from "../assets/images/efficacy.svg";
import Affordable from "../assets/images/affordable.svg";
import BestIngrideints from "../assets/images/globe.svg";

function Cantdoubt() {
  return (
    <>
      <div className=" px-4 w-full h-auto flex flex-col md:flex-row">
        {/* <div className="triple-capcule scroll h-[20%]"></div> */}

        <div className="w-full sm:w-[65%] md:w-[50%] md p-5">
          <h1 className="text-7xl py-2 font-[400] uppercase mb-5">
            CAN’T DOUBT OUR
            <br />
            PRODUCTS{" "}
          </h1>
          <div className="leftdt flex flex-col md:flex-row">
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
      </div>
      <div className="rightdt "></div>
    </>
  );
}

export default Cantdoubt;
