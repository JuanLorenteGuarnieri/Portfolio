/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 chess.glb -t -r ./ 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder002: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
  // Aquí puedes añadir cualquier otra prop personalizada si es necesario
};

export const Chess = forwardRef<Group, LogoProps>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const { nodes, materials } = useGLTF('models/chess.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials['Material.001']}
        position={[-0.003, -0.027, -0.01]} scale={isHovered ? [0.0121, 0.0286, 0.0121] : [0.011, 0.026, 0.011]}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)} />
    </group>
  )
});

useGLTF.preload('models/chess.glb')

