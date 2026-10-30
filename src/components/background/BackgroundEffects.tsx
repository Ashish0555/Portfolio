'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

// Optimized Particle Field - lighter version
function ParticleField({ count = 1500, color = 0x00d4aa, size = 1.2 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!pointsRef.current) return;
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 40 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      alphas[i] = 0.15 + Math.random() * 0.35;
      sizes[i] = 0.5 + Math.random() * 1.5;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.0015;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0015;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0015;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.userData.velocities = velocities;

    const material = new THREE.PointsMaterial({
      color,
      size: size,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
      vertexColors: false,
      depthWrite: false,
    });

    pointsRef.current.geometry = geometry;
    pointsRef.current.material = material;
    setInitialized(true);

    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [count, color, size]);

  useFrame(({ clock }) => {
    if (!pointsRef.current || !initialized) return;

    const geometry = pointsRef.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;
    const velocities = geometry.userData.velocities as Float32Array;

    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);

      if (dist > 120) {
        const radius = 40 + Math.random() * 80;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
    }

    geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.00005;
    pointsRef.current.rotation.x += 0.00002;
  });

  return <points ref={pointsRef} />;
}

// Simplified Neural Network - reduced complexity
function NeuralNetwork({ nodeCount = 50, connectionDistance = 12 }) {
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!nodesRef.current || !linesRef.current) return;

    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);
    const nodeVelocities = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 100;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      nodeSizes[i] = 1.5 + Math.random() * 2;
      nodeVelocities[i * 3] = (Math.random() - 0.5) * 0.015;
      nodeVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015;
      nodeVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));
    nodeGeometry.userData.velocities = nodeVelocities;

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 2.5,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
    });

    nodesRef.current.geometry = nodeGeometry;
    nodesRef.current.material = nodeMaterial;

    // Create connections (lines) - simplified
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodePositions[i * 3] - nodePositions[j * 3];
        const dy = nodePositions[i * 3 + 1] - nodePositions[j * 3 + 1];
        const dz = nodePositions[i * 3 + 2] - nodePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < connectionDistance) {
          linePositions.push(
            nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2],
            nodePositions[j * 3], nodePositions[j * 3 + 1], nodePositions[j * 3 + 2]
          );
          
          const alpha = 1 - dist / connectionDistance;
          lineColors.push(0, 0.6, 0.8, alpha * 0.2, 0, 0.6, 0.8, alpha * 0.2);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });

    linesRef.current.geometry = lineGeometry;
    linesRef.current.material = lineMaterial;

    setInitialized(true);

    return () => {
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, [nodeCount, connectionDistance]);

  useFrame(({ clock }) => {
    if (!nodesRef.current || !linesRef.current || !initialized) return;

    const nodeGeometry = nodesRef.current.geometry;
    const nodePositions = nodeGeometry.attributes.position.array as Float32Array;
    const nodeVelocities = nodeGeometry.userData.velocities as Float32Array;

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] += nodeVelocities[i * 3];
      nodePositions[i * 3 + 1] += nodeVelocities[i * 3 + 1];
      nodePositions[i * 3 + 2] += nodeVelocities[i * 3 + 2];

      for (let d = 0; d < 3; d++) {
        if (Math.abs(nodePositions[i * 3 + d]) > 60) {
          nodeVelocities[i * 3 + d] *= -1;
          nodePositions[i * 3 + d] = Math.sign(nodePositions[i * 3 + d]) * 60;
        }
      }
    }

    nodeGeometry.attributes.position.needsUpdate = true;
    nodesRef.current.rotation.y += 0.0001;
    linesRef.current.rotation.y += 0.0001;
  });

  return (
    <>
      <lineSegments ref={linesRef} />
      <points ref={nodesRef} />
    </>
  );
}

