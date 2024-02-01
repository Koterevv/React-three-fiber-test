'use client';
import React, { FC, useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame, useLoader } from '@react-three/fiber';

interface IBox {
  position?: [number, number, number];
}

export const Box: FC<IBox> = ({ position = [0, 0, 0] }) => {
  const ref = useRef<Mesh>(null);

  const [wood] = useLoader(TextureLoader, ['wood.jpg']);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.05;
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={wood} />
    </mesh>
  );
};
