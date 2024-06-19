import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import ProductList from './components/Products/ProductList';
import ProductList2 from './components/Products/ProductList2';
// import CatagoryGrid from './components/Catagory/CatagoryGrid';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <main className='h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll'>
      {/* <Navbar/>
      <Hero/> */}
      {/* <Marquee/> */}
      <div className='w-full h-20 bg-white m-6'></div>
    <ProductList />
    <div className='w-full h-20 bg-white m-6'></div>
    <ProductList2 />
    <div className='w-full h-20 bg-white m-6'></div>
    <Footer />
    </main>
    </>
  )
}

export default App
