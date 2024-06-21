import React from 'react'
import Proofcard from './Proofcard'
import transparency from '../assets/images/transparency.svg'

function Cantdoubt() {
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row'>
        <div className='triple-capcule scroll h-[20%]'></div>

        <div className='w-full h-[80%]'>
            <div className='leftdt flex flex-col bg-green-400 md:flex-row'>
                <h1 className='text-3xl uppercase'>CAN’T DOUBT OUR<br />PRODUCTS </h1>
                <div className='w-full bg-pink-200 p-5'>
                    <div className='flex flex-col md:flex-row bg-pink-200'>
                        <Proofcard/>
                        <Proofcard/>
                    </div>
                    <div className='flex flex-col md:flex-row'>

                        <div className='w-full h-24 bg-neutral-300'>
                            <div className='w-24 h-24 bg-zinc-400 rounded-3xl flex justify-center items-center'>
                                <img src={transparency} className='w-1/2 h-1/2' alt="" />
                            </div>
                            <div className='w-2/3 h-full flex flex-col'>
                                <h3>Total Transparency</h3>
                                <p>Full disclosure of ingredients used & their concentration</p>
                            </div>
                        </div>
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