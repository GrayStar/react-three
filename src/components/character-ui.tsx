import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ResourceBar } from '@/components';

const useStyle = createUseStyles({
	ui: {
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
		backgroundColor: '#2D373E',
		'&:nth-child(even)': {
			marginRight: 0,
		},
	},
});

export const CharacterUi: FC = () => {
	const classes = useStyle();

	return (
		<div className={classes.ui}>
			<div className={classes.statusEffectsContainer}>
				<div className={classes.icon} />
				<div className={classes.icon} />
				<div className={classes.icon} />
				<div className={classes.icon} />
				<div className={classes.icon} />
				<div className={classes.icon} />
			</div>
			<ResourceBar value={60} max={100} color="#F47991" className="mb-1" />
			<ResourceBar value={40} max={100} color="#4DA5D8" />
		</div>
	);
};
