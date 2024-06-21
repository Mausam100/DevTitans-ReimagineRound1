import React from 'react'
import transparency from '../assets/images/transparency.svg'


function Proofcard() {
  return (
    <div className='w-full h-24 flex flex-row items-center justify-start gap-5'>
        <div className='w-24 h-24 bg-[#E7E8EA] rounded-3xl flex justify-center items-center'>
            <img src={transparency} className='w-1/2 h-1/2' alt="" />
        </div>
        <div className='w-2/3 h-full flex flex-col items-start justify-center'>
            <h3 className='text-2xl'>Total Transparency</h3>
            <p className='text-md leading-none'>Full disclosure of ingredients used & their concentration</p>
        </div>
    </div>
  )
}

export default Proofcard