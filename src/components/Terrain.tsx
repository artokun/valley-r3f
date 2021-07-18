import React from "react";
import * as THREE from "three";
import terrainVertexShader from "../shaders/terrain/vertex.glsl";
import terrainFragmentShader from "../shaders/terrain/fragment.glsl";

export default function Terrain() {
  return (
    <mesh rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry args={[1, 1, 1000, 1000]} />
      <shaderMaterial
        vertexShader={terrainVertexShader}
        fragmentShader={terrainFragmentShader}
        // wireframe
      />
    </mesh>
  );
}
