import React, { FC, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Canvas, MeshProps } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';

import { Character, DirectionalLight, PlayerUi, ThreeSvg } from '@/components';
import { useCustomContextBridge } from '@/hooks';
import { PositionArray } from '@/core/models';

function GroundPlane(props: MeshProps) {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
			<planeBufferGeometry attach="geometry" args={[16, 16]} />
			<meshStandardMaterial attach="material" color="#4F9B78" />
		</mesh>
	);
}

export const Battle: FC = () => {
	const camera = useRef();
	const [target, setTarget] = useState<PositionArray>();
	const CustomContextBridge = useCustomContextBridge();

	return (
		<Container fluid>
			<Row noGutters>
				<Col>
					<Canvas
						dpr={window.devicePixelRatio}
						style={{ width: 375, height: 500, backgroundColor: '#D4EFFF', margin: '0 auto' }}
						shadows
					>
						<CustomContextBridge>
							<fog attach="fog" args={['#D4EFFF', 0, 64]} />

							<hemisphereLight args={['#FFEEB1', '#080820', 1]} />
							<DirectionalLight color="#FFE9D5" position={[-56, 56, -56]} castShadow intensity={0.6} />

							<Character
								startingPosition={[-2, 0.5, -2]}
								showUnitFrame
								color={'red'}
								onClick={(node) => {
									setTarget([node.position.x, node.position.y, node.position.z]);
								}}
							/>
							<Character
								startingPosition={[0, 0.5, -3]}
								showUnitFrame
								color={'red'}
								onClick={(node) => {
									console.log(node);
									setTarget([node.position.x, node.position.y, node.position.z]);
								}}
							/>
							<Character
								startingPosition={[2, 0.5, -2]}
								showUnitFrame
								color={'red'}
								onClick={(node) => {
									setTarget([node.position.x, node.position.y, node.position.z]);
								}}
							/>

							<Character startingPosition={[0, 0.5, 3]} color={'blue'} target={target} />

							<GroundPlane receiveShadow />

							<PerspectiveCamera makeDefault ref={camera} position={[0, 6, 10]} />
							<OrbitControls camera={camera.current} />

							<ThreeSvg url="/static/yellow-tree.svg" position={[-4, 2.7, 3.7]} />
							<ThreeSvg url="/static/yellow-tree.svg" position={[2, 2.7, 4]} />
							<ThreeSvg url="/static/yellow-tree.svg" position={[-4, 2.7, -3.7]} />
							<ThreeSvg url="/static/yellow-tree.svg" position={[2, 2.7, -4]} />

							{/* <axesHelper args={[8]} /> */}
							{/* <gridHelper args={[16, 16, 16]} /> */}

							<Stats />
						</CustomContextBridge>
					</Canvas>
					<PlayerUi />
				</Col>
			</Row>
		</Container>
	);
};
