import React from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellingMarquee from "./components/BestsellingMarquee";
import BestSelling from "./components/BestSelling";
import NewLaunchesMarquee from "./components/NewLaunchesMarqee";
import NewLaunches from "./components/NewLaunches";
import ShoppingMarquee from "./components/ShoppingMarquee";
import CatagoryGrid from "./components/CatagoryGrid";
import Footer from "./components/Footer";
import Animtext from "./components/Animtext";
import Cantdoubt from "./components/Cantdoubt";
import DownloadApp from "./components/DownloadApp";
import ConcernMarquee from "./components/ConcernMarquee";
import OfferMarquee from "./components/OfferMarquee";
import Testimonials from "./components/Testimonials";
import LocomotiveScroll from 'locomotive-scroll';
import Video from './components/Video';
import MouseFollower from './components/MouseFollower';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <OfferMarquee />
      <MouseFollower />
      <div className="2xl:flex 2xl:justify-center 2xl: items-start">
        <main className="2xl:w-[1440px] bg-white mx-auto relative overflow-y-scroll overflow-x-hidden dg-normal">
          <Navbar />
          <Hero />
          <Animtext />
          <Video />
          <ConcernMarquee />
          <Cantdoubt />
          <BestSellingMarquee />
          <BestSelling />
          <NewLaunchesMarquee />
          <NewLaunches />
          <ShoppingMarquee />
          <CatagoryGrid />
          <Testimonials />
          <DownloadApp />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;