import React from 'react';

function TestimonialCard() {
  return (
    <>
    <div className="bg-[#E5E9EA] p-4 rounded-lg shadow-md max-w-md mx-auto my-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Avatar" 
            className="rounded-full w-10 h-10 mr-2"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-800">Shrayasi B.</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          06/09/24
        </div>
      </div>
      <div className="text-gray-800">
        <h3 className="font-semibold mb-2">After Finishing two Bottles...</h3>
        <p className="mb-2">
          Minimalist 10% vitamin c is the only product which shows result on my skin. I am obsessed with the result of this product. My must have from minimalist.
        </p>
        <p className="italic text-gray-600">
          (Glycolic Acid 8% Exfoliating Liquid)
        </p>
      </div>
    </div>
  </>
  )
}

export default TestimonialCard