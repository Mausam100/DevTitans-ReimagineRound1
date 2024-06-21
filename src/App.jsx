import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductList from './components/ProductList';
import ProductList2 from './components/ProductList2';
import CatagoryGrid from './components/CatagoryGrid';
import Footer from './components/Footer';
import Animtext from './components/Animtext';
import Cantdoubt from './components/Cantdoubt';
function App() {
  return (
    <>
    <main className='h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll dg-normal'>
      <Navbar/>
      <Hero/>
      <Animtext/>
      <Cantdoubt/>
      <Marquee/>
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
