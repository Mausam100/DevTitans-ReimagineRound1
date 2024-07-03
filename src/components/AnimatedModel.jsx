// components/AnimatedModel.jsx
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedModel({ url }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      // Loop through all actions and set them to loop
      Object.keys(actions).forEach((key) => {
        const action = actions[key];
        action.setLoop(THREE.LoopRepeat);
        action.play();
      });
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      {Object.keys(nodes).map((key) => (
        <primitive key={key} object={nodes[key]} />
      ))}
    </group>
  );
}

useGLTF.preload('/3d/anim.gltf');

export default AnimatedModel;