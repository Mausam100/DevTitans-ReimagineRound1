// Model.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

const Model = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const meshRef = useRef();

  // Debug: Log the loaded GLTF to check if it is loaded correctly
  useEffect(() => {
    console.log(gltf);
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} ref={meshRef} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Model;

