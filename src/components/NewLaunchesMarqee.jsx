import React from "react";
import Dimond from "../assets/images/dimond.png";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-2">
      <motion.div
        animate={{ x: [-1000, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
        className="flex gap-16 text-2xl font-bold uppercase items-center"
      >
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
        <span className="flex gap-4">
          New Launches
          <img className=" w-10 h-auto" src={Dimond} alt="" />
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
