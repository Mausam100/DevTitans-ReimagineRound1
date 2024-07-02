import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialData } from '../data/constants';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <>
      <div className="p-10 w-screen h-auto flex flex-col lg:flex-row sm:flex-col lg:items-center lg:justify-between">
        <div className="sm:w-full lg:w-[20%] h-auto">
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

      <motion.div
        className="p-4 pb-20 lg:w-[60%] h-auto flex flex-row gap-10  rounded-xl snap-x sm:self-center sm:w-[100%]"
        animate={{ x: [ 0, -1000] }} 
        transition={{ 
          x: { repeat: Infinity, repeatType: 'loop', duration: 5 }, 
          ease: 'linear' 
        }}
      >
        {TestimonialData.map((data) => (
          <TestimonialCard
            key={data.id}
            emoji={data.emoji}
            customer_name={data.customer_name}
            title={data.title}
            comment={data.comment}
            date={data.date}
            product_name={data.product_name}
          />
        ))}
      </motion.div>
    </>
  );
}

export default Testimonials;
