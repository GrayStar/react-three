import React, { FC, useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { createUseStyles } from 'react-jss';

import { CharacterUi } from '@/components/character-ui';
import { useCustomContextBridge } from '@/hooks';
import { Object3D, Vector3 } from 'three';
import { PositionArray } from '@/core/models';

import * as TWEEN from '@tweenjs/tween.js';
import { animateVector3 } from '@/core/utils';

const useStyles = createUseStyles({
	fauxDropZone: {
		width: 64,
		height: 64,
		opacity: 0,
		borderRadius: 8,
		backgroundColor: 'hotpink',
		'&:hover': {
			opacity: 0.5,
		},
	},
});

const UiAnchor: FC<MeshProps> = ({ children, ...props }) => {
	const CustomContextBridge = useCustomContextBridge();

	return (
		<mesh {...props}>
			<boxGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
			<meshStandardMaterial attach="material" transparent opacity={0} />
			{children && (
				<Html style={{ pointerEvents: 'none' }}>
					<CustomContextBridge>{children}</CustomContextBridge>
				</Html>
			)}
		</mesh>
	);
};

interface CharacterModelProps extends MeshProps {
	color?: string;
}

const CharacterModel: FC<CharacterModelProps> = ({ color, children, ...props }) => {
	const CustomContextBridge = useCustomContextBridge();

	return (
		<mesh {...props}>
			<boxGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color={color || 'orange'} />
			{children && (
				<Html distanceFactor={10} center>
					<CustomContextBridge>{children}</CustomContextBridge>
				</Html>
			)}
		</mesh>
	);
};

interface CharacterProps {
	color?: string;
	showUnitFrame?: boolean;
	onClick?(node: Object3D): void;
	startingPosition: PositionArray;
}

export function Character({ color, showUnitFrame, onClick, startingPosition }: CharacterProps) {
	const classes = useStyles();
	const groupRef = useRef<Object3D>();

	const startingVector = new Vector3(startingPosition[0], startingPosition[1], startingPosition[2]);

	useFrame(() => {
		TWEEN.update();
	});

	return (
		<group ref={groupRef} position={startingPosition}>
			{showUnitFrame && (
				<UiAnchor position={[0, 0.75, 0]}>
					<CharacterUi />
				</UiAnchor>
			)}
			<CharacterModel position={[0, 0, 0]} castShadow receiveShadow color={color}>
				<div
					className={classes.fauxDropZone}
					onClick={() => {
						if (!onClick || !groupRef.current) {
							return;
						}

						animateVector3(startingVector, new Vector3(0, 0.5, 0), {
							duration: 500,
							easing: TWEEN.Easing.Quadratic.InOut,
							update: (d) => {
								if (!groupRef.current) {
									return;
								}

								groupRef.current.position.x = d.x;
								groupRef.current.position.y = d.y;
								groupRef.current.position.z = d.z;
							},
						});
					}}
				/>
			</CharacterModel>
		</group>
	);
}
