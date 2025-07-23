"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";

// Performance detection
const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false;
  const connection = (navigator as any).connection;
  return connection?.effectiveType === 'slow-2g' || 
         connection?.effectiveType === '2g' ||
         window.innerWidth < 768;
};

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => {
    const particleCount = isLowPerformanceDevice() ? 1000 : 2000;
    return random.inSphere(new Float32Array(particleCount), { radius: 1.2 });
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Delay rendering to prioritize critical content
    const timer = setTimeout(() => setShouldRender(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) {
    return <div className="w-full h-auto fixed inset-0 -z-10 bg-[#030014]" />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
