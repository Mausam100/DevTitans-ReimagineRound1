import React from "react";
import Proofcard from "./Proofcard";
import transparency from "../assets/images/transparency.svg";

function Cantdoubt() {
  return (
    <div className=" px-4 w-screen h-screen flex flex-col md:flex-row">
      <div className="triple-capcule scroll h-[20%]"></div>

      <div className="w-full h-[80%]">
        <div className="leftdt flex flex-col md:flex-row">
          <h1 className="text-3xl uppercase">
            CAN’T DOUBT OUR
            <br />
            PRODUCTS{" "}
          </h1>
          <div className="w-full pt-6 flex items-center gap-4">
            <div className=" p-4 w-20 rounded-3xl bg-[#E7E8EA]">
              <img src={transparency} alt="" />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Total Transparency</h1>
              <p className=" leading-tight">Full disclosure of ingredients <br /> used & their concentration</p>
            </div>
          </div>
          <div className="w-full pt-6 flex items-center gap-4">
            <div className=" p-4 w-20 rounded-3xl bg-[#E7E8EA]">
              <img src={transparency} alt="" />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Total Transparency</h1>
              <p className=" leading-tight">Full disclosure of ingredients <br /> used & their concentration</p>
            </div>
          </div> <div className="w-full pt-6 flex items-center gap-4">
            <div className=" p-4 w-20 rounded-3xl bg-[#E7E8EA]">
              <img src={transparency} alt="" />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Total Transparency</h1>
              <p className=" leading-tight">Full disclosure of ingredients <br /> used & their concentration</p>
            </div>
          </div> <div className="w-full pt-6 flex items-center gap-4">
            <div className=" p-4 w-20 rounded-3xl bg-[#E7E8EA]">
              <img src={transparency} alt="" />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Total Transparency</h1>
              <p className=" leading-tight">Full disclosure of ingredients <br /> used & their concentration</p>
            </div>
          </div>
        </div>
        <div className="rightdt "></div>
      </div>
    </div>
  );
}

export default Cantdoubt;
