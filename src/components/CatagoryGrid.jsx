import React from "react";
import CatagoryCard from "./CatagoryCard";

import babycare from '../assets/images/category/baby_care.jpg';
import skincare from '../assets/images/category/skin_care.jpg';
import haircare from '../assets/images/category/hair_care.jpg';
import bodycare from '../assets/images/category/body_care.jpg';
import lipcare from '../assets/images/category/lip_care.jpg';
import eyecare from '../assets/images/category/eye_care.jpg';

const catagory_data = [
  {
    num : 1,
    title : "Baby Care",
    picsrc : babycare,
  },
  {
    num : 2,
    title : "Skin Care",
    picsrc : skincare,
  },
  {
    num : 3,
    title : "Hair Care",
    picsrc : haircare,
  },
  {
    num : 4,
    title : "Body Care",
    picsrc : bodycare,
  },
  {
    num : 5,
    title : "Lip Care",
    picsrc : lipcare,
  },
  {
    num : 6,
    title : "Eye Care",
    picsrc : eyecare,
  },
]

function CatagoryGrid() {
  return (
    <>

    <div className="w-full h-fit py-10 flex flex-col justify-center items-center">

    <div className="sm:w-full lg:w-[20%] h-auto pb-8">
        <h4 className="text-2xl dg-normal text-center uppercase text-zinc-500 leading-3">
          Shop
        </h4>
        <h2 className="text-5xl dg-normal uppercase text-center text-black leading-none tracking-tight text-nowrap">
          by Catagory
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-row justify-center items-center gap-10">
          <CatagoryCard />
          <CatagoryCard />
        </div>
        <div className="flex flex-row justify-center items-center gap-10">
          <CatagoryCard />
          <CatagoryCard />
        </div>
        <div className="flex flex-row justify-center items-center gap-10">
          <CatagoryCard />
          <CatagoryCard />
        </div>
      </div>
    </div>
    </>
  );
}

export default CatagoryGrid;
