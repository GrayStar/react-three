import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
	tooltip: {
		backgroundColor: 'white',
	},
});

interface BoxProps extends MeshProps {
	label?: string;
}

export function Box({ label, ...props }: BoxProps) {
	const classes = useStyle();

	const mesh = useRef<any>();
	const [hovered, setHovered] = useState(false);
	const [active, setActive] = useState(false);

	useFrame((state, delta) => {
		if (mesh.current) {
			mesh.current.rotation.x += 0.01;
			mesh.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
			{label && (
				<Html scaleFactor={10}>
					<div className={classes.tooltip}>{label}</div>
				</Html>
			)}
		</mesh>
	);
}
