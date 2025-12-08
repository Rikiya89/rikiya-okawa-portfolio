"use client";

import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sparkles } from "@react-three/drei";
import { AdditiveBlending } from "three";
// Import the Mesh type from 'three' for correct typings
import { Mesh } from "three";
import * as random from "maath/random";

const StarBackground = (props: any) => {
  // Layered starfields for depth
  const refBack = useRef<Mesh>(null);
  const refMid = useRef<Mesh>(null);
  const refFore = useRef<Mesh>(null);

  const [back] = useState(() => {
    const data = new Float32Array(3000);
    random.inSphere(data, { radius: 1.25 });
    return data;
  });
  const [mid] = useState(() => {
    const data = new Float32Array(2001);
    random.inSphere(data, { radius: 1.15 });
    return data;
  });
  const [fore] = useState(() => {
    const data = new Float32Array(702);
    random.inSphere(data, { radius: 1.05 });
    return data;
  });

  useFrame((_, delta) => {
    if (refBack.current) {
      refBack.current.rotation.x -= delta / 20;
      refBack.current.rotation.y -= delta / 30;
    }
    if (refMid.current) {
      refMid.current.rotation.x -= delta / 12;
      refMid.current.rotation.y -= delta / 18;
    }
    if (refFore.current) {
      refFore.current.rotation.x -= delta / 8;
      refFore.current.rotation.y -= delta / 12;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      {/* Background faint stars */}
      <Points ref={refBack} positions={back} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="rgba(255,255,255,0.35)"
          size={0.0018}
          sizeAttenuation
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>

      {/* Mid layer */}
      <Points ref={refMid} positions={mid} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="rgba(255,255,255,0.7)"
          size={0.0026}
          sizeAttenuation
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>

      {/* Foreground brighter stars */}
      <Points ref={refFore} positions={fore} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#9cb2ff"
          size={0.0048}
          sizeAttenuation
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>

      {/* Subtle sparkles for life */}
      <Sparkles count={28} scale={1.6} size={2.4} speed={0.22} opacity={0.55} color="#c9b7ff" />
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
