'use client';

import React, { Suspense, useRef, useState, useEffect, useMemo, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, ContactShadows, Text, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function CanvasLoader() {
  const { progress } = useProgress();
  if (progress === 100) return null;
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-500">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
        <span className="text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
          CALIBRATING 3D FLEET MODEL • {Math.round(progress)}%
        </span>
      </div>
      <div className="w-64 h-1.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
        <div 
          className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 shadow-sm"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-3 text-[11px] font-mono text-slate-400 tracking-wider">
        26FT DOCK-HIGH BOX TRUCK TELEMETRY
      </span>
    </div>
  );
}

class ModelErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white p-6 text-center">
          <div className="max-w-xs p-6 rounded-2xl bg-red-50 border border-red-200">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3 font-bold">!</div>
            <p className="text-sm font-bold text-slate-900">3D Fleet Render Offline</p>
            <p className="mt-1 text-xs text-slate-600">WebGL hardware acceleration required for 3D model visualization.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const UNIT_CONFIG = {
  white: {
    paint: '#F8FAFC',
    roughness: 0.44,
    metalness: 0.05,
    branding: '#0F172A',
  },
  blue: {
    paint: '#0D449C',
    roughness: 0.32,
    metalness: 0.28,
    branding: '#FFFFFF',
  },
};

function TruckBranding({ dimensions, selectedUnit }) {
  const boxX = dimensions.width / 2 + 0.008;
  const color = UNIT_CONFIG[selectedUnit].branding;

  return (
    <group>
      <Text
        position={[-boxX, 1.18, -0.65]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.18}
        letterSpacing={0.005}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight="900"
      >
        CARGO KINGS INC
      </Text>
      <Text
        position={[boxX, 1.18, -0.65]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.18}
        letterSpacing={0.005}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight="900"
      >
        CARGO KINGS INC
      </Text>
    </group>
  );
}

function Model({ activePreset, selectedUnit }) {
  const { scene } = useGLTF('/models/truck.glb');
  const modelRef = useRef();

  // Normalize scale and center deterministically so the truck is always perfectly framed
  const { normalizedScene, dimensions } = useMemo(() => {
    const clone = scene.clone(true);
    
    // Reset transforms to measure raw bounding box
    clone.position.set(0, 0, 0);
    clone.scale.set(1, 1, 1);
    clone.updateMatrixWorld(true);
    
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    
    // Target length in Three.js world units
    const targetLength = 4.8;
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scaleFactor = targetLength / maxDim;
    
    // Scale and position so bottom of wheels touches y = 0, and centered on X and Z
    clone.scale.setScalar(scaleFactor);
    clone.position.x = -center.x * scaleFactor;
    clone.position.y = -box.min.y * scaleFactor;
    clone.position.z = -center.z * scaleFactor;
    clone.updateMatrixWorld(true);

    // Set lighting-independent mesh flags once; unit paint is mutated below.
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const scaledBox = new THREE.Box3().setFromObject(clone);
    const scaledSize = new THREE.Vector3();
    scaledBox.getSize(scaledSize);

    return {
      normalizedScene: clone,
      dimensions: { width: scaledSize.x },
    };
  }, [scene]);

  useLayoutEffect(() => {
    const config = UNIT_CONFIG[selectedUnit];
    normalizedScene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const materials = Array.isArray(child.material) ? child.material : [child.material];
      const updatedMaterials = materials.map((sourceMaterial) => {
        const material = sourceMaterial.clone();
        const surfaceName = `${child.name} ${material.name}`.toLowerCase();
        const isProtected = /tire|wheel|rubber|glass|window|bumper|aluminum|trim|chrome|light|mirror/.test(surfaceName);
        const isPaint = !isProtected && /cab|body|cargo|box|paint|door|fender|hood/.test(surfaceName);

        if (isPaint && 'color' in material) {
          material.color.set(config.paint);
          material.roughness = config.roughness;
          material.metalness = config.metalness;
          material.needsUpdate = true;
        }
        return material;
      });
      child.material = Array.isArray(child.material) ? updatedMaterials : updatedMaterials[0];
    });
  }, [normalizedScene, selectedUnit]);

  useFrame((state, delta) => {
    if (!modelRef.current) return;
    
    let targetRotationY = -Math.PI / 4.2; // 3/4 perspective view
    if (activePreset === 'side') targetRotationY = -Math.PI / 2; // side cargo box
    if (activePreset === 'rear') targetRotationY = -Math.PI * 0.98; // rear rollup & liftgate
    if (activePreset === 'front') targetRotationY = 0.2; // front cab & grill

    modelRef.current.rotation.y = THREE.MathUtils.damp(
      modelRef.current.rotation.y,
      targetRotationY,
      3.5,
      delta
    );
  });

  return (
    <group ref={modelRef} position={[0, 0, 0]}>
      <primitive object={normalizedScene} />
      <TruckBranding dimensions={dimensions} selectedUnit={selectedUnit} />
    </group>
  );
}

useGLTF.preload('/models/truck.glb');

export default function CargoKingsCanvas({ activePreset = 'default', selectedUnit = 'white' }) {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6 text-slate-500 font-mono text-xs bg-slate-50 rounded-2xl border border-slate-200">
        [3D TELEMETRY OFFLINE: HARDWARE ACCELERATION DISABLED]
      </div>
    );
  }

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <CanvasLoader />
      <Canvas
        camera={{ position: [4.4, 2.1, 4.4], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        shadows
      >
        {/* Bright High-Intensity Studio Lighting */}
        <ambientLight intensity={1.5} />
        
        {/* Primary Sun / Key Light */}
        <directionalLight 
          position={[8, 14, 8]} 
          intensity={2.4} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={25}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          shadow-bias={-0.0001}
        />
        
        {/* Fill, Top & Rim Lighting */}
        <directionalLight position={[-8, 10, -8]} intensity={1.3} color="#FFFFFF" />
        <directionalLight position={[0, -6, 0]} intensity={0.4} color="#FFF1F2" />
        <directionalLight position={[0, 8, 0]} intensity={1.0} />
        <pointLight position={[0, 3, 5]} intensity={0.8} color="#FFFFFF" />
        <hemisphereLight skyColor="#FFFFFF" groundColor="#F8FAFC" intensity={0.9} />

        <ModelErrorBoundary>
          <Suspense fallback={null}>
            <Model activePreset={activePreset} selectedUnit={selectedUnit} />
            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.4}
              scale={10}
              blur={2.0}
              far={3.0}
              color="#200505"
            />
          </Suspense>
        </ModelErrorBoundary>

        <OrbitControls
          enableZoom={true}
          minDistance={2.5}
          maxDistance={9.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.02}
          minPolarAngle={Math.PI / 8}
          target={[0, 0.88, 0]}
          enableDamping={true}
          dampingFactor={0.06}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN
          }}
        />
      </Canvas>
    </div>
  );
}
