import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellingMarquee from "./components/BestsellingMarquee";
import BestSelling from "./components/BestSelling";
import NewLaunchesMarquee from "./components/NewLaunchesMarqee"
import NewLaunches from "./components/NewLaunches";
import ShoppingMarquee from "./components/ShoppingMarquee"
import CatagoryGrid from "./components/CatagoryGrid";
import Footer from "./components/Footer";
import Animtext from "./components/Animtext";
import Cantdoubt from "./components/Cantdoubt";
import DownloadApp from "./components/DownloadApp";
import ConcernMarquee from "./components/ConcernMarquee";

function App() {
  return (
    <div className=" w-screen h-auto ">
      <div className="2xl:flex 2xl:justify-center ">
        <main className="2xl:w-[1440px] bg-white 2xl:border-2 2xl:rounded-3xl border-black mx-auto relative overflow-y-scroll overflow-x-hidden body-scroll dg-normal">
          <Navbar />
          <Hero />
          <Animtext />
          <ConcernMarquee />
          <Cantdoubt />
          <BestSellingMarquee />
          <BestSelling />
          <NewLaunchesMarquee />
          <NewLaunches />
          <DownloadApp />
          <ShoppingMarquee />
          <CatagoryGrid />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;