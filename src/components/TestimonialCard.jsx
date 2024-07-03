import React from 'react';

function TestimonialCard({ emoji, customer_name, title, comment, date, product_name }) {
  return (
    <div className="bg-[#E5E9EA] p-4 w-96 h-64 rounded-lg shadow-2xl max-w-md mx-auto my-4 group transition-all duration-300 ease-in-out hover:bg-[#C47545] hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between mb-2 text-gray-800 group-hover:text-white">
        <div className="flex items-center">
          <img 
            src={emoji} 
            alt="Avatar" 
            className="rounded-full w-10 h-10 mr-3"
          />
          <div className="text-base">
            <p className="dg-bold group-hover:text-white">{customer_name}</p>
          </div>
        </div>
        <div className="text-sm group-hover:text-white">
          {date}
        </div>
      </div>
      <div className="text-gray-800 group-hover:text-white">
        <h3 className="dg-bold text-2xl mb-2 w-64 group-hover:text-white">{title}</h3>
        <p className="mb-4 h-fit dg-medium text-wrap text-lg leading-snug tracking-normal group-hover:text-white">
          {comment}
        </p>
        <p className="italic text-lg dg-medium text-gray-600 group-hover:text-white">
          {product_name}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
