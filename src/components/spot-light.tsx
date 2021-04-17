import { useRef } from 'react';
import { SpotLightHelper } from 'three';
import { SpotLightProps } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';

export function SpotLight(props: SpotLightProps) {
	const spotLight = useRef();
	useHelper(spotLight, SpotLightHelper, 0.5, 'hotpink');

	return <spotLight ref={spotLight} {...props} />;
}
