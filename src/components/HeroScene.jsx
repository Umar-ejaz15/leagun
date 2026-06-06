"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   LEAGUN — Hero 3D scene (React Three Fiber)
   A LIVING OUTDOOR LANDSCAPE — rolling terrain, a swaying grove,
   grass bending in the wind, leaves drifting, warm low sun.
   Gentle camera parallax on pointer + scroll. Degrades to a
   single static frame under prefers-reduced-motion.
   ============================================================ */

const GREENS = [0x2fae63, 0x1c7a42, 0x3dd47e, 0x247a45, 0x2b8f52];

function terrainH(x, z) {
  return (
    Math.sin(x * 0.16) * 0.65 +
    Math.cos(z * 0.21) * 0.5 +
    Math.sin((x + z) * 0.1) * 0.3
  );
}

/* ---------------- Rolling terrain ---------------- */
function Ground() {
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(70, 70, 48, 48);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i),
        z = p.getZ(i);
      p.setY(i, terrainH(x, z) - 2.4);
    }
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <>
      <mesh geometry={geo} receiveShadow>
        <meshStandardMaterial color={0x1f5e34} roughness={1} flatShading />
      </mesh>
      {/* darker far band for depth */}
      <mesh position={[0, 4, -26]}>
        <planeGeometry args={[120, 40]} />
        <meshBasicMaterial color={0x0a1f12} transparent opacity={0.9} />
      </mesh>
    </>
  );
}

