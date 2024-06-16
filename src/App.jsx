import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductList from './components/ProductList';
function App() {
  return (
    <>
    <main className='h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll'>
      <Navbar/>
      <Hero/>
    <ProductList />
    </main>
    </>
  )
}

export default App
