'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Particle field background
function ParticleField({ count = 3000, color = 0x00d4aa, size = 1.5 }) {
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
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      alphas[i] = 0.1 + Math.random() * 0.4;
      sizes[i] = 0.5 + Math.random() * 2;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.userData.velocities = velocities;

    const material = new THREE.PointsMaterial({
      color,
      size: size,
      transparent: true,
      opacity: 0.6,
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
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      // Boundary check - wrap around
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];
      const dist = Math.sqrt(x * x + y * y + z * z);

      if (dist > 150) {
        const radius = 50 + Math.random() * 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
    }

    geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0001;
    pointsRef.current.rotation.x += 0.00005;
  });

  return (
    <points ref={pointsRef} />
  );
}

// Neural network connections
function NeuralNetwork({ nodeCount = 80, connectionDistance = 15 }) {
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!nodesRef.current || !linesRef.current) return;

    // Create nodes
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);
    const nodeVelocities = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      nodePositions[i * 3] = (Math.random() - 0.5) * 120;
      nodePositions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      nodePositions[i * 3 + 2] = (Math.random() - 0.5) * 120;
      nodeSizes[i] = 2 + Math.random() * 3;
      nodeVelocities[i * 3] = (Math.random() - 0.5) * 0.02;
      nodeVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      nodeVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));
    nodeGeometry.userData.velocities = nodeVelocities;

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 3,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
    });

    nodesRef.current.geometry = nodeGeometry;
    nodesRef.current.material = nodeMaterial;

    // Create connections (lines)
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
          lineColors.push(0, 0.8, 0.9, alpha * 0.3, 0, 0.8, 0.9, alpha * 0.3);
        }
      }
    }

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
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

      // Boundary check
      for (let d = 0; d < 3; d++) {
        if (Math.abs(nodePositions[i * 3 + d]) > 80) {
          nodeVelocities[i * 3 + d] *= -1;
          nodePositions[i * 3 + d] = Math.sign(nodePositions[i * 3 + d]) * 80;
        }
      }
    }

    nodeGeometry.attributes.position.needsUpdate = true;
    
    // Rebuild connections periodically (simplified - just rotate)
    nodesRef.current.rotation.y += 0.0002;
    linesRef.current.rotation.y += 0.0002;
  });

  return (
    <>
      <lineSegments ref={linesRef} />
      <points ref={nodesRef} />
    </>
  );
}

// Data flow visualization
function DataFlow() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!groupRef.current) return;

    const group = groupRef.current;
    const packetCount = 30;

    for (let i = 0; i < packetCount; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.1, 1, 0.6),
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position along paths
      const pathIndex = i % 5;
      const progress = (i / packetCount) * Math.PI * 2;
      
      switch (pathIndex) {
        case 0: // Horizontal
          mesh.position.set(-60 + (progress / (Math.PI * 2)) * 120, -20, 0);
          break;
        case 1: // Diagonal
          mesh.position.set(-50 + Math.cos(progress) * 40, -30 + Math.sin(progress) * 30, 0);
          break;
        case 2: // Vertical
          mesh.position.set(0, -50 + (progress / (Math.PI * 2)) * 100, 0);
          break;
        case 3: // Curve
          mesh.position.set(Math.sin(progress) * 50, Math.cos(progress * 2) * 30, Math.sin(progress) * 20);
          break;
        case 4: // Spiral
          const r = 10 + progress * 5;
          mesh.position.set(Math.cos(progress * 3) * r, Math.sin(progress * 3) * r, progress * 2);
          break;
      }
      
      mesh.userData = { pathIndex, progress, speed: 0.005 + Math.random() * 0.01 };
      group.add(mesh);
    }

    // Add path lines
    const pathMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00d4aa, 
      transparent: true, 
      opacity: 0.15 
    });
    
    // Horizontal path
    const hGeo = new THREE.BufferGeometry();
    hGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      -60, -20, 0, 60, -20, 0
    ], 3));
    group.add(new THREE.Line(hGeo, pathMaterial));

    // Vertical path
    const vGeo = new THREE.BufferGeometry();
    vGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      0, -50, 0, 0, 50, 0
    ], 3));
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
            child.position.x = -60 + (newProgress / (Math.PI * 2)) * 120;
            break;
          case 1:
            child.position.x = -50 + Math.cos(newProgress) * 40;
            child.position.y = -30 + Math.sin(newProgress) * 30;
            break;
          case 2:
            child.position.y = -50 + (newProgress / (Math.PI * 2)) * 100;
            break;
          case 3:
            child.position.x = Math.sin(newProgress) * 50;
            child.position.y = Math.cos(newProgress * 2) * 30;
            child.position.z = Math.sin(newProgress) * 20;
            break;
          case 4:
            const r = 10 + newProgress * 5;
            child.position.x = Math.cos(newProgress * 3) * r;
            child.position.y = Math.sin(newProgress * 3) * r;
            child.position.z = newProgress * 2;
            break;
        }

        // Pulse opacity
        child.material.opacity = 0.4 + Math.sin(time * 3 + progress) * 0.4;
      }
    });
  });

  return <group ref={groupRef} />;
}

export function BackgroundEffects() {
  const [mode, setMode] = useState<'particles' | 'neural' | 'dataflow'>('particles');
  
  // Cycle through modes
  useEffect(() => {
    const interval = setInterval(() => {
      setMode(prev => {
        if (prev === 'particles') return 'neural';
        if (prev === 'neural') return 'dataflow';
        return 'particles';
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#030712_0%,#0c1426_50%,#111827_100%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Three.js canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 100], fov: 50 }}
          style={{ width: '100%', height: '100%', display: 'block' }}
          gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
          shadows={false}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[50, 50, 50]} intensity={0.3} />
          
          {mode === 'particles' && (
            <ParticleField count={2000} color={0x00d4aa} size={1.2} />
          )}
          
          {mode === 'neural' && (
            <NeuralNetwork nodeCount={60} connectionDistance={18} />
          )}
          
          {mode === 'dataflow' && (
            <DataFlow />
          )}
        </Canvas>
      </div>
      
      {/* Radial glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/5 blur-[200px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-secondary/5 blur-[200px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-tertiary/5 blur-[200px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
    </div>
  );
}

// Floating code snippets for hero
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
    `@KafkaListener(topics = "orders")
public void handleOrder(OrderEvent event) {
    try {
        orderService.process(event);
        outboxRepository.save(new OutboxEvent(
            event.getOrderId(), "ORDER_PROCESSED"
        ));
    } catch (Exception e) {
        retryService.schedule(event);
    }
}`,
    `CREATE OR REPLACE FUNCTION reserve_inventory()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE products 
    SET stock = stock - NEW.quantity
    WHERE id = NEW.product_id 
    AND stock >= NEW.quantity;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Insufficient stock';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;`,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {snippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute code-block font-mono text-[11px] leading-relaxed opacity-0"
          style={{
            top: `${15 + i * 28}%`,
            left: `${5 + (i % 3) * 15}%`,
            animation: `float 8s ease-in-out ${i * 2}s infinite, code-fade 12s ease-in-out ${i * 3}s infinite`,
            maxWidth: '300px',
          }}
        >
          <pre className="text-accent-primary/60 whitespace-pre-wrap">{snippet}</pre>
        </div>
      ))}
      <style jsx global>{`
        @keyframes code-fade {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0.95); }
          10%, 90% { opacity: 0.3; transform: translateY(-10px) scale(1); }
        }
      `}</style>
    </div>
  );
}

// Scanline effect
export function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-10"
      aria-hidden="true"
      style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        animation: 'scanline 8s linear infinite',
      }}
    />
  );
}