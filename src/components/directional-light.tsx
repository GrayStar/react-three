import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { DirectionalLightProps } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';

export function DirectionalLight(props: DirectionalLightProps) {
	const directionalLight = useRef();
	useHelper(directionalLight, DirectionalLightHelper, 0.5, 'hotpink');

	return <directionalLight ref={directionalLight} {...props} />;
}
