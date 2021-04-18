import React, { FC } from 'react';
import { GroupProps, MeshProps } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { createUseStyles } from 'react-jss';

import { CharacterUi } from '@/components/character-ui';
import { useCustomContextBridge } from '@/hooks';
import { Object3D } from 'three';

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

interface CharacterProps extends GroupProps {
	color?: string;
	showUnitFrame?: boolean;
}

export const Character = React.forwardRef<Object3D | undefined, CharacterProps>(
	({ color, showUnitFrame, ...props }, ref) => {
		const classes = useStyles();

		return (
			<group ref={ref} {...props}>
				{showUnitFrame && (
					<UiAnchor position={[0, 0.75, 0]}>
						<CharacterUi />
					</UiAnchor>
				)}
				<CharacterModel position={[0, 0, 0]} castShadow color={color}>
					<div className={classes.fauxDropZone} />
				</CharacterModel>
			</group>
		);
	}
);
