import React, { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";

function MySphere({ classname }) {
  return (
    <div className={`w-full h-full ${classname}`}>
      <div className="w-100 h-100 sm:w-80 sm:h-80 md:w-full md:h-full mx-auto">
        <Canvas 
          camera={{ position: [0, 0, 3.5], fov: 60 }}
          style={{ width: '100%', height: '100%' }}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.3} />
          <DistortedSphere />
        </Canvas>
      </div>
    </div>
  );
}

function DistortedSphere() {
  const meshRef = useRef();
  const geometryRef = useRef();

  const noise4D = useMemo(() => createNoise4D(), []);
  const radius = 1;
  const [hover, setHover] = useState(false);
  const hoverTransition = useRef(0);
  const timeRef = useRef(0);
  
  // Performance optimization: reduce geometry complexity
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(radius, 60, 60); // Reduced from 80,80
  }, []);

  // Store original positions
  const originalPositions = useMemo(
    () => geometry.attributes.position.array.slice(),
    [geometry]
  );

  // Pre-calculate random offsets and velocities
  const randomData = useMemo(() => {
    const posCount = originalPositions.length;
    const offsets = new Float32Array(posCount);
    const velocities = new Float32Array(posCount);
    const baseVelocities = new Float32Array(posCount);
    
    for (let i = 0; i < posCount; i += 3) {
      offsets[i] = (Math.random() - 0.5) * 0.1;
      offsets[i + 1] = (Math.random() - 0.5) * 0.1;
      offsets[i + 2] = (Math.random() - 0.5) * 0.1;
      
      baseVelocities[i] = (Math.random() - 0.5) * 0.002;
      baseVelocities[i + 1] = (Math.random() - 0.5) * 0.002;
      baseVelocities[i + 2] = (Math.random() - 0.5) * 0.002;
    }
    
    return { offsets, velocities, baseVelocities };
  }, [originalPositions.length]);

  // Optimize hover handlers to prevent unnecessary re-renders
  const handlePointerOver = useCallback(() => setHover(true), []);
  const handlePointerOut = useCallback(() => setHover(false), []);

  // Frame counter for performance throttling
  const frameCounter = useRef(0);

  // Animation loop with optimizations
  useFrame(() => {
    if (!geometryRef.current) return;
    
    frameCounter.current++;
    timeRef.current += 0.008;

    // Smooth hover transition with optimized easing
    const transitionSpeed = hover ? 0.03 : 0.02;
    const targetTransition = hover ? 1 : 0;
    hoverTransition.current += (targetTransition - hoverTransition.current) * transitionSpeed;

    // Skip expensive calculations on some frames for better performance
    const shouldUpdate = frameCounter.current % 2 === 0 || Math.abs(hoverTransition.current - targetTransition) > 0.01;
    
    if (!shouldUpdate) {
      // Still update rotation for smooth animation
      meshRef.current.rotation.y += 0.002 * (1 - hoverTransition.current * 0.8);
      meshRef.current.rotation.x += 0.001 * (1 - hoverTransition.current * 0.9);
      return;
    }

    const positions = geometryRef.current.attributes.position.array;
    const { offsets, velocities, baseVelocities } = randomData;

    // Optimize the main loop
    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      // Reduce velocity updates when hovering for smoother performance
      const velocityMultiplier = 1 - hoverTransition.current * 0.7;
      
      velocities[i] = baseVelocities[i] + (Math.random() - 0.5) * 0.0001 * velocityMultiplier;
      velocities[i + 1] = baseVelocities[i + 1] + (Math.random() - 0.5) * 0.0001 * velocityMultiplier;
      velocities[i + 2] = baseVelocities[i + 2] + (Math.random() - 0.5) * 0.0001 * velocityMultiplier;

      velocities[i] *= 0.99;
      velocities[i + 1] *= 0.99;
      velocities[i + 2] *= 0.99;

      offsets[i] += velocities[i];
      offsets[i + 1] += velocities[i + 1];
      offsets[i + 2] += velocities[i + 2];

      // CRITICAL FIX: Constrain offsets to prevent unlimited growth
      const maxOffset = 0.15;
      offsets[i] = Math.max(-maxOffset, Math.min(maxOffset, offsets[i]));
      offsets[i + 1] = Math.max(-maxOffset, Math.min(maxOffset, offsets[i + 1]));
      offsets[i + 2] = Math.max(-maxOffset, Math.min(maxOffset, offsets[i + 2]));

      // Optimize noise calculations
      const noiseScale1 = 0.8;
      const noiseScale2 = 1.2;
      const timeScale = timeRef.current * 0.4;
      
      const noise1 = noise4D(ox * noiseScale1, oy * noiseScale1, oz * noiseScale1, timeScale);
      const noise2 = noise4D(ox * noiseScale2, oy * noiseScale2, oz * noiseScale2, timeScale * 1.25);
      
      // Scale distortion based on hover state to maintain consistent size
      const distortionAmount = (0.2 * noise1 + 0.1 * noise2) * (1 - hoverTransition.current * 0.8);

      // Optimize normalization
      const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const invLen = 1 / len;
      
      const normalizedX = ox * invLen;
      const normalizedY = oy * invLen;
      const normalizedZ = oz * invLen;

      const chaoticInfluence = 1 - hoverTransition.current;
      
      // Calculate final position with consistent radius
      const finalRadius = radius + distortionAmount;
      const randomInfluence = chaoticInfluence * (1 - hoverTransition.current * 0.5);
      
      positions[i] = normalizedX * finalRadius + offsets[i] * randomInfluence;
      positions[i + 1] = normalizedY * finalRadius + offsets[i + 1] * randomInfluence;
      positions[i + 2] = normalizedZ * finalRadius + offsets[i + 2] * randomInfluence;
    }

    geometryRef.current.attributes.position.needsUpdate = true;
    
    // Smooth rotation updates
    meshRef.current.rotation.y += 0.002 * (1 - hoverTransition.current * 0.8);
    meshRef.current.rotation.x += 0.001 * (1 - hoverTransition.current * 0.9);
  });

  return (
    <points
      ref={meshRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[radius, 60, 60]} ref={geometryRef} />
      <pointsMaterial
        size={0.015}
        color="black"
        transparent
        opacity={0.8}
        sizeAttenuation
        // Performance optimization
        depthWrite={false}
      />
    </points>
  );
}

export default MySphere;