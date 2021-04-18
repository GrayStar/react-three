import { PositionArray } from '@/core/models';

interface EnemyModel {
	id: string;
	position: PositionArray;
}

export const enemies: Record<string, EnemyModel> = {
	'xxx-xxx-xxx-0': {
		id: 'xxx-xxx-xxx-0',
		position: [-2, 0.5, -2],
	},
	'xxx-xxx-xxx-1': {
		id: 'xxx-xxx-xxx-1',
		position: [0, 0.5, -3],
	},
	'xxx-xxx-xxx-2': {
		id: 'xxx-xxx-xxx-2',
		position: [2, 0.5, -2],
	},
};
