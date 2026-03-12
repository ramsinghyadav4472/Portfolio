"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line, Float, Trail } from "@react-three/drei";
import * as THREE from "three";

// ─────────────────────────────────────────────
// DOCKER CONTAINER  (cylinder stack)
// ─────────────────────────────────────────────
function DockerContainer({
  position,
  color,
  label,
}: {
  position: [number, number, number];
  color: string;
  label: string;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
  });

  return (
    <group ref={ref} position={position} scale={[1.6, 1.6, 1.6]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.18, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.85} />
      </mesh>
      {/* Top lid */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.06, 32]} />
        <meshStandardMaterial color="#ffffff" emissive={color} emissiveIntensity={0.15} transparent opacity={0.5} />
      </mesh>
      {/* Stack layer 2 */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.18, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.7} />
      </mesh>
      {/* Stack layer 3 */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.18, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} transparent opacity={0.55} />
      </mesh>
      {/* Label */}
      <Html distanceFactor={12} position={[0, 1.2, 0]} center>
        <div className="px-2 py-0.5 rounded text-[9px] font-mono font-bold whitespace-nowrap"
          style={{ background: "rgba(0,0,0,0.75)", color, border: `1px solid ${color}`, textShadow: `0 0 8px ${color}` }}>
          🐳 {label}
        </div>
      </Html>
    </group>
  );
}

// ─────────────────────────────────────────────
// KUBERNETES NODE  (hexagonal wireframe + core)
// ─────────────────────────────────────────────
function K8sNode({
  position,
  color,
  label,
  delay,
}: {
  position: [number, number, number];
  color: string;
  label: string;
  delay: number;
}) {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y += 0.008;
      outerRef.current.rotation.x = Math.sin(t * 0.5 + delay) * 0.1;
    }
    if (innerRef.current) {
      const s = 1 + Math.sin(t * 2 + delay) * 0.07;
      innerRef.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.8} floatingRange={[-0.25, 0.25]}>
      <group position={position} scale={[1.7, 1.7, 1.7]}>
        {/* Outer rotating wireframe */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.6} transparent opacity={0.55} />
        </mesh>
        {/* Inner pulsing glow sphere */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} transparent opacity={0.8} />
        </mesh>
        {/* Label */}
        <Html distanceFactor={14} position={[0, 1.2, 0]} center>
          <div className="px-2 py-0.5 rounded text-[9px] font-mono font-bold whitespace-nowrap"
            style={{ background: "rgba(0,0,0,0.75)", color, border: `1px solid ${color}`, textShadow: `0 0 8px ${color}` }}>
            ⎈ {label}
          </div>
        </Html>
      </group>
    </Float>
  );
}

