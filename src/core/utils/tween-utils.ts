import { Vector3 } from 'three';
import * as TWEEN from '@tweenjs/tween.js';

interface AnimateVector3Options {
	duration?: number;
	easing?(amount: number): number;
	update?(d: Vector3): void;
	callback?(d: Vector3): void;
}

export function animateVector3(start: Vector3, target: Vector3, options?: AnimateVector3Options) {
	const tweenVector3 = new TWEEN.Tween(start)
		.to({ x: target.x, y: target.y, z: target.z }, options?.duration || 2000)
		.easing(options?.easing || TWEEN.Easing.Quadratic.In)
		.onUpdate((d) => {
			if (options?.update) {
				options.update(d);
			}
		})
		.onComplete((d) => {
			if (options?.callback) {
				options.callback(d);
			}
		});

	tweenVector3.start();

	return tweenVector3;
}
