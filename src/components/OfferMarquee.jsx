import React from 'react'

function OfferMarquee() {
  return (
    <div className="bg-black w-full z-50 top-0 left-0 text-white dg-normal whitespace-nowrap overflow-scroll">
    <h2 className=" py-2 text-lg sm:text-center">
      <span className=" font-semibold text-lg tracking-wide">
        LUCKY OFFER :{" "}
      </span>
      Buy 2 Get An Invisible Sunscreen FREE {`:)`}
      <span className=" font-bold text-xl sm:pl-4 md:pl-4 tracking-wide">
        Shop NOW!
      </span>
    </h2>
  </div>
  )
}

export default OfferMarquee