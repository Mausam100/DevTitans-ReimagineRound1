import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circle from "../assets/images/circle.png";

gsap.registerPlugin(ScrollTrigger);

const SplitTextWithEffect = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll(".char");

    gsap.to(chars, {
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="char inline-block opacity-10 transition-opacity duration-300"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div
      ref={textRef}
      className="flex justify-center items-center w-full h-[80vh] dg-medium"
    >
      <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
        <span className="flex items-end">
          {splitText("Our products are authentic")}
          <img className="w-10 sm:w-12 md:w-14 h-auto px-2" src={Circle} alt="" />
          {splitText(",")}
        </span>
        <span className="flex items-end">
          {splitText("effective")}
          <img className="w-10 sm:w-12 md:w-14 h-auto px-2" src={Circle} alt="" />
          {splitText("skincare solutions")}
        </span>
        <span className="flex items-end">
          {splitText("for all your concerns,")}
          <img className="w-10 sm:w-12 md:w-14 h-auto px-2" src={Circle} alt="" />
          {splitText("with")}
        </span>
        <span className="flex items-end">
          {splitText("each cherrypicked")}
          <img className="w-10 sm:w-12 md:w-14 h-auto px-2" src={Circle} alt="" />
          {splitText("element")}
        </span>
        <span className="flex items-end">
          {splitText("chosen")}
          <img className="w-10 sm:w-12 md:w-14 h-auto px-2" src={Circle} alt="" />
          {splitText("for its scientific ")}
        </span>
        {splitText("merit.")}
      </p>
    </div>
  );
};

const Animtext = () => {
  return (
    <div className="p-8">
      <SplitTextWithEffect />
    </div>
  );
};

export default Animtext;
