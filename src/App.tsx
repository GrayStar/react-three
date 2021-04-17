import React, { useRef } from 'react';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Character, DirectionalLight, PlayerUi } from '@/components';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import Svg from './components/three-svg';
import { useGlobalStyles } from './jss/hooks/use-global-styles';

function GroundPlane(props: MeshProps) {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
			<planeBufferGeometry attach="geometry" args={[16, 16]} />
			<meshStandardMaterial attach="material" color="#4F9B78" />
		</mesh>
	);
}

function App() {
	useGlobalStyles();
	const camera = useRef();

	return (
		<>
			<Canvas
				dpr={window.devicePixelRatio}
				style={{ width: 375, height: 500, backgroundColor: '#D4EFFF' }}
				shadows
			>
				{/* <fog attach="fog" args={['#D4EFFF', 0, 64]} /> */}

				<hemisphereLight args={['#FFEEB1', '#080820', 1]} />
				<DirectionalLight color="#FFE9D5" position={[-56, 56, -56]} castShadow intensity={0.6} />

				<Character position={[-2, 0.5, 0]} />
				<Character position={[0, 0.5, -1]} />
				<Character position={[2, 0.5, 0]} />

				<GroundPlane receiveShadow />

				<PerspectiveCamera makeDefault ref={camera} position={[0, 6, 10]} />
				<OrbitControls camera={camera.current} />

				<Svg url="/static/yellow-tree.svg" position={[-4, 2.7, 3.7]} />
				<Svg url="/static/yellow-tree.svg" position={[2, 2.7, 4]} />
				<Svg url="/static/yellow-tree.svg" position={[-4, 2.7, -3.7]} />
				<Svg url="/static/yellow-tree.svg" position={[2, 2.7, -4]} />

				{/* <axesHelper args={[8]} /> */}
				{/* <gridHelper args={[16, 16, 16]} /> */}

				<Stats />
			</Canvas>
			<PlayerUi />
		</>
	);
}

export default App;
