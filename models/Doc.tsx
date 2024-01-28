/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 doc.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Curve004: THREE.Mesh
    Curve005: THREE.Mesh
    Curve008: THREE.Mesh
  }
  materials: {
    Mat: THREE.MeshStandardMaterial
    ['Mat.001']: THREE.MeshStandardMaterial
    ['Mat.002']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};

export const Doc = forwardRef<Group, LogoProps>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { nodes, materials } = useGLTF('models/doc.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Curve004.geometry} material={materials['Mat.001']} position={isHovered ? [-0.0128, 0, 0.0148] : [-0.012, 0, 0.014]} scale={isHovered ? 0.2 : 0.184}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.Curve005.geometry} material={materials['Mat.001']} position={isHovered ? [-0.0128, 0, 0.0148] : [-0.012, 0, 0.014]} scale={isHovered ? 0.2 : 0.184}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.Curve008.geometry} material={materials['Mat.002']} position={isHovered ? [-0.0128, 0, 0.0148] : [-0.012, 0, 0.014]} scale={isHovered ? 0.2 : 0.184}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
    </group>
  )
});

useGLTF.preload('models/doc.glb')

