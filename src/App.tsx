import React from 'react';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Box, DirectionalLight } from '@/components';
import { OrbitControls } from '@react-three/drei';

function GroundPlane(props: MeshProps) {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
			<planeBufferGeometry attach="geometry" args={[16, 16]} />
			<meshStandardMaterial attach="material" color="#4F9B78" />
		</mesh>
	);
}

function App() {
	return (
		<Canvas
			dpr={window.devicePixelRatio}
			style={{ width: '100%', height: 800, backgroundColor: '#D4EFFF' }}
			shadows
		>
			<fog attach="fog" args={['#D4EFFF', 0, 64]} />

			<hemisphereLight args={['#FFEEB1', '#080820', 1]} />
			<DirectionalLight color="#FFE9D5" position={[-24, 56, -24]} castShadow intensity={0.6} />

			<Box position={[-1.5, 0.5, 0]} />
			<Box position={[0, 0.5, -1]} />
			<Box position={[1.5, 0.5, 0]} />

			<GroundPlane receiveShadow />

			{/* @ts-ignore */}
			<OrbitControls />

			{/* <axesHelper args={[8]} /> */}
			{/* <gridHelper args={[16, 16, 16]} /> */}
		</Canvas>
	);
}

export default App;
