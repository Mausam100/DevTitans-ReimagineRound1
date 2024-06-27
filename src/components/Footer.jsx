import React from "react";

function Footer() {
  return (
    <>
      <footer className="p-5">
      <div className="mx-auto border-t pt-4 border-zinc-600 flex flex-col md:flex-row md:justify-between">
        <div className="flex-1">
          <div className="flex flex-col">
            <h2 className="text-3xl dg-medium">Contact us
              <span className="inline-block -translate-y-5 w-[0.25rem] h-[0.25rem] rounded-full bg-zinc-500 mx-2"></span>
            </h2>
            <p className="mt-2 text-4xl dg-light mr-0 sm:mr-10">This is the moment for us to connect and create amazing skincare solutions together.</p>
          </div>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex flex-col justify-between">
            <div className="flex-1 mb-4 md:mb-0 border-b border-zinc-600 pb-10">
              <h3 className="text-lg dg-medium tracking-none">email us here :</h3>
              <a href="mailto:help@beminimalist.co" className="text-[#1B1A1A] dg-normal text-xl">help@beminimalist.co</a>
            </div>
            <div className="flex-1 py-5">
              <div className="flex justify-start items-start flex-row">
                <h3 className="text-lg dg-bold tracking-none w-[20%]">About us</h3>
                <ul className="text-[#1b1s1a]">
                  <li><a href="#">Our values</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms & conditions</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Corporate Information</a></li>
                </ul>
              </div>
              <div className="flex-1 py-5 flex justify-start items-start flex-row">
                <h3 className="text-lg dg-bold tracking-none w-[20%]">Quick Links</h3>
                <ul className="text-[#1b1s1a]">
                  <li><a href="#">Knowledge</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Return & refund Policy</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Download App</a></li>
                </ul>
              </div>
              <div className="flex-1 py-5 flex justify-start items-start flex-row">
                <h3 className="text-lg dg-bold tracking-none w-[20%]">Follow</h3>
                <ul className="text-[#1b1s1a]">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">YouTube</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-2 border-zinc-600 flex justify-between items-center relative gap-3">
      <p>Copyright © 2024</p>
      <p className="dg-bold hidden sm:inline-block absolute left-1/2 transform -translate-x-1/2">Minimalist</p>
      <div className="flex flex-row sm:flex-row gap-1 sm:gap-2">
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>

    </footer>
    </>
  );
}

export default Footer;
