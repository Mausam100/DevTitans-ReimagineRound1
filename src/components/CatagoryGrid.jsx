import React from "react";
import skincare from '../assets/images/category/skincare.png'

function CatagoryGrid() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[30%] h-[80%] flex flex-col bg-pink-400 rounded-2xl overflow-hidden gap-5 justify-between items-center">
         <div className="">
          <div className=" bg-[url('../assets/images/category/skincare.png')] h-2/3 w-40"></div>
          <div className=""></div>
         </div>
         <div className=""></div>
         <div className="">
         <div className=""></div>
         <div className=""></div>
         </div>
        </div>
      </div>
    </>
  );
}

export default CatagoryGrid;
