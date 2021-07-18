import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { Loader, Stats, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Guify from "guify";

import Lights from "./Lights";

import "./assets/styles/App.scss";
import Terrain from "./components/Terrain";

new Guify({
  align: "right",
  theme: "dark",
  barMode: "none",
});

ReactDOM.render(
  <React.StrictMode>
    <Canvas
      onCreated={({ gl }: any) => {
        gl.physicallyCorrectLights = true;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.antialias = true;
        gl.setClearColor(0x111111);
      }}
      camera={{ position: [1, 1, 1], fov: 75 }}
      dpr={Math.min(window.devicePixelRatio, 2)}
    >
      <Lights />
      <Suspense fallback={null}>
        <Terrain />
      </Suspense>
      <Stats />
      <OrbitControls />
    </Canvas>
    <Loader dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`} />
  </React.StrictMode>,
  document.getElementById("root")
);
