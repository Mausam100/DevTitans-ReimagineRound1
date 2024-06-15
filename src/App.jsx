import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ProductList from './components/ProductList';
function App() {
  return (
    <main className='h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll'>
    <Navbar/>
    <Hero/>
      <Marquee />
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-left text-lg font-bold">
          <p>OUR</p>
          <p>BEST SELLING</p>
        </div>
        <div className="text-right">
          <a href="#" className="text-lg text-gray-500">SEE ALL →</a>
        </div>
      </div>
      <div className="w-screen h-1/2"></div>
      <ProductList />
      <div className="w-screen h-1/2"></div>

    </main>
  )
}

export default App
