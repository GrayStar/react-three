import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
	resourceBar: {
		height: 8,
		width: '100%',
		borderRadius: 4,
		overflow: 'hidden',
		backgroundColor: '#2D373E',
	},
	resource: ({ percent, color }: { percent: number; color: string }) => ({
		height: '100%',
		width: `${percent}%`,
		backgroundColor: color,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
	}),
});

interface ResourceBarProps {
	value: number;
	max: number;
	color: string;
	className?: string;
}

export function ResourceBar({ value, max, color, className }: ResourceBarProps) {
	const classes = useStyles({
		percent: (value / max) * 100,
		color,
	});

	return (
		<div className={classNames(classes.resourceBar, className)}>
			<div className={classes.resource} />
		</div>
	);
}
