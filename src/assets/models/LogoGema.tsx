/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/logoGema.glb -t -r public 
*/

import * as THREE from 'three'
import React, { useRef, forwardRef } from 'react'
import { useGLTF, MeshRefractionMaterial, Loader, MeshReflectorMaterial } from '@react-three/drei'
import { GroupProps, ReactThreeFiber, useLoader } from '@react-three/fiber'
import * as A from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { Group } from 'three';


type GLTFResult = GLTF & {
  nodes: {
    LogoCentro: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

type LogoProps = JSX.IntrinsicElements['group'] & {
};



export const LogoGema = forwardRef<Group, LogoProps>((props, ref) => {
  const { nodes, materials } = useGLTF('src/assets/models/logoGema.glb') as GLTFResult
  const position: [number, number, number] = [2, 0.2, -1];
  const rotation: [number, number, number] = [-Math.PI / 4, -Math.PI / 12, 0];
  const scale = 0.6;

  const loader = new THREE.CubeTextureLoader();

  // const texture = useLoader(THREE.TextureLoader, "src/assets/bkg/lightblue/back_low.png");
  // const textureCube = loader.load([
  //   '/src/assets/bkg/lightblue/right.png', // px
  //   '/src/assets/bkg/lightblue/left.png',  // nx
  //   '/src/assets/bkg/lightblue/top.png',   // py
  //   '/src/assets/bkg/lightblue/bot.png',   // ny
  //   '/src/assets/bkg/lightblue/front.png', // pz
  //   '/src/assets/bkg/lightblue/back.png'   // nz
  // ]);


  return (
    <group ref={ref} {...props} rotation={rotation} scale={scale} position={position} dispose={null}>
      <mesh geometry={nodes.LogoCentro.geometry} position={[0.49, 2.864, -1.438]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1.038, -0.6, -1.475]} >
        <meshPhongMaterial emissive={[0, 0, 0.1]}
          emissiveIntensity={5} color={[0.5, 0.5, 1]} />

      </mesh>
    </group>
  )
});

useGLTF.preload('./logoGema.glb')
