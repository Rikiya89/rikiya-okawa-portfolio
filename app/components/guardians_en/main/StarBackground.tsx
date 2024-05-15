"use client";

import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { AdditiveBlending } from 'three';
// Import the Mesh type from 'three' for correct typings
import { Mesh } from 'three';
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  // Properly type the ref as a Mesh
  const ref = useRef<Mesh>(null);
  const [sphere] = useState(() => {
    const data = new Float32Array(5000);
    random.inSphere(data, { radius: 1.2 });
    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="rgba(115, 111, 240,0.8)"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
