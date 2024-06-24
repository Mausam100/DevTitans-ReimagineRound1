import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import BestSelling from "./components/BestSelling";
import NewLaunches from "./components/NewLaunches";
import CatagoryGrid from "./components/CatagoryGrid";
import Footer from "./components/Footer";
import Animtext from "./components/Animtext";
import Cantdoubt from "./components/Cantdoubt";
import DownloadApp from "./components/DownloadApp";
function App() {
  return (
    <>
      <main className="h-screen y-screen overflow-y-scroll overflow-x-hidden body-scroll dg-normal">
        <Navbar />
        <Hero />
        <Animtext />
        <Cantdoubt />
        <Marquee />
        <BestSelling />
        <NewLaunches />
        <DownloadApp />
        <Footer />
      </main>
    </>
  );
}

export default App;
