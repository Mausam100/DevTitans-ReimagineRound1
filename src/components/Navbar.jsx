import React from 'react'
import { IoMenu, IoSearch } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import Logo from '../assets/icons/logo.png'

const Navbar = () => {
  return (
    <>
    <div className='bg-black text-white'>
      <h2 className=' py-2 pl-4 text-lg sm:text-center'>
        <span className=' font-semibold text-lg tracking-wide'>LUCKY OFFER : </span>
          Buy 2 Get An Invisible Sunscreen FREE {`:)`} 
          <span className=' font-bold text-xl sm:pl-4 md:pl-4 tracking-wide'>Shop NOW!</span>
          </h2>
    </div>
     <nav className='flex justify-between px-4 pt-3 items-center'>
       <div className='flex gap-6'>
        <IoMenu className='text-2xl' />
        <IoSearch className='text-2xl hidden sm:block md:hidden' />

        </div> 
       <div><img className=' w-32' src={Logo} alt="logo" /></div> 
       <div className='flex gap-6'>
       <LuUser className=' text-2xl' />
        <CgShoppingCart className='text-2xl hidden sm:block md:hidden' /> </div> 
     </nav>
    </>
  )
}

export default Navbar