/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 logo.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    LogoDrch: THREE.Mesh
    LogoIzq: THREE.Mesh
  }
  materials: {
    M_Logo: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};

export const Logo = forwardRef<Group, LogoProps>((props, ref) => {
  const { nodes, materials } = useGLTF('models/logo.glb') as GLTFResult
  const position: [number, number, number] = [2, 0.2, -1];
  const rotation: [number, number, number] = [-Math.PI / 3, -Math.PI / 12, 0];
  const scale = 0.6;
  return (
    <group ref={ref} {...props} scale={[scale, scale, scale / 2]} rotation={rotation} position={position} dispose={null}>
      <mesh geometry={nodes.LogoDrch.geometry} material={materials.M_Logo} position={[-0.456, 2.864, -1.059]} rotation={[Math.PI / 2, 0, 0]} scale={[1.038, 0.6, 1.475]} />
      <mesh geometry={nodes.LogoIzq.geometry} material={materials.M_Logo} position={[0.49, 2.864, -1.059]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1.038, -0.6, -1.475]} />
    </group>
  )
});

useGLTF.preload('models/logo.glb')
