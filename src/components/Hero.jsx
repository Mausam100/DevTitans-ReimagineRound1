import React from "react";
import Banner2 from "../assets/images/concerns/hairfall.png";
import Banner3 from "../assets/images/concerns/dandruff.png";
import Banner4 from "../assets/images/concerns/oiliness.png";
import Banner5 from "../assets/images/concerns/tone.png";
import Banner1 from "../assets/images/concerns/wrinkles.png";
import Banner6 from "../assets/images/concerns/acne.png";
import Quemark from "../assets/icons/quemark.svg";
import Model from "../assets/images/girl.png";
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const concerns = [
  {
    id: 1,
    name: "Wrinkles",
    image: Banner1
  },
  {
    id: 2,
    name: "Hair fall",
    image: Banner2
  },
  {
    id: 3,
    name: "Dandruff",
    image: Banner3
  },
  {
    id: 4,
    name: "Oiliness",
    image: Banner4
  },
  {
    id: 5,
    name: "Uneven Tone",
    image: Banner5
  },
  {
    id: 6,
    name: "Acne",
    image: Banner6
  }
]

const Hero = () => {
  return (
    <>
    


    <main className="w-full h-fit flex flex-col md:flex-row p-5 md:p-10 mt-8 justify-evenly">

      <div id="left" className="w-full md:w-1/2 flex flex-col justify-evenly gap-5">

        <h2 className="text-4xl sm:text-4xl md:text-[3vw] dg-normal">
          Want to get rid of
        </h2>

        <div className="dg-bold relative w-full sm:w-[85%] md:w-3/4">
          <div className=" flex items-center gap-2 py-2">
            {concerns.slice(0,3).map(item => (
              <div className="w-1/3">
                <h4 className="text-center">{item.name}</h4>
                <div style={{aspectRatio:16/9}} className="w-full overflow-hidden object-cover">
                  <img className="w-full h-auto" src={item.image} alt="" />
                </div>
            </div>
            ))}
            
            <img id="question-mark"
              src={Quemark}
              alt="?"
              className="absolute right-0 top-0 translate-y-[-110%] -translate-x-[0%] sm:translate-y-[-15%] sm:translate-x-[120%] md:translate-x-[110%] h-[28%] sm:h-[40%] md:h-[50%]"
            />

          </div>

          <div className="flex items-center gap-2 sm:translate-x-[15%]">
            {concerns.slice(3,6).map(item => (
               <div className="">
                <div style={{aspectRatio:16/9}} className="w-full overflow-hidden object-cover">
                  <img className="w-full h-auto" src={item.image} alt="" />
                </div>
                <h4 className="text-center ">{item.name}</h4>
             </div>
            ))}
           
          </div>



        </div>
        
        <h2 className="text-4xl sm:text-4xl md:text-[3vw] lg:text-3xl xl:text-4xl dg-normal ">
          or Want FLAWLESS skin & hairs ?
        </h2>


      </div>

      <div id="right" className="w-full md:w-1/2 flex flex-col gap-5 sm:flex-row sm:justify-around items-start sm:items-center md:text-center">
      
        <div id="button" className="flex flex-col gap-5">

          <h3 className="text-4xl sm:text-4xl md:text-4xl dg-bold">yes?</h3>
          <p className="text-2xl sm:text-2xl md:text-2vw leading-none text-nowrap ">Get Results with our<br />Tried and Tested<br />Products</p>
          <button className="group flex flex-row gap-1 justify-evenly items-center border-[1px] border-neutral-700 rounded-3xl px-[0.75vw] py-[0.5vw] transition-color duration-300 bg-white text-black hover:bg-black hover:text-white">

            <LuDot className="w-6 h-auto roup-hover:opacity-0 group-hover:-translate-x-1 transition-transform duration-300 opacity-100"/>
            <span className="dg-bold md:text-xl text-nowrap uppercase -translate-y-0.5 group-hover:-translate-x-1 transition-transform duration-300">Shop Now</span>
            <FaArrowRightLong className="w-4 h-auto group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300 opacity-0" />

          </button>

        </div>
        <div id="image" className="">

          <img src={Model} alt="model" className="w-full h-auto" />
          <p className=""></p>

        </div>

      </div>
    </main>
    </>
  );
};

export default Hero;
