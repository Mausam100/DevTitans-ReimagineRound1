import React from 'react'

function Video() {
  return (
    <>
    <div className='flex items-center overflow-hidden justify-center w-full h-auto' >
        <video className='rounded-xl w-3/4 md:w-1/2 h-auto aspect-auto object-cover overflow-hidden' src="/3d/render.mp4" autoPlay loop muted></video>
    </div>
    </>
  )
}

export default Video