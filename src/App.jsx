import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import ProductList from './components/Products/ProductList';
function App() {
  return (
    <>
    <main className='h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll'>
      <Navbar/>
      <Hero/>
      {/* <Marquee/> */}
    {/* <ProductList /> */}
    </main>
    </>
  )
}

export default App
