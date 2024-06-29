import React from 'react';

function TestimonialCard({emoji, customer_name, title, comment, date, product_name}) {
  return (
    <>
    <div className="bg-[#E5E9EA] p-5 w-fit h-64 rounded-lg shadow-md max-w-md mx-auto my-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img 
            src={emoji} 
            alt="Avatar" 
            className="rounded-full w-10 h-10 mr-2"
          />
          <div className="text-sm">
            <p className="dg-semibold text-gray-800">{customer_name}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          {date}
        </div>
      </div>
      <div className="text-gray-800">
        <h3 className="dg-bold text-xl mb-4">{title}</h3>
        <p className="mb-8 dg-medium text-wrap text-lg leading-none tracking-normal">
          {comment}
        </p>
        <p className="italic text-lg dg-medium text-gray-600">
          {product_name}
        </p>
      </div>
    </div>
  </>
  )
}

export default TestimonialCard