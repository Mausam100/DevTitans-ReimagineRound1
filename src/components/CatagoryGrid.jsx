import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import babycare from "../assets/images/category/baby_care.jpg";
import skincare from "../assets/images/category/skin_care.jpg";
import haircare from "../assets/images/category/hair_care.jpg";
import bodycare from "../assets/images/category/body_care.jpg";
import lipcare from "../assets/images/category/lip_care.jpg";
import eyecare from "../assets/images/category/eye_care.jpg";

const shopcarddata = [
  {
    num: 1,
    title: "Baby Care",
    image: babycare,
  },
  {
    num: 2,
    title: "Skin Care",
    image: skincare,
  },
  {
    num: 3,
    title: "Hair Care",
    image: haircare,
  },
  {
    num: 4,
    title: "Body Care",
    image: bodycare,
  },
  {
    num: 5,
    title: "Lip Care",
    image: lipcare,
  },
  {
    num: 6,
    title: "Eye Care",
    image: eyecare,
  },
];

const HoverEffect = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex items-center justify-center py-4"><h1 className="text-4xl text-center dg-medium"><span className="text-zinc-700 dg-light">Shop</span><br /> by Category</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {shopcarddata.map((carddata, idx) => (
          <div
            key={carddata.num}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 w-52 md:h-[95%] md:w-[63%] self-center top-0 md:left-14 left-28 bg-[#ccc] block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.25, delay: 0.3 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="container flex flex-col justify-around items-center">
              <div className="w-[40vw] sm:w-48 h-10 bg-[#e6e6e6] rounded-t-2xl flex items-center justify-center dg-medium tracking-wider gap-3 px-4">
                <div className="w-[10%] h-2 z-30  border-neutral-500 border-2 rounded-full"></div>
                <h3 className="w-4/5 text-xl z-30 text-center text-nowrap">
                  {carddata.title}
                </h3>
                <div className="w-[10%] h-2 z-30  border-neutral-500 border-2 rounded-full"></div>
              </div>
              <div className="w-[40vw] sm:w-48 h-[50vw] sm:h-64 p-4 bg-[#e6e6e6] rounded-b-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={carddata.image}
                  className="w-full h-full z-30 object-cover contrast-125 brightness-110 rounded-2xl overflow-hidden"
                  alt={carddata.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffect;
