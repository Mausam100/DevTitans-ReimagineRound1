import React from "react";
import Footerimg from '../assets/images/footerimg.png'

function Footer() {
  return (
    <>
      <footer className="w-full h-auto my-10 border-t-2 flex flex-col p-10">
        <div className="info-section flex flex-col sm:flex-row justify-start items-start gap-14 sm:gap-5">

          <div className="left w-full sm:w-1/2 lg:w-2/3 flex flex-col lg:flex-row items-start justify-start gap-10">

            <div className="lg:w-1/2 h-auto hidden sm:block order-last lg:order-first bg-yellow-200">
              <img className="min-w-80 aspect-h-9/16 object-cover" src={Footerimg} alt="" />
            </div>

            <div className="lg:w-1/2 flex flex-col">
              <h2 className="text-3xl dg-medium">
                Contact us
                <span className="inline-block -translate-y-5 w-[0.25rem] h-[0.25rem] rounded-full bg-zinc-500 mx-2"></span>
              </h2>
              <p className="mt-2 text-4xl dg-light mr-0 sm:mr-10">
                This is the moment for us to connect and create amazing skincare
                solutions together.
              </p>
            </div>
          </div>

          <div className="right w-full sm:w-1/2 lg:w-1/3">
            <div className="flex flex-col justify-between gap-4">
                  <div className="flex-1 mb-4 md:mb-0 border-b border-zinc-600">
                    <h3 className="text-lg dg-medium tracking-none">
                      email us here :
                    </h3>
                    <a
                      href="mailto:help@beminimalist.co"
                      className="text-[#1B1A1A] dg-normal text-xl"
                    >
                      help@beminimalist.co
                    </a>
                  </div>
                  <div className="flex-1 ">
                    <div className="flex justify-start items-start flex-row gap-10">
                      <h3 className="text-lg dg-bold tracking-none w-[20%]">
                        About us
                      </h3>
                      <ul className="text-[#1b1s1a]">
                        <li>
                          <a href="#">Our values</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                        <li>
                          <a href="#">Terms & conditions</a>
                        </li>
                        <li>
                          <a href="#">Disclaimer</a>
                        </li>
                        <li>
                          <a href="#">Corporate Information</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1 py-5 flex justify-start items-start flex-row gap-10">
                      <h3 className="text-lg dg-bold tracking-none w-[20%] ">
                        Quick Links
                      </h3>
                      <ul className="text-[#1b1s1a]">
                        <li>
                          <a href="#">Knowledge</a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                        <li>
                          <a href="#">Return & refund Policy</a>
                        </li>
                        <li>
                          <a href="#">Track Order</a>
                        </li>
                        <li>
                          <a href="#">Download App</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1 py-5 flex justify-start items-start flex-row gap-10">
                      <h3 className="text-lg dg-bold tracking-none w-[20%]">
                        Follow
                      </h3>
                      <ul className="text-[#1b1s1a]">
                        <li>
                          <a href="#">Facebook</a>
                        </li>
                        <li>
                          <a href="#">Instagram</a>
                        </li>
                        <li>
                          <a href="#">Twitter</a>
                        </li>
                        <li>
                          <a href="#">LinkedIn</a>
                        </li>
                        <li>
                          <a href="#">YouTube</a>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>

        </div>


        <div className="footnote-section border-t-2">
        <div className="py-2 flex justify-between items-center relative gap-3">
          <p className="flex flex-col sm:flex-row leading-snug ">Copyright <span>© 2024</span></p>
          <p className="dg-bold sm:inline-block">
            Minimalist
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 leading-none">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
