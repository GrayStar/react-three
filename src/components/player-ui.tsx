import React, { FC } from 'react';

import { ResourceBar, StatusEffect } from '@/components';
import { createUseThemedStyles } from '@/theme';

const useStyles = createUseThemedStyles((theme) => ({
	playerUi: {
		display: 'flex',
		flexDirection: 'column',
	},
	unitFrame: {
		padding: 8,
		display: 'flex',
		borderRadius: 8,
		alignSelf: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.white,
	},
	resourceBar: {
		marginBottom: 4,
		'&:last-child': {
			marginBottom: 0,
		},
	},
	statusEffects: {
		marginLeft: 6,
		display: 'flex',
	},
	statusEffect: {
		marginRight: 4,
		'&:last-child': {
			marginRight: 0,
		},
	},
	actionBar: {
		padding: 16,
		display: 'flex',
		borderRadius: 24,
		alignSelf: 'center',
		backgroundColor: '#2D373E',
	},
	spell: {
		width: 56,
		height: 56,
		marginRight: 8,
		borderRadius: 8,
		backgroundColor: '#202227',
		'&:hover': {
			backgroundColor: 'blue',
		},
		'&:last-child': {
			marginRight: 0,
		},
	},
}));

export const PlayerUi: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.playerUi}>
			<div className={classes.unitFrame}>
				<div>
					<ResourceBar value={90} max={100} color="#F47991" width={56} className={classes.resourceBar} />
					<ResourceBar value={30} max={100} color="#4DA5D8" width={56} className={classes.resourceBar} />
				</div>
				<div className={classes.statusEffects}>
					<StatusEffect className={classes.statusEffect} />
					<StatusEffect className={classes.statusEffect} />
					<StatusEffect className={classes.statusEffect} />
				</div>
			</div>
			<div className={classes.actionBar}>
				<div className={classes.spell} />
				<div className={classes.spell} />
				<div className={classes.spell} />
				<div className={classes.spell} />
				<div className={classes.spell} />
			</div>
		</div>
	);
};
