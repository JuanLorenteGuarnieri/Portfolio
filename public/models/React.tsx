/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 react.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Curve008: THREE.Mesh
    Curve009: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};

export const Reacts = forwardRef<Group, LogoProps>((props, ref) => {
  const { nodes, materials } = useGLTF('models/react.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Curve008.geometry} material={materials.Mat} position={[-0.019, 0, 0.022]} />
      <mesh geometry={nodes.Curve009.geometry} material={materials.Mat} position={[-0.019, 0, 0.022]} />
    </group>
  )
});

useGLTF.preload('models/react.glb')

