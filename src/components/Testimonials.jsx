import React, { useState, useEffect, useRef } from 'react';
import { TestimonialData } from '../data/constants';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = TestimonialData.map((testimonial, index) => (
    <TestimonialCard key={index} {...testimonial} />
  ));
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const startAutoPlay = () => {
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <div
        className="p-10 w-screen h-auto flex flex-col lg:flex-row sm:flex-col ld:items-center ld:justify-between div-scrollbar-horizontal whitespace-nowrap"
      >
        <div className="sm:w-full lg:w-[20%] h-auto pb-8">
          <h4 className="text-5xl dg-light text-black leading-none">
            Our Customer's
          </h4>
          <h2 className="text-5xl text-black dg-light leading-none tracking-tight">
            <span className="dg-normal">Overwhelming</span>
            <br />
            Delight...
          </h2>
        </div>
      </div>

      <div
        className="max-w-md mx-auto overflow-hidden relative"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onTouchStart={stopAutoPlay}
        onTouchEnd={startAutoPlay}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;