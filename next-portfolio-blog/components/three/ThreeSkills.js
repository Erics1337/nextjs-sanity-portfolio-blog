import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react";
// import { Html } from "drei";
import Model from './Scene'


const Lights = () => {
  return (
    <>
    <ambientLight intensity={10.3} />
    <directionalLight position={[10,10,5]} intensity={10.5} />
    <spotLight intensity={1} position={[1000,0,0]} />
    </>
  )
}


const ThreeSkills = () => {
  return (
    <>
      <Canvas className='h-10' camera={{ position: [0, 0.7, 2] }}>
      <Suspense fallback={null}>
        <Lights />
              <Model modelPath={'droid/scene.gltf'} />
      </Suspense>
      </Canvas>

    </>
  );
}

export default ThreeSkills;
