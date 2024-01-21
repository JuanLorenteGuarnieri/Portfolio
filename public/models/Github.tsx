/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 github.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Curve012: THREE.Mesh
    Objeto_1001: THREE.Mesh
  }
  materials: {
    ['Tinta (3)']: THREE.MeshStandardMaterial
    ['Tinta (1).002']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>


type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};


export const Github = forwardRef<Group, LogoProps>((props, ref) => {
  const { nodes, materials } = useGLTF('models/github.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Curve012.geometry} material={materials['Tinta (3)']} position={[-0.984, 0.343, 0.009]} rotation={[Math.PI / 2, 0, 0]} scale={19.254} />
      <mesh geometry={nodes.Objeto_1001.geometry} material={materials['Tinta (1).002']} position={[-1.349, 0, 0.025]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.219, 0.01]} />
    </group>
  )
});

useGLTF.preload('models/github.glb')
