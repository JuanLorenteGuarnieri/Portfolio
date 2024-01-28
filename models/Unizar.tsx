/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 unizar.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    path102: THREE.Mesh
    path106: THREE.Mesh
    path110: THREE.Mesh
    path114: THREE.Mesh
    path118: THREE.Mesh
  }
  materials: {
    ['SVGMat.022']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};

export const Unizar = forwardRef<Group, LogoProps>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { nodes, materials } = useGLTF('models/unizar.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.path102.geometry} material={materials['SVGMat.022']} position={isHovered ? [-0.027, 0, 0.036] : [-0.025, 0, 0.033]} scale={isHovered ? 1.1 : 1}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.path106.geometry} material={materials['SVGMat.022']} position={isHovered ? [-0.027, 0, 0.036] : [-0.025, 0, 0.033]} scale={isHovered ? 1.1 : 1}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.path110.geometry} material={materials['SVGMat.022']} position={isHovered ? [-0.027, 0, 0.036] : [-0.025, 0, 0.033]} scale={isHovered ? 1.1 : 1}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.path114.geometry} material={materials['SVGMat.022']} position={isHovered ? [-0.027, 0, 0.036] : [-0.025, 0, 0.033]} scale={isHovered ? 1.1 : 1}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh castShadow receiveShadow geometry={nodes.path118.geometry} material={materials['SVGMat.022']} position={isHovered ? [-0.027, 0, 0.036] : [-0.025, 0, 0.033]} scale={isHovered ? 1.1 : 1}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
    </group>
  )
});

useGLTF.preload('models/unizar.glb')

