"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 15;

      // Violet to cyan gradient
      const t = Math.random();
      col[i3] = 0.4 + t * 0.2;     // R
      col[i3 + 1] = 0.2 + t * 0.5; // G
      col[i3 + 2] = 0.8 + t * 0.2; // B

      siz[i] = Math.random() * 3 + 0.5;
    }
    return [pos, col, siz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    // Gentle rotation
    mesh.current.rotation.y = time * 0.03;
    mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1;

    // Animate individual particles
    const posArray = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={group}>
      {/* Violet orb */}
      <mesh position={[-3, 1, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.08} />
      </mesh>
      {/* Cyan orb */}
      <mesh position={[3, -1, -3]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.06} />
      </mesh>
      {/* Emerald orb */}
      <mesh position={[0, 2, -4]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
        <FloatingOrbs />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
