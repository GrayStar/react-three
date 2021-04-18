import React, { FC, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { createUseStyles } from 'react-jss';
import * as easings from 'd3-ease';

import { CharacterUi } from '@/components/character-ui';
import { useCustomContextBridge } from '@/hooks';
import { Object3D } from 'three';
import { animated, useSpring } from '@react-spring/three';
import { PositionArray } from '@/core/models';

const useStyles = createUseStyles({
	fauxDropZone: {
		width: 64,
		height: 64,
		opacity: 0,
		borderRadius: 8,
		backgroundColor: 'hotpink',
		'&:hover': {
			opacity: 1,
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
	target?: PositionArray;
}

export function Character({ color, showUnitFrame, onClick, startingPosition, target }: CharacterProps) {
	const groupRef = useRef<Object3D>();
	const classes = useStyles();

	const { pos } = useSpring({
		to: [{ pos: target }, { pos: startingPosition }],
		from: { pos: startingPosition },
		config: {
			easing: easings.easeCubic,
			duration: 200,
		},
	});

	return (
		<animated.group ref={groupRef} position={(pos as unknown) as PositionArray}>
			{showUnitFrame && (
				<UiAnchor position={[0, 0.75, 0]}>
					<CharacterUi />
				</UiAnchor>
			)}
			<CharacterModel position={[0, 0, 0]} castShadow color={color}>
				<div
					className={classes.fauxDropZone}
					onClick={() => {
						if (!onClick || !groupRef.current) {
							return;
						}

						onClick(groupRef.current);
					}}
				/>
			</CharacterModel>
		</animated.group>
	);
}
