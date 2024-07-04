import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const xprev = useRef(0);
  const yprev = useRef(0);
  const timeout = useRef(null);

  const xScaleFactor = 0.10;
  const yScaleFactor = 0.10;
  const minScale = 0.8;
  const maxScale = 1.2;

  useEffect(() => {
    const handleMouseMove = (e) => {
      clearTimeout(timeout.current);

      const xdiff = e.clientX - xprev.current;
      const ydiff = e.clientY - yprev.current;

      const xscale = gsap.utils.clamp(minScale, maxScale, 1 + xdiff * xScaleFactor);
      const yscale = gsap.utils.clamp(minScale, maxScale, 1 + ydiff * yScaleFactor);

      setScale({ x: xscale, y: yscale });
      setPosition({ x: e.clientX, y: e.clientY });

      xprev.current = e.clientX;
      yprev.current = e.clientY;

      timeout.current = setTimeout(() => {
        setScale({ x: 1, y: 1 });
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div
      id="minicircle"
      className="hidden lg:block fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[99999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale.x}, ${scale.y})`,
        transition: 'cubic-bezier(0.19, 1, 0.22, 1).8s'
      }}
    ></div>
  );
};

export default MouseFollower;
