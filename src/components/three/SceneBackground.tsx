import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Particles = ({ count = 600 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const a = new THREE.Color("#3b6dff");
    const b = new THREE.Color("#a8c0ff");
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      const c = a.clone().lerp(b, Math.random());
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SceneBackground = () => (
  <div
    aria-hidden
    className="fixed inset-0 -z-10 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at top, hsl(var(--primary) / 0.12), transparent 60%), hsl(var(--background))",
    }}
  >
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Particles count={500} />
    </Canvas>
  </div>
);

export default SceneBackground;