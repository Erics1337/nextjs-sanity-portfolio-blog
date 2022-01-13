import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/book_stack/scene.gltf')


    //useFrame allows us to re-render/update rotation on each frame
    useFrame(() => (group.current.rotation.y += 0.001));

    
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={nodes.defaultMaterial.material} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={nodes.defaultMaterial_1.material} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={nodes.defaultMaterial_2.material} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={nodes.defaultMaterial_3.material} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={nodes.defaultMaterial_4.material} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={nodes.defaultMaterial_5.material} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={nodes.defaultMaterial_6.material} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={nodes.defaultMaterial_7.material} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={nodes.defaultMaterial_8.material} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={nodes.defaultMaterial_9.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/book_stack/scene.gltf')
