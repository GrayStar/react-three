import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

import { ResourceBar, StatusEffect } from '@/components';
import { ThemeConfig, useTheme } from '@/theme';

const useStyles = createUseStyles({
	ui: ({ theme }: { theme: ThemeConfig }) => ({
		width: 68,
		padding: 8,
		borderRadius: 8,
		transform: 'translate(-50%, -100%)',
		backgroundColor: theme.colors.white,
	}),
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
});

export const CharacterUi: FC = () => {
	const { theme } = useTheme();
	const classes = useStyles({ theme });

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
