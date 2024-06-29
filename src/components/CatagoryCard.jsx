// import React from 'react'
// import babycare from '../assets/images/category/baby_care.jpg'


// function CatagoryCard() {
//   return (
//     <>
//     <div className='container flex flex-col justify-around items-center gap-5'>
//         <div className='w-[40vw] sm:w-48 h-10 bg-[#E5E9EA] rounded-t-2xl flex items-center justify-center dg-medium tracking-wider gap-3 px-4'>
//             <div className='w-[10%] h-2 border-neutral-500 border-2 rounded-full'></div>
//             <h3 className='w-4/5 text-xl text-center text-nowrap'>Baby Care</h3>
//             <div className='w-[10%] h-2 border-neutral-500 border-2 rounded-full'></div>
//         </div>
//         <div className='w-[40vw] sm:w-48 h-[60vw] sm:h-64 p-4 bg-[#E5E9EA] rounded-2xl flex items-center justify-center overflow-hidden'>
//             <img src={babycare} className='w-full h-full object-cover contrast-125 brightness-110 rounded-2xl overflow-hidden' alt="" />
//         </div>
//     </div>
//     </>
//   )
// }

// export default CatagoryCard
import React from 'react';

function CatagoryCard({ title, imageSrc }) {
  return (
    <div className='container flex flex-col justify-around items-center gap-5'>
      <div className='w-[40vw] sm:w-48 h-10 bg-[#E5E9EA] rounded-t-2xl flex items-center justify-center dg-medium tracking-wider gap-3 px-4'>
        <div className='w-[10%] h-2 border-neutral-500 border-2 rounded-full'></div>
        <h3 className='w-4/5 text-xl text-center text-nowrap'>{title}</h3>
        <div className='w-[10%] h-2 border-neutral-500 border-2 rounded-full'></div>
      </div>
      <div className='w-[40vw] sm:w-48 h-[60vw] sm:h-64 p-4 bg-[#E5E9EA] rounded-2xl flex items-center justify-center overflow-hidden'>
        <img src={imageSrc} className='w-full h-full object-cover contrast-125 brightness-110 rounded-2xl overflow-hidden' alt={title} />
      </div>
    </div>
  );
}

export default CatagoryCard;
