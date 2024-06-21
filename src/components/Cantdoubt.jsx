import React from 'react'

function Cantdoubt() {
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row'>
        <div className='triple-capcule scroll h-[20%]'></div>

        <div className='w-full h-[80%]'>
            <div className='leftdt flex flex-col bg-green-400 md:flex-row'>
                <h1 className='text-3xl uppercase pl-10'>CAN’T DOUBT OUR<br />PRODUCTS </h1>
                <div className='w-full bg-pink-200'>
                    <div className='flex flex-col md:flex-row bg-pink-200'>
                        {/* cards*2 */}
                        <div className='w-full h-auto bg-green-300'></div>
                        <div className='w-full h-auto bg-green-300'></div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        {/* cards*2 */}
                    </div>
                </div>
            </div>
            <div className='rightdt '></div>
        </div>
    </div>
  )
}

export default Cantdoubt