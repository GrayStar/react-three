import React, { useRef } from 'react';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
	tooltip: {
		width: 68,
		padding: 8,
		borderRadius: 8,
		backgroundColor: 'white',
		transform: 'translate(-50%, -100%)',
	},
	statusEffectsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 4,
		marginBottom: 4,
		borderRadius: 4,
		backgroundColor: 'gray',
		'&:nth-child(even)': {
			marginRight: 0,
		},
	},
	bar: {
		height: 8,
		width: '100%',
		borderRadius: 4,
		backgroundColor: 'gray',
	},
});

export function Box({ ...props }: GroupProps) {
	const classes = useStyle();

	const group = useRef<THREE.Mesh>();

	useFrame((_state, _delta) => {
		if (group.current) {
			//group.current.rotation.x += 0.01;
			//group.current.rotation.y += 0.01;
		}
	});

	return (
		<group ref={group} {...props}>
			<mesh position={[0, 0.75, 0]}>
				<boxGeometry args={[0.5, 0.5, 0.5]} />
				<meshStandardMaterial transparent opacity={0} />
				<Html style={{ pointerEvents: 'none' }}>
					<div className={classes.tooltip}>
						<div className={classes.statusEffectsContainer}>
							<div className={classes.icon} />
							<div className={classes.icon} />
							<div className={classes.icon} />
							<div className={classes.icon} />
							<div className={classes.icon} />
							<div className={classes.icon} />
						</div>
						<div className={classes.bar} />
						<div className={classes.bar} />
					</div>
				</Html>
			</mesh>
			<mesh position={[0, 0, 0]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="orange" />
			</mesh>
		</group>
	);
}
