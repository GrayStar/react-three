import React, { FC } from 'react';
import { GroupProps, MeshProps } from '@react-three/fiber';
import { Html } from '@react-three/drei';

import { CharacterUi } from './character-ui';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	fauxDropZone: {
		width: 64,
		height: 64,
		opacity: 0.5,
		backgroundColor: 'red',
		'&:hover': {
			backgroundColor: 'blue',
		},
	},
});

const UiAnchor: FC<MeshProps> = ({ children, ...props }) => {
	return (
		<mesh {...props}>
			<boxGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
			<meshStandardMaterial attach="material" transparent opacity={0} />
			{children && <Html style={{ pointerEvents: 'none' }}>{children}</Html>}
		</mesh>
	);
};

const CharacterModel: FC<MeshProps> = ({ children, ...props }) => {
	return (
		<mesh {...props}>
			<boxGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color="orange" />
			{children && (
				<Html distanceFactor={10} center>
					{children}
				</Html>
			)}
		</mesh>
	);
};

export function Character(props: GroupProps) {
	const classes = useStyles();

	return (
		<group {...props}>
			<UiAnchor position={[0, 0.75, 0]}>
				<CharacterUi />
			</UiAnchor>
			<CharacterModel position={[0, 0, 0]} castShadow>
				<div className={classes.fauxDropZone} />
			</CharacterModel>
		</group>
	);
}