/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 scene.gltf 
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/ship-in-a-bottle-9ddbc5b32da94bafbfdb56e1f6be9a38
Title: Ship in a bottle
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-20.537, -129.331, 36.195]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={277.238}
          >
            <mesh
              geometry={nodes.sea_mer_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.sea_fond_0.geometry}
              material={materials.fond}
            />
          </group>
          <mesh
            geometry={
              nodes.plaque_export_plaqueexport_baked_material_0.geometry
            }
            material={materials.plaqueexport_baked_material}
            position={[0.036, -209.121, -130.619]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.support_export_supportexport_baked_material001_0.geometry
            }
            material={materials['supportexport_baked_material.001']}
            position={[0, -2.017, -61.696]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.bottle_export001_bottle_inside_0.geometry}
            material={materials.bottle_inside}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.boat_export_veliero001_baked_material_0.geometry}
            material={materials.veliero001_baked_material}
            position={[0, -188.183, 39.115]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={100.324}
          />
          <mesh
            geometry={nodes.cap_export_capexport_baked_material_0.geometry}
            material={materials.capexport_baked_material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={
              nodes.bottle_export_bottleexport_baked_material_0.geometry
            }
            material={materials.bottleexport_baked_material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
