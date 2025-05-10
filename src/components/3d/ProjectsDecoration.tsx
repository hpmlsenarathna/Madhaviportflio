// ProjectsDecoration.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

function FloatingSpheres() {
  return (
    <group>
      <Float speed={1.5} rotationIntensity={1.0} floatIntensity={1.0}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <MeshDistortMaterial
            attach="material"
            color="#33C3F0"
            speed={1.5}
            distort={0.3}
          />
        </mesh>
      </Float>

      <Float speed={2.0} rotationIntensity={1.5} floatIntensity={0.8}>
        <mesh position={[0, 0, -1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial
            attach="material"
            color="#4ECDC4"
            speed={1.5}
            distort={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[2, 0, 1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <MeshDistortMaterial
            attach="material"
            color="#403E43"
            speed={1.5}
            distort={0.4}
          />
        </mesh>
      </Float>
    </group>
  );
}

const ProjectsDecoration: React.FC = () => {
  return (
    <div className="h-40 w-full mb-8 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
};

export default ProjectsDecoration;
