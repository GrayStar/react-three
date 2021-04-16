import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@/components';
import { OrbitControls } from '@react-three/drei';

function App() {
	return (
		<Canvas style={{ width: 350, height: 400, backgroundColor: 'black' }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Box position={[-1, 0, 0]} label="box 1" />
			<Box position={[1, 0, 0]} label="box 2" />

			{/* @ts-ignore */}
			<OrbitControls />
		</Canvas>
	);
}

export default App;
