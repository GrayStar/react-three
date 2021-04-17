import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { ResourceBar } from './resource-bar';

const useStyles = createUseStyles({
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
		backgroundColor: 'white',
	},
	resourceBar: {
		width: 56,
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
		width: 24,
		height: 24,
		marginRight: 4,
		borderRadius: 4,
		backgroundColor: '#2D373E',
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
});

export const PlayerUi: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.playerUi}>
			<div className={classes.unitFrame}>
				<div>
					<ResourceBar value={90} max={100} color="#F47991" className={classes.resourceBar} />
					<ResourceBar value={30} max={100} color="#4DA5D8" className={classes.resourceBar} />
				</div>
				<div className={classes.statusEffects}>
					<div className={classes.statusEffect} />
					<div className={classes.statusEffect} />
					<div className={classes.statusEffect} />
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
