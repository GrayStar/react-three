import React, { Suspense, useMemo } from 'react';
import { Box } from '@react-three/drei';
import { useLoader, Vector3 } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import * as THREE from 'three';

interface ThreeSvgProps {
	url: string;
	ref?: React.MutableRefObject<React.ReactNode | undefined>;
}

const DefaultModel = (props: ThreeSvgProps) => (
	<Box args={[1, 1, 1]} position={props.position}>
		<meshBasicMaterial attach="material" color="hotpink" />
	</Box>
);

const SvgShape = ({ shape, color, index }: any) => (
	<mesh castShadow>
		<meshStandardMaterial
			attach="material"
			color={color}
			/*
				HACK: Offset SVG polygons by index
				The paths from SVGLoader Z-fight.
				This fix causes stacking problems with detailed SVGs.
			*/
			polygonOffset
			polygonOffsetFactor={index * -0.1}
			side={THREE.DoubleSide}
		/>
		<shapeBufferGeometry attach="geometry" args={[shape]} />
	</mesh>
);

const SvgAsync = React.memo(({ url, ref, position }: ThreeSvgProps) => {
	const { paths } = useLoader(SVGLoader, url);
	const shapes = useMemo(
		() => paths.flatMap((path, index) => path.toShapes(true).map((shape) => ({ index, shape, color: path.color }))),
		[paths]
	);
	return (
		<group
			ref={ref}
			children={shapes.map((props, key) => (
				<SvgShape key={key} {...props} />
			))}
			rotation={[0, 0, Math.PI]}
			scale={[-0.01, 0.01, 0.01]}
			position={position}
		/>
	);
});

interface ThreeSvgProps {
	url: string;
	ref?: React.MutableRefObject<React.ReactNode | undefined>;
	position?: Vector3;
}

export const ThreeSvg = (props: ThreeSvgProps) => (
	<Suspense fallback={<DefaultModel {...props} />} children={<SvgAsync {...props} />} />
);
