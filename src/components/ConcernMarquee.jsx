import React from "react";
import { motion } from "framer-motion";

const concernPoints = [
  { point: "Fine Lines" },
  { point: "Wrinkles" },
  { point: "Dehydration" },
  { point: "Hair Fall" },
  { point: "Dandruff" },
  { point: "Uneven Tone" },
  { point: "Acne Contol" },
  { point: "Oilness" },
];

const ConcernMarquee = () => {
  return (
    <div className="p-5 ">
      <div className="w-full h-auto pt-6 flex justify-center">
        <h2 className="text-3xl">Our SOLUTIONS TREAT</h2>
      </div>
      {/* ------------------- fist merquee-------------------- */}
      <motion.div
        className="flex gap-3 mt-4 mb-4 "
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {concernPoints.map((point, index) => (
          <div
            key={index}
            className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
        {concernPoints.map((point, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
      </motion.div>

      {/* ------------------- second merquee-------------------- */}

      <motion.div
        className="flex gap-3 mt-4 mb-4"
        animate={{ x: [-1000, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {concernPoints.map((point, index) => (
          <div
            key={index}
            className=" flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
        {concernPoints.map((point, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
      </motion.div>

      {/* ------------------- third merquee-------------------- */}

      <motion.div
        className="flex gap-3 mt-4 mb-4"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {concernPoints.map((point, index) => (
          <div
            key={index}
            className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
        {concernPoints.map((point, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex text-nowrap justify-center items-center border-[1px] border-neutral-700 rounded-3xl px-9 py-[1.2vh] transition-colors duration-300 bg-white text-black hover:bg-black hover:text-white"
          >
            {point.point}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ConcernMarquee;
