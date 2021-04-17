import { useRef } from 'react';
import { PointLightHelper } from 'three';
import { PointLightProps } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';

export function PointLight(props: PointLightProps) {
	const pointLight = useRef();
	useHelper(pointLight, PointLightHelper, 0.5, 'hotpink');

	return <pointLight ref={pointLight} {...props} />;
}
