/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 iphone.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Iphone: THREE.Mesh
    Iphone001: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};


export const Iphone = forwardRef<Group, LogoProps>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { nodes, materials } = useGLTF('models/iphone.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Iphone.geometry} material={materials['Material.002']} rotation={[0, 0, Math.PI]} scale={isHovered ? 0.055 : 0.05}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
      <mesh geometry={nodes.Iphone001.geometry} material={materials['Material.002']} rotation={[0, 0, Math.PI]} scale={isHovered ? 0.055 : 0.05}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
    </group>
  )
});

useGLTF.preload('models/iphone.glb')
