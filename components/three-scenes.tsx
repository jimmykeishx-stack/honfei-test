"use client";

import { Float, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Steam() {
  const points = useMemo(() => {
    return Array.from({ length: 34 }, (_, i) => ({
      x: (Math.random() - 0.5) * 0.8,
      y: i * 0.075,
      z: (Math.random() - 0.5) * 0.5
    }));
  }, []);

  return (
    <group position={[0, 0.5, 0]}>
      {points.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.018 + index * 0.0008, 8, 8]} />
          <meshBasicMaterial color="#f5f1e8" transparent opacity={Math.max(0.03, 0.2 - index * 0.004)} />
        </mesh>
      ))}
    </group>
  );
}

function TeaCup() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.28}>
      <group ref={group} scale={1.15} rotation={[0.08, 0.2, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.62, 0.46, 0.58, 64, 1, true]} />
          <meshPhysicalMaterial
            color="#f5f1e8"
            roughness={0.24}
            metalness={0.08}
            clearcoat={0.7}
            reflectivity={0.42}
          />
        </mesh>
        <mesh position={[0, -0.31, 0]} castShadow>
          <cylinderGeometry args={[0.46, 0.38, 0.06, 64]} />
          <meshPhysicalMaterial color="#c6a972" roughness={0.35} metalness={0.28} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.025, 64]} />
          <meshPhysicalMaterial color="#3d1b18" roughness={0.2} metalness={0.02} />
        </mesh>
        <mesh position={[0.64, 0.02, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <torusGeometry args={[0.22, 0.035, 16, 48, Math.PI * 1.45]} />
          <meshPhysicalMaterial color="#f5f1e8" roughness={0.24} clearcoat={0.6} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.38, 0]} receiveShadow>
          <torusGeometry args={[0.72, 0.035, 16, 80]} />
          <meshPhysicalMaterial color="#c6a972" roughness={0.36} metalness={0.22} />
        </mesh>
        <Steam />
      </group>
    </Float>
  );
}

function Dumplings() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.28;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.22}>
      <group ref={group}>
        {[0, 1, 2, 3, 4].map((item) => {
          const angle = (item / 5) * Math.PI * 2;
          return (
            <mesh key={item} position={[Math.cos(angle) * 0.46, 0, Math.sin(angle) * 0.28]} castShadow>
              <sphereGeometry args={[0.22, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
              <meshPhysicalMaterial color="#f5f1e8" roughness={0.52} clearcoat={0.18} />
            </mesh>
          );
        })}
        <mesh position={[0, -0.12, 0]} receiveShadow>
          <cylinderGeometry args={[0.9, 0.82, 0.1, 64]} />
          <meshPhysicalMaterial color="#c6a972" metalness={0.18} roughness={0.38} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ variant = "tea" }: { variant?: "tea" | "dumpling" }) {
  return (
    <Canvas shadows dpr={[1, 1.55]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <PerspectiveCamera makeDefault position={[0, 0.45, 4.2]} fov={38} />
      <ambientLight intensity={0.72} />
      <spotLight position={[2.8, 3.4, 3]} intensity={5.5} angle={0.42} penumbra={0.86} color="#f6c477" castShadow />
      <pointLight position={[-2.5, 0.8, 2]} intensity={1.25} color="#4b1e24" />
      <Suspense fallback={null}>
        {variant === "tea" ? <TeaCup /> : <Dumplings />}
        <Sparkles count={44} speed={0.18} opacity={0.32} color="#c6a972" size={1.4} scale={[4, 2, 4]} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.78, 0]} receiveShadow>
          <planeGeometry args={[6, 6]} />
          <MeshReflectorMaterial
            blur={[500, 140]}
            resolution={512}
            mixBlur={1.1}
            mixStrength={10}
            color="#090909"
            metalness={0.12}
            roughness={0.8}
            mirror={0.25}
          />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.28} maxPolarAngle={Math.PI / 1.9} minPolarAngle={Math.PI / 2.6} />
    </Canvas>
  );
}

export function HeroThree() {
  return <Scene variant="tea" />;
}

export function DishThree() {
  return <Scene variant="dumpling" />;
}