// Data Flow - simplified
function DataFlow() {
  const groupRef = useRef<THREE.Group>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!groupRef.current) return;

    const group = groupRef.current;
    const packetCount = 20;

    for (let i = 0; i < packetCount; i++) {
      const geometry = new THREE.SphereGeometry(0.25, 6, 6);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.1, 1, 0.6),
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(geometry, material);
      
      const pathIndex = i % 4;
      const progress = (i / packetCount) * Math.PI * 2;
      
      switch (pathIndex) {
        case 0:
          mesh.position.set(-50 + (progress / (Math.PI * 2)) * 100, -15, 0);
          break;
        case 1:
          mesh.position.set(-40 + Math.cos(progress) * 35, -25 + Math.sin(progress) * 25, 0);
          break;
        case 2:
          mesh.position.set(0, -40 + (progress / (Math.PI * 2)) * 80, 0);
          break;
        case 3:
          mesh.position.set(Math.sin(progress) * 40, Math.cos(progress * 2) * 25, Math.sin(progress) * 15);
          break;
      }
      
      mesh.userData = { pathIndex, progress, speed: 0.004 + Math.random() * 0.008 };
      group.add(mesh);
    }

    const pathMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00d4aa, 
      transparent: true, 
      opacity: 0.1 
    });
    
    const hGeo = new THREE.BufferGeometry();
    hGeo.setAttribute('position', new THREE.Float32BufferAttribute([-50, -15, 0, 50, -15, 0], 3));
    group.add(new THREE.Line(hGeo, pathMaterial));

    const vGeo = new THREE.BufferGeometry();
    vGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, -40, 0, 0, 40, 0], 3));
    group.add(new THREE.Line(vGeo, pathMaterial));

    setInitialized(true);

    return () => {
      group.clear();
    };
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current || !initialized) return;

    const group = groupRef.current;
    const time = clock.getElapsedTime();

    group.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.userData.pathIndex !== undefined) {
        const { pathIndex, progress, speed } = child.userData;
        const newProgress = (progress + speed * 60 * clock.getDelta()) % (Math.PI * 2);
        child.userData.progress = newProgress;

        switch (pathIndex) {
          case 0:
            child.position.x = -50 + (newProgress / (Math.PI * 2)) * 100;
            break;
          case 1:
            child.position.x = -40 + Math.cos(newProgress) * 35;
            child.position.y = -25 + Math.sin(newProgress) * 25;
            break;
          case 2:
            child.position.y = -40 + (newProgress / (Math.PI * 2)) * 80;
            break;
          case 3:
            child.position.x = Math.sin(newProgress) * 40;
            child.position.y = Math.cos(newProgress * 2) * 25;
            child.position.z = Math.sin(newProgress) * 15;
            break;
        }

        child.material.opacity = 0.35 + Math.sin(time * 2.5 + progress) * 0.35;
      }
    });
  });

  return <group ref={groupRef} />;
}

export function BackgroundEffects() {
  const [mode, setMode] = useState<'particles' | 'neural' | 'dataflow'>('particles');
  
  // Cycle through modes less frequently for performance
  useEffect(() => {
    const interval = setInterval(() => {
      setMode(prev => {
        if (prev === 'particles') return 'neural';
        if (prev === 'neural') return 'dataflow';
        return 'particles';
      });
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient - darker for better text contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#020610_0%,#08101e_50%,#0d1422_100%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Three.js canvas - reduced quality for performance */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 80], fov: 45 }}
          style={{ width: '100%', height: '100%', display: 'block' }}
          gl={{ antialias: false, alpha: true, preserveDrawingBuffer: false, powerPreference: 'high-performance' }}
          shadows={false}
          performance={{ min: 0.5, max: 1 }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[30, 30, 30]} intensity={0.2} />
          
          {mode === 'particles' && (
            <ParticleField count={1200} color={0x00d4aa} size={1} />
          )}
          
          {mode === 'neural' && (
            <NeuralNetwork nodeCount={40} connectionDistance={14} />
          )}
          
          {mode === 'dataflow' && (
            <DataFlow />
          )}
        </Canvas>
      </div>
      
      {/* Radial glow accents - more subtle */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/3 blur-[200px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary/3 blur-[200px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-tertiary/3 blur-[200px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
}

// Floating code snippets for hero - reduced count
export function FloatingCodeSnippets() {
  const snippets = [
    `async function processTransaction(tx) {
  const result = await db.transaction()
    .update(inventory)
    .set({ reserved: sql\`reserved + \${tx.qty}\` })
    .where(sql\`id = \${tx.itemId}\`)
    .execute();
  return result.rowCount > 0;
}`,
    `// RAG Pipeline with LangGraph
const graph = new StateGraph()
  .addNode("retrieve", hybridSearch)
  .addNode("verify", verifyCitations)
  .addNode("generate", generateAnswer)
  .addEdge("retrieve", "verify")
  .addEdge("verify", "generate");`,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {snippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute code-block font-mono text-[10px] leading-relaxed opacity-0"
          style={{
            top: `${15 + i * 30}%`,
            left: `${5 + (i % 2) * 20}%`,
            animation: `float 10s ease-in-out ${i * 3}s infinite, code-fade 15s ease-in-out ${i * 4}s infinite`,
            maxWidth: '280px',
          }}
        >
          <pre className="text-accent-primary/40 whitespace-pre-wrap">{snippet}</pre>
        </div>
      ))}
      <style jsx global>{`
        @keyframes code-fade {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.95); }
          15%, 85% { opacity: 0.25; transform: translateY(-8px) scale(1); }
        }
      `}</style>
    </div>
  );
}

// Scanline effect - removed for performance
export function Scanlines() {
  return null;
}