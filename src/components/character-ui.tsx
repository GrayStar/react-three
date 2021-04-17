import React, { FC } from 'react';

import { ResourceBar, StatusEffect } from '@/components';
import { createUseThemedStyles } from '@/theme';

const useStyles = createUseThemedStyles((theme) => {
	console.log(theme);

	return {
		ui: {
			width: 68,
			padding: 8,
			borderRadius: 8,
			transform: 'translate(-50%, -100%)',
			backgroundColor: 'white',
		},
		statusEffectsContainer: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		icon: {
			marginRight: 4,
			marginBottom: 4,
			'&:nth-child(even)': {
				marginRight: 0,
			},
		},
	};
});

export const CharacterUi: FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.ui}>
			<div className={classes.statusEffectsContainer}>
				<StatusEffect className={classes.icon} />
				<StatusEffect className={classes.icon} />
				<StatusEffect className={classes.icon} />
				<StatusEffect className={classes.icon} />
				<StatusEffect className={classes.icon} />
				<StatusEffect className={classes.icon} />
			</div>
			<ResourceBar value={60} max={100} color="#F47991" className="mb-1" />
			<ResourceBar value={40} max={100} color="#4DA5D8" />
		</div>
	);
};
