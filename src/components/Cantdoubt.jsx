import React from 'react'
import Proofcard from './Proofcard'

function Cantdoubt() {
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row'>
        <div className='triple-capcule scroll h-[20%]'></div>

        <div className='w-full h-[80%]'>
            <div className='leftdt flex flex-col md:flex-row'>
                <h1 className='text-3xl uppercase'>CAN’T DOUBT OUR<br />PRODUCTS </h1>
                <div className='w-full p-5'>
                    <div className='flex flex-col md:flex-row'>
                        <Proofcard/>
                        <Proofcard/>
                    </div>
                    <div className='flex flex-col md:flex-row'>

                        <Proofcard/>
                        <Proofcard/>
                    </div>
                </div>
            </div>
            <div className='rightdt '></div>
        </div>
    </div>
  )
}

export default Cantdoubt