// ─────────────────────────────────────────────
// NETWORK PACKET — animated sphere that travels
// ─────────────────────────────────────────────
function NetworkPacket({
  start,
  end,
  color,
  speed,
  offset,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  speed: number;
  offset: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const startV = useMemo(() => new THREE.Vector3(...start), [start]);
  const endV = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = ((state.clock.getElapsedTime() * speed + offset) % 1 + 1) % 1;
    mesh.current.position.lerpVectors(startV, endV, t);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.075, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

// ─────────────────────────────────────────────
// CLUSTER RING — decorative orbit ring
// ─────────────────────────────────────────────
function ClusterRing({ radius, color, tilt = 0 }: { radius: number; color: string; tilt?: number }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <Line points={points} color={color} lineWidth={0.6} transparent opacity={0.2} />
    </group>
  );
}

// ─────────────────────────────────────────────
// CONNECTION BEAM between two nodes
// ─────────────────────────────────────────────
function Beam({
  start,
  end,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={0.5}
      transparent
      opacity={0.18}
    />
  );
}

// ─────────────────────────────────────────────
// BACKGROUND STAR FIELD
// ─────────────────────────────────────────────
function StarField() {
  const count = 300;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
      z: (Math.random() - 0.5) * 40,
    }));
  }, []);

  useMemo(() => {
    if (!mesh.current) return;
    stars.forEach((s, i) => {
      dummy.position.set(s.x, s.y, s.z);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [stars, dummy]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 4, 4]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
    </instancedMesh>
  );
}

// ─────────────────────────────────────────────
// MAIN SCENE
// ─────────────────────────────────────────────
function CloudInfraScene() {
  // K8s Nodes — arranged in a cluster ring
  const k8sNodes = useMemo(
    () => [
      { pos: [0, 0, 0] as [number, number, number], color: "#00d8ff", label: "master-node", delay: 0 },
      { pos: [-7, 1, -2] as [number, number, number], color: "#00d8ff", label: "worker-01", delay: 1 },
      { pos: [7, 1, -2] as [number, number, number], color: "#00d8ff", label: "worker-02", delay: 2 },
      { pos: [0, 1, -8] as [number, number, number], color: "#00d8ff", label: "worker-03", delay: 3 },
      { pos: [-4, -3.5, -5] as [number, number, number], color: "#a855f7", label: "etcd-pod", delay: 4 },
      { pos: [4, -3.5, -5] as [number, number, number], color: "#a855f7", label: "api-server", delay: 5 },
    ],
    []
  );

  // Docker Containers — smaller, scattered
  const dockerContainers = useMemo(
    () => [
      { pos: [-11, 4, 0] as [number, number, number], color: "#22c55e", label: "nginx:latest" },
      { pos: [11, 4, 0] as [number, number, number], color: "#22c55e", label: "postgres:15" },
      { pos: [-8, -5.5, -2] as [number, number, number], color: "#f59e0b", label: "redis:alpine" },
      { pos: [8, -5.5, -2] as [number, number, number], color: "#f59e0b", label: "node:20-slim" },
      { pos: [0, 7, -2] as [number, number, number], color: "#ec4899", label: "prometheus" },
    ],
    []
  );

  // Network connections (beams between nodes)
  const beams = useMemo(
    () => [
      { start: k8sNodes[0].pos, end: k8sNodes[1].pos, color: "#00d8ff" },
      { start: k8sNodes[0].pos, end: k8sNodes[2].pos, color: "#00d8ff" },
      { start: k8sNodes[0].pos, end: k8sNodes[3].pos, color: "#00d8ff" },
      { start: k8sNodes[0].pos, end: k8sNodes[4].pos, color: "#a855f7" },
      { start: k8sNodes[0].pos, end: k8sNodes[5].pos, color: "#a855f7" },
      { start: k8sNodes[1].pos, end: k8sNodes[3].pos, color: "#00d8ff" },
      { start: k8sNodes[2].pos, end: k8sNodes[3].pos, color: "#00d8ff" },
      // Docker to K8s
      { start: dockerContainers[0].pos, end: k8sNodes[1].pos, color: "#22c55e" },
      { start: dockerContainers[1].pos, end: k8sNodes[2].pos, color: "#22c55e" },
      { start: dockerContainers[2].pos, end: k8sNodes[4].pos, color: "#f59e0b" },
      { start: dockerContainers[3].pos, end: k8sNodes[5].pos, color: "#f59e0b" },
      { start: dockerContainers[4].pos, end: k8sNodes[0].pos, color: "#ec4899" },
    ],
    [k8sNodes, dockerContainers]
  );

  // Animated packets along the beams
  const packets = useMemo(
    () => [
      { start: k8sNodes[0].pos, end: k8sNodes[1].pos, color: "#00d8ff", speed: 0.5, offset: 0 },
      { start: k8sNodes[1].pos, end: k8sNodes[0].pos, color: "#00d8ff", speed: 0.4, offset: 0.5 },
      { start: k8sNodes[0].pos, end: k8sNodes[2].pos, color: "#00d8ff", speed: 0.6, offset: 0.3 },
      { start: k8sNodes[2].pos, end: k8sNodes[0].pos, color: "#00d8ff", speed: 0.45, offset: 0.7 },
      { start: k8sNodes[0].pos, end: k8sNodes[3].pos, color: "#00d8ff", speed: 0.5, offset: 0.1 },
      { start: k8sNodes[0].pos, end: k8sNodes[4].pos, color: "#a855f7", speed: 0.55, offset: 0.2 },
      { start: k8sNodes[0].pos, end: k8sNodes[5].pos, color: "#a855f7", speed: 0.5, offset: 0.8 },
      { start: dockerContainers[0].pos, end: k8sNodes[1].pos, color: "#22c55e", speed: 0.35, offset: 0 },
      { start: dockerContainers[1].pos, end: k8sNodes[2].pos, color: "#22c55e", speed: 0.4, offset: 0.4 },
      { start: dockerContainers[4].pos, end: k8sNodes[0].pos, color: "#ec4899", speed: 0.45, offset: 0.6 },
      { start: k8sNodes[0].pos, end: dockerContainers[4].pos, color: "#ec4899", speed: 0.35, offset: 0.15 },
    ],
    [k8sNodes, dockerContainers]
  );

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 8, 4]} intensity={2} color="#00d8ff" />
      <pointLight position={[-8, -4, -4]} intensity={1.5} color="#a855f7" />
      <pointLight position={[8, -4, -4]} intensity={1.5} color="#22c55e" />

      <StarField />

      {/* Decorative orbit rings */}
      <ClusterRing radius={9} color="#00d8ff" tilt={0.3} />
      <ClusterRing radius={12} color="#a855f7" tilt={-0.2} />
      <ClusterRing radius={15} color="#22c55e" tilt={0.5} />

      {/* K8s Nodes */}
      {k8sNodes.map((node, i) => (
        <K8sNode key={i} position={node.pos} color={node.color} label={node.label} delay={node.delay} />
      ))}

      {/* Docker containers */}
      {dockerContainers.map((c, i) => (
        <DockerContainer key={i} position={c.pos} color={c.color} label={c.label} />
      ))}

      {/* Connection beams */}
      {beams.map((b, i) => (
        <Beam key={i} start={b.start} end={b.end} color={b.color} />
      ))}

      {/* Animated network packets */}
      {packets.map((p, i) => (
        <NetworkPacket key={i} start={p.start} end={p.end} color={p.color} speed={p.speed} offset={p.offset} />
      ))}
    </>
  );
}

// ─────────────────────────────────────────────
// EXPORTED COMPONENT
// ─────────────────────────────────────────────
export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: "auto" }}>
      <Canvas
        camera={{ position: [0, 6, 24], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <CloudInfraScene />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minDistance={14}
          maxDistance={38}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Hint overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-[11px] font-mono text-white/30 tracking-widest animate-pulse">
          drag to orbit &nbsp;·&nbsp; scroll to zoom
        </span>
      </div>
    </div>
  );
}
