import React from 'react'
import { TestimonialData } from '../data/constants';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  return (
    <>
    <div className="p-10 w-screen h-auto flex flex-col lg:flex-row sm:flex-col ld:items-center ld:justify-between div-scrollbar-horizontal whitespace-nowrap">
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

    <div className="p-10 pb-10 ld:w-[60%] h-auto flex flex-row gap-10 div-scrollbar-horizontal rounded-xl snap-x sm:self-center sm:w-[90%]">
      {TestimonialData.map((data, index) => (<TestimonialCard key={data.id} emoji={data.emoji} customer_name={data.customer_name} title={data.title} comment={data.comment} date={data.date} product_name={data.product_name} />))}</div>

    </>
  )
}

export default Testimonials