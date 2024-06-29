import React from "react";
import CatagoryCard from "./CatagoryCard";
import { catagoryData } from "../data/constants.js";

function CatagoryGrid() {
  return (
    <div className="w-full h-fit py-10 flex flex-col justify-center items-center">
      <div className="sm:w-full lg:w-[20%] h-auto pb-8">
        <h4 className="text-2xl dg-normal text-center uppercase text-zinc-500 leading-3">
          Shop
        </h4>
        <h2 className="text-5xl dg-normal uppercase text-center text-black leading-none tracking-tight text-nowrap">
          by Category
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 cursor-pointer">
        <div className="flex flex-row justify-center items-center gap-8">
          {catagoryData.slice(0, 2).map((category) => (
            <CatagoryCard
              key={category.num}
              title={category.title}
              imageSrc={category.picsrc}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          {catagoryData.slice(2, 4).map((category) => (
            <CatagoryCard
              key={category.num}
              title={category.title}
              imageSrc={category.picsrc}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-8">
          {catagoryData.slice(4, 6).map((category) => (
            <CatagoryCard
              key={category.num}
              title={category.title}
              imageSrc={category.picsrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatagoryGrid;
