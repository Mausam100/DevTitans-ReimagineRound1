import React from "react";

function Footer() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[25vw] w-screen md:h-full h-full bg-sky-200"></div>
        <div className="w-[75vw] h-full flex flex-col md:flex-col items-center justify-between">
          <div className="flex flex-col md:flex-row bg-orange-500 md:h-[90%] md:w-full">
            {/* <div className="green1 bg-green-600 w-1/2 h-full">
                  <h3 className='bg-pink-200 relative'>Contact us
                    <span className='absolute left-20 w-[5px] h-[5px] bg-black rounded-full'></span>
                  </h3>
                  <p>

                  </p>
                </div>
                <div className="green2 bg-green-800 w-1/2 h-full">
                </div> */}
          </div>
          <div className="orange2 bg-orange-200 w-full h-[10%]"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
