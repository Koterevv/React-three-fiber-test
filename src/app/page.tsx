'use client';
import { Header } from '@/components/Header';
import Ship from '@/components/models/Ship';
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black text-neutral-300">
      <div className="absolute left-0 right-0 z-10">
        <Header />
      </div>
      <div className="container absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 flex justify-end">
        <div className="w-1/3">
          <h2 className="text-3xl mb-5">Lorem ipsum dolor sit amet.</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            pariatur doloribus ullam ad id repellendus vero quae. Eum
            necessitatibus esse dolorum porro molestias voluptatibus at debitis
            quidem tenetur enim! In labore commodi, ipsa rem fugit ratione
            accusamus? Alias, beatae molestiae.
          </p>
          <button className="py-4 w-full border-2 border-white text-xl uppercase font-semibold hover:bg-white/30 transition-colors duration-200">
            buy now
          </button>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={40} position={[0, 0, 8]} />
          <pointLight
            castShadow
            color={'lightblue'}
            intensity={50}
            position={[0, 0, -5]}
          />
          <Suspense fallback={null}>
            <group rotation-y={-1.25} scale={4} position={[0, 0, 0]}>
              <Ship />
            </group>
            <CameraRig />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 5,
        1 + state.pointer.y,
        5.5,
      ],
      0.5,
      delta,
    );
    state.camera.lookAt(1, 0, 0);
  });

  return null;
}
