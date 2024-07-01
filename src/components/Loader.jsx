// Loader.js
import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return <Html center><span className="text-white">{progress} % loaded</span></Html>;
};

export default Loader;
