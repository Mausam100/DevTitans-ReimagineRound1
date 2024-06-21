import React from 'react'

function Proofcard() {
  return (
    <div>
        <div className="w-full pt-6 flex items-center gap-4">
            <div className=" p-4 w-20 rounded-3xl bg-[#E7E8EA]">
              <img src={transparency} alt="" />
            </div>
            <div>
              <h1 className=" text-2xl font-semibold">Total Transparency</h1>
              <p className=" leading-tight">Full disclosure of ingredients <br /> used & their concentration</p>
            </div>
          </div>
    </div>
  )
}

export default Proofcard