/* ---------------- A single low-poly swaying tree ---------------- */
function Tree({ x, z, scale, tone, small }) {
  const groupRef = useRef();
  const foliageRefs = useRef([]);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  const amp = useMemo(() => 0.03 + Math.random() * 0.03, []);

  const th = 2.4 * scale;
  const clusters = useMemo(
    () => [
      [0, th + 0.1, 0, 1.05],
      [-0.5 * scale, th - 0.2, 0.3 * scale, 0.8],
      [0.5 * scale, th - 0.1, -0.3 * scale, 0.85],
    ],
    [th, scale]
  );

  const foliageGeos = useMemo(
    () =>
      clusters.map((c) => {
        const geo = new THREE.IcosahedronGeometry(c[3] * scale, 1);
        const pos = geo.attributes.position;
        for (let v = 0; v < pos.count; v++) {
          pos.setXYZ(
            v,
            pos.getX(v) + (Math.random() - 0.5) * 0.16,
            pos.getY(v) + (Math.random() - 0.5) * 0.16,
            pos.getZ(v) + (Math.random() - 0.5) * 0.16
          );
        }
        geo.computeVertexNormals();
        return geo;
      }),
    [clusters, scale]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const wind = Math.sin(t * 0.6) * 0.06 + Math.sin(t * 1.9 + 1.3) * 0.025;
    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.sin(t * 0.7 + phase) * (amp + Math.abs(wind) * 0.6);
    }
    foliageRefs.current.forEach((m, k) => {
      if (m) m.rotation.z = Math.sin(t * 1.1 + phase + k) * 0.05;
    });
  });

  return (
    <group ref={groupRef} position={[x, terrainH(x, z) - 2.4, z]}>
      <mesh position={[0, th / 2, 0]} castShadow={!small}>
        <cylinderGeometry args={[0.1 * scale, 0.22 * scale, th, 6]} />
        <meshStandardMaterial color={0x533a28} roughness={0.95} flatShading />
      </mesh>
      {clusters.map((c, k) => (
        <mesh
          key={k}
          ref={(el) => (foliageRefs.current[k] = el)}
          geometry={foliageGeos[k]}
          position={[c[0], c[1], c[2]]}
          castShadow={!small}
        >
          <meshStandardMaterial
            color={GREENS[(tone + k) % GREENS.length]}
            roughness={0.82}
            flatShading
            emissive={0x0b2e18}
            emissiveIntensity={0.22}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------------- Foreground grass bending in the wind ---------------- */
function Grass({ small }) {
  const ref = useRef();
  const count = small ? 40 : 100;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const blades = useMemo(() => {
    const arr = [];
    for (let b = 0; b < count; b++) {
      const bx = (Math.random() - 0.5) * 26;
      const bz = 3 + Math.random() * 9;
      arr.push({
        x: bx,
        z: bz,
        y: terrainH(bx, bz) - 2.4,
        rotY: Math.random() * Math.PI,
        ph: Math.random() * Math.PI * 2,
        s: 0.7 + Math.random() * 0.8,
      });
    }
    return arr;
  }, [count]);

  const geo = useMemo(() => {
    const g = new THREE.ConeGeometry(0.035, 0.55, 4);
    g.translate(0, 0.275, 0); // pivot at base
    return g;
  }, []);

  useFrame(({ clock }) => {
    const mesh = ref.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    const wind = Math.sin(t * 0.6) * 0.06 + Math.sin(t * 1.9 + 1.3) * 0.025;
    for (let i = 0; i < count; i++) {
      const bl = blades[i];
      const tilt = wind * 0.5 + Math.sin(t * 1.6 + bl.ph) * 0.12;
      dummy.position.set(bl.x, bl.y, bl.z);
      dummy.rotation.set(0, bl.rotY, tilt);
      dummy.scale.set(1, bl.s, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[geo, undefined, count]}>
      <meshStandardMaterial color={0x3a9a55} roughness={0.9} flatShading />
    </instancedMesh>
  );
}

/* ---------------- Leaves drifting on the wind ---------------- */
function Leaves({ small }) {
  const ref = useRef();
  const count = small ? 35 : 70;
  const { positions, data } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const data = [];
    for (let p = 0; p < count; p++) {
      const lx = (Math.random() - 0.5) * 22;
      const ly = Math.random() * 8 + 1.5;
      const lz = (Math.random() - 0.5) * 14;
      positions[p * 3] = lx;
      positions[p * 3 + 1] = ly;
      positions[p * 3 + 2] = lz;
      data.push({ baseY: ly, ph: Math.random() * Math.PI * 2, sp: 0.4 + Math.random() * 0.6 });
    }
    return { positions, data };
  }, [count]);

  useFrame(({ clock }) => {
    const pts = ref.current;
    if (!pts) return;
    const t = clock.getElapsedTime();
    const wind = Math.sin(t * 0.6) * 0.06 + Math.sin(t * 1.9 + 1.3) * 0.025;
    const attr = pts.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const d = data[i];
      let x = attr.getX(i) + (0.012 + wind * 0.15) * d.sp;
      if (x > 12) x = -12;
      attr.setX(i, x);
      attr.setY(i, d.baseY + Math.sin(t * d.sp + d.ph) * 0.5);
      attr.setZ(i, attr.getZ(i) + Math.sin(t * 0.5 + d.ph) * 0.004);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0x9fd645}
        size={0.1}
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------------- Camera parallax (pointer + scroll) ---------------- */
function CameraRig({ reduce }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => {
      target.current.x = e.clientX / window.innerWidth - 0.5;
      target.current.y = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      scrollY.current = window.pageYOffset;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduce]);

  useFrame(() => {
    cur.current.x += (target.current.x - cur.current.x) * 0.04;
    cur.current.y += (target.current.y - cur.current.y) * 0.04;
    camera.position.x += (cur.current.x * 1.6 - camera.position.x) * 0.04;
    camera.position.y += (2.6 - cur.current.y * 0.8 - camera.position.y) * 0.04;
    camera.position.z = 12 - scrollY.current * 0.0016;
    camera.lookAt(0, 2.0 + cur.current.y * 0.4, 0);
  });

  return null;
}

function Scene({ small }) {
  const trees = useMemo(
    () =>
      small
        ? [
            [-1.2, 2, 1.25, 0],
            [3.2, -2, 1.0, 2],
            [-4, -4, 0.85, 3],
            [5, -6, 0.7, 1],
          ]
        : [
            [-1.4, 2.5, 1.45, 0],
            [3.6, 0, 1.1, 2],
            [-5, -3, 1.0, 3],
            [6, -4, 0.85, 1],
            [-8, -7, 0.8, 4],
            [9, -9, 0.7, 2],
            [0, -11, 0.65, 0],
          ],
    [small]
  );

  return (
    <>
      <hemisphereLight args={[0xbfe9c8, 0x24341f, 0.7]} />
      <ambientLight args={[0x4a6b4f, 0.4]} />
      <directionalLight color={0xfff1cf} intensity={1.2} position={[-7, 9, 5]} />
      <pointLight color={0xd4a843} intensity={0.5} distance={40} position={[6, 3, 6]} />

      <Ground />
      {trees.map((t, i) => (
        <Tree key={i} x={t[0]} z={t[1]} scale={t[2]} tone={t[3]} small={small} />
      ))}
      <Grass small={small} />
      <Leaves small={small} />
    </>
  );
}

export default function HeroScene() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = typeof window !== "undefined" && window.innerWidth < 760;

  const wrapRef = useRef(null);
  const [inView, setInView] = useState(true);

  // Pause the render loop entirely once the hero scrolls out of view —
  // no GPU/CPU spent animating a scene nobody can see.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const frameloop = reduce ? "demand" : inView ? "always" : "never";

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.35]}
        shadows={false}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ fov: 50, near: 0.1, far: 120, position: [0, 2.6, 12] }}
        onCreated={({ scene }) => {
          scene.fog = new THREE.FogExp2(0x07160d, 0.03);
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <Scene small={small} />
        <CameraRig reduce={reduce} />
      </Canvas>
    </div>
  );
}
