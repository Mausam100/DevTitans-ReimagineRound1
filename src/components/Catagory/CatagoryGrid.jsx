import React from 'react'

function CatagoryGrid() {
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[30%] h-[80%] flex flex-col bg-pink-400 rounded-2xl overflow-hidden gap-5 justify-between items-center'>
        <div className='w-full bg-green-200 h-1/3 flex flex-row flex-nowrap gap-5 justify-between'>
          <div className='w-[40%] h-auto bg-[#00fffb]'></div>
          <div className='w- h-auto bg-[#37ff00]'></div>
        </div>
        <div className='w-full bg-violet-200 h-1/3 flex flex-row flex-nowrap gap-5 justify-between'>
          <div className='w-1/2 h-auto bg-[#ff0040]'></div>
          <div className='w-1/2 h-auto bg-[#fffb00]'></div>
        </div>
        <div className='w-full bg-pink-200 h-1/3 flex flex-row flex-nowrap gap-5 justify-between'>
          <div className='w-1/2 h-auto bg-[magenta]'></div>
          <div className='w-1/2 h-auto bg-[#ff9100]'></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CatagoryGrid