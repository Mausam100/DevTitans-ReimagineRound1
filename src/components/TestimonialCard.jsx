import React from 'react';

function TestimonialCard({emoji, customer_name, title, comment, date, product_name}) {
  return (
    <>
      <div className="bg-[#E5E9EA] p-4 w-96 h-64 rounded-lg shadow-md max-w-md mx-auto my-4 ">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img 
              src={emoji} 
              alt="Avatar" 
              className="rounded-full w-10 h-10 mr-3"
            />
            <div className="text-sm">
              <p className="dg-bold text-gray-800">{customer_name}</p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {date}
          </div>
        </div>
        <div className="text-gray-800">
          <h3 className="dg-bold text-2xl mb-2 w-64">{title}</h3>
          <p className="mb-4 h-fit dg-medium text-wrap text-lg leading-snug tracking-normal">
            {comment}
          </p>
          <p className="italic text-lg dg-medium text-gray-600">
            {product_name}
          </p>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
