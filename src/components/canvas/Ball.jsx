import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  if (decal) decal.anisotropy = 2; // keep light for Android

  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.3}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.1]} />
      <mesh scale={2.2}>
        <icosahedronGeometry args={[0.9, 0]} /> {/* low-poly */}
        <meshStandardMaterial color="#fff8eb" flatShading />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  return (
    <Canvas
      dpr={1}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: !isAndroid, // disable on Android
        alpha: true,
        precision: isAndroid ? "lowp" : "mediump",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
