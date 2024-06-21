import React from 'react'
import Proofcard from './Proofcard'

function Cantdoubt() {
  return (
    <div className=" px-4 w-screen h-screen flex flex-col md:flex-row">
      <div className="triple-capcule scroll h-[20%]"></div>

        <div className='w-full h-[80%] p-5'>
            <div className='leftdt flex flex-col md:flex-row'>
                <h1 className='text-3xl uppercase mb-5'>CAN’T DOUBT OUR<br />PRODUCTS </h1>
                <div className='w-full flex gap-5 flex-col'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <Proofcard/>
                        <Proofcard/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>

                        <Proofcard/>
                        <Proofcard/>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="rightdt "></div>
      </div>
    </div>
  );
}

export default Cantdoubt;
