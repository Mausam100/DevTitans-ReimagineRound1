// components/AnimatedModel.jsx
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function AnimatedModel({ url }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    if (actions) {
      actions['YourAnimationName'].play();
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={nodes.YourModelNode} material={materials.YourMaterial} />
    </group>
  );
}

useGLTF.preload('/path/to/your/model.glb');

export default AnimatedModel;


-----------------------------------------

// App.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedModel from './components/AnimatedModel';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <AnimatedModel url="/path/to/your/model.glb" />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
