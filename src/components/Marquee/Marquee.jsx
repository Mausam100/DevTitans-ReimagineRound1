import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    gsap.to(marquee, {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: marquee,
        start: 'top top',
        end: 'bottom top',
        // markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap py-2 bg-gray-200">
      <div ref={marqueeRef} className="flex gap-4 text-2xl font-bold uppercase">
        <span>Best Selling</span>
        <span>Best Selling</span>
        <span>Best Selling</span>
        <span>Best Selling</span>
        <span>Best Selling</span>
      </div>
    </div>
  );
};

export default Marquee;
