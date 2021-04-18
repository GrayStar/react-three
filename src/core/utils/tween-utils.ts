import * as TWEEN from '@tweenjs/tween.js';

interface AnimateVector3Options {
	duration?: number;
	easing?(amount: number): number;
	update?(d: animateConfig): void;
	callback?(d: animateConfig): void;
}

const defaultDuration = 2000;

type animateConfig = {
	posX?: number;
	posY?: number;
	posZ?: number;
	scaleX?: number;
	scaleY?: number;
	scaleZ?: number;
};

export function animateObject3D(current: animateConfig, to: animateConfig, options?: AnimateVector3Options) {
	const tween = new TWEEN.Tween(current)
		.to(
			{
				posX: to.posX,
				posY: to.posY,
				posZ: to.posZ,
				scaleX: to.scaleX,
				scaleY: to.scaleY,
				scaleZ: to.scaleZ,
			},
			options?.duration || defaultDuration
		)
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

	tween.start();

	return tween;
}
