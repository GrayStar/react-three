import React, { FC, useCallback, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Canvas, MeshProps } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';

import { Character, DirectionalLight, PlayerUi, ThreeSvg } from '@/components';
import { useCustomContextBridge } from '@/hooks';
import { Object3D } from 'three';
import { animateObject3D } from '@/core/utils';
import { enemies } from '@/__mock__';

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
	const CustomContextBridge = useCustomContextBridge();

	const playerRef = useRef<Object3D>();
	const enemyRefsById = useRef<Record<string, React.RefObject<Object3D | undefined>>>({});

	const returnObject3DToStartingPosition = useCallback((object3D: Object3D) => {
		animateObject3D(
			{
				posX: object3D.position.x,
				posY: object3D.position.y,
				posZ: object3D.position.z,
			},
			{
				posX: 0,
				posY: 0.5,
				posZ: 3,
			},
			{
				duration: 300,
				update: (d) => {
					if (!object3D) {
						return;
					}

					if (d.posX) {
						object3D.position.x = d.posX;
					}
					if (d.posY) {
						object3D.position.y = d.posY;
					}
					if (d.posZ) {
						object3D.position.z = d.posZ;
					}
				},
				callback: () => {
					object3D.rotation.x = 0;
					object3D.rotation.y = 0;
					object3D.rotation.z = 0;
				},
			}
		);
	}, []);

	function handleEnemyClicked(enemyId: string) {
		const enemyRef = enemyRefsById.current[enemyId];
		if (!enemyRef.current || !playerRef.current) {
			return;
		}

		const playerStartingPosition = playerRef.current.position;

		console.log(playerStartingPosition);

		playerRef.current.lookAt(enemyRef.current.position);

		animateObject3D(
			{
				posX: playerRef.current.position.x,
				posY: playerRef.current.position.y,
				posZ: playerRef.current.position.z,
			},
			{
				posX: enemyRef.current.position.x,
				posY: enemyRef.current.position.y,
				posZ: enemyRef.current.position.z,
			},
			{
				duration: 300,
				update: (d) => {
					if (!playerRef.current) {
						return;
					}

					if (d.posX) {
						playerRef.current.position.x = d.posX;
					}
					if (d.posY) {
						playerRef.current.position.y = d.posY;
					}
					if (d.posZ) {
						playerRef.current.position.z = d.posZ;
					}
				},
				callback: () => {
					if (!playerRef.current) {
						return;
					}

					returnObject3DToStartingPosition(playerRef.current);
				},
			}
		);
	}

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

							{Object.values(enemies).map((enemy) => {
								const tempRef = React.createRef<Object3D | undefined>();
								enemyRefsById.current[enemy.id] = tempRef;

								return (
									<Character
										key={enemy.id}
										ref={tempRef}
										startingPosition={enemy.position}
										showUnitFrame
										color={'red'}
										onClick={() => {
											handleEnemyClicked(enemy.id);
										}}
									/>
								);
							})}

							<Character
								ref={playerRef}
								startingPosition={[0, 0.5, 3]}
								color={'blue'}
								onClick={() => {
									return;
								}}
							/>

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
