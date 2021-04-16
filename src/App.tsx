import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@/components';
import { OrbitControls } from '@react-three/drei';

function App() {
	return (
		<Canvas style={{ width: '100%', height: 400, backgroundColor: 'black' }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />

			<Box position={[-1, 0, 0]} />
			<Box position={[1, 0, 0]} />

			{/* @ts-ignore */}
			<OrbitControls />
		</Canvas>
	);
}

export default App;
