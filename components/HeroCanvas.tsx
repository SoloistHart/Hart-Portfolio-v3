"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/useMediaQuery";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;
  attribute float aScale;
  varying float vDist;

  void main() {
    vec3 pos = position;

    float wave = sin(pos.x * 0.35 + uTime) * cos(pos.y * 0.35 + uTime * 0.8);
    pos.z += wave * 1.2;

    float d = distance(pos.xy, uMouse);
    float ripple = smoothstep(7.0, 0.0, d) * uHover;
    pos.z += ripple * 6.0;
    vDist = ripple;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (1.0 + ripple * 3.0) * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  varying float vDist;

  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float circle = smoothstep(0.5, 0.4, length(c));
    if (circle < 0.01) discard;
    vec3 base = vec3(0.55, 0.55, 0.5);
    vec3 accent = vec3(0.78, 1.0, 0.23);
    vec3 color = mix(base, accent, clamp(vDist, 0.0, 1.0));
    gl_FragColor = vec4(color, circle * (0.35 + vDist));
  }
`;

function ParticleField({ cols, rows }: { cols: number; rows: number }) {
  const ref = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));
  const hover = useRef(0);

  const GAP = 0.9;

  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(cols * rows * 3);
    const scales = new Float32Array(cols * rows);
    let i = 0;
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        positions[i * 3] = (x - cols / 2) * GAP;
        positions[i * 3 + 1] = (y - rows / 2) * GAP;
        positions[i * 3 + 2] = 0;
        scales[i] = 2.2;
        i++;
      }
    }
    return { positions, scales };
  }, [cols, rows]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(999, 999) },
      uHover: { value: 0 },
    }),
    []
  );

  useFrame((state, delta) => {
    const u = matRef.current?.uniforms;
    if (!u) return;
    u.uTime.value = state.clock.elapsedTime;

    const px = (state.pointer.x * viewport.width) / 2;
    const py = (state.pointer.y * viewport.height) / 2;
    mouse.current.lerp(new THREE.Vector2(px, py), 0.12);
    u.uMouse.value.copy(mouse.current);

    const targetHover =
      state.pointer.x !== 0 || state.pointer.y !== 0 ? 1 : 0;
    hover.current += (targetHover - hover.current) * Math.min(delta * 3, 1);
    u.uHover.value = hover.current;

    if (ref.current) ref.current.rotation.x = -0.35;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const isMobile = useIsMobile();
  const cols = isMobile ? 48 : 90;
  const rows = isMobile ? 32 : 50;

  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, isMobile ? 28 : 32], fov: isMobile ? 60 : 55 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
    >
      <ParticleField key={`${cols}-${rows}`} cols={cols} rows={rows} />
    </Canvas>
  );
}
