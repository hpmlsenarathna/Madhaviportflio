import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';

function CubeModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshWobbleMaterial 
          factor={0.3} 
          speed={1}
          attach="material"
          color="#33C3F0" // Color passed as a prop
        />
      </mesh>
    </Float>
  );
}

const ThreeScene: React.FC = () => {
  return (
    <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <CubeModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;