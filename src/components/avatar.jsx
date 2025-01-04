import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleSystem({ isLoading, onTransitionComplete }) {
  const pointsRef = useRef(null);
  const targetPositions = useRef(null);
  const originalPositions = useRef(null);
  const animationProgress = useRef(0);
  const time = useRef(0);

  const particles = useMemo(() => {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const hexagonPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 0.8 + Math.random() * 0.2;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      // Calculate hexagon positions
      const sideIndex = Math.floor(i / (particleCount / 6));
      const t = (i % (particleCount / 6)) / (particleCount / 6);
      const angle = (sideIndex / 6) * Math.PI * 2;
      const nextAngle = ((sideIndex + 1) / 6) * Math.PI * 2;
      const hexRadius = 1.5;

      hexagonPositions[i * 3] =
        THREE.MathUtils.lerp(Math.cos(angle), Math.cos(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 1] =
        THREE.MathUtils.lerp(Math.sin(angle), Math.sin(nextAngle), t) *
        hexRadius;
      hexagonPositions[i * 3 + 2] = 0;

      // Orange color palette
      // const colorT = Math.random();
      // colors[i * 3] = 0.8 + 0.2 * colorT;
      // colors[i * 3 + 1] = 0.3 + 0.3 * colorT;
      // colors[i * 3 + 2] = 0.0 + 0.2 * colorT;
      // 255,102,0
      colors[i * 3] = 17 / 255; // Red (255)
      colors[i * 3 + 1] = 24 / 255; // Green (102)
      colors[i * 3 + 2] = 39 / 255; // Blue (0)
      // rgb(17,24,39)
    }

    originalPositions.current = positions.slice();
    targetPositions.current = hexagonPositions;

    return { positions, colors, particleCount };
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      time.current += 0.01;
      const positions = pointsRef.current.geometry.attributes.position.array;

      if (isLoading) {
        animationProgress.current += (1 - animationProgress.current) * 0.05;
      } else {
        animationProgress.current += (0 - animationProgress.current) * 0.05;
      }

      for (let i = 0; i < particles.particleCount; i++) {
        const idx = i * 3;
        const originalX = originalPositions.current[idx];
        const originalY = originalPositions.current[idx + 1];
        const originalZ = originalPositions.current[idx + 2];

        const targetX = targetPositions.current[idx];
        const targetY = targetPositions.current[idx + 1];
        const targetZ = targetPositions.current[idx + 2];

        positions[idx] = THREE.MathUtils.lerp(
          originalX,
          targetX,
          animationProgress.current
        );
        positions[idx + 1] = THREE.MathUtils.lerp(
          originalY,
          targetY,
          animationProgress.current
        );
        positions[idx + 2] = THREE.MathUtils.lerp(
          originalZ,
          targetZ,
          animationProgress.current
        );
      }

      pointsRef.current.rotation.z += 0.005;
      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      if (animationProgress.current > 0.99 && isLoading) {
        onTransitionComplete();
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ChatScreen({ closeChat }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-20 flex items-center justify-center">
      <div className="bg-white w-3/4 h-1/2 p-6 rounded-lg shadow-lg flex flex-col">
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={closeChat}
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat Screen</h2>
        <div className="bg-white p-4 rounded mb-4 h-full overflow-y-auto">
          <p className="text-gray-700">Welcome to the chat!</p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ParticleAvatar() {
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleTransitionComplete = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    console.log("showChat : " , showChat  )
    setShowChat(false);
    setIsLoading(false)
  };

  return (
    <>
      <div className="fixed w-[200px] h-[200px] bottom-0 right-0 z-10">
        <div
          className="relative w-full h-full flex items-center justify-center"
          onClick={() => setIsLoading(true)}
        >
          {!showChat && (
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <ParticleSystem
                isLoading={isLoading}
                onTransitionComplete={handleTransitionComplete}
              />
            </Canvas>
          )}
        </div>
      </div>
      {showChat && 
      <div className="">
<ChatScreen closeChat={closeChat} />
      </div>
      }
    </>
  );
}

