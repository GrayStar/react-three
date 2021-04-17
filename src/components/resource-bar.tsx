import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

interface ResourceBarStyleProps {
	percent: number;
	color: string;
	width?: number;
}

const useStyles = createUseStyles({
	resourceBar: ({ width }: ResourceBarStyleProps) => ({
		height: 8,
		borderRadius: 4,
		overflow: 'hidden',
		width: width || '100%',
		backgroundColor: '#2D373E',
	}),
	resource: ({ percent, color }: ResourceBarStyleProps) => ({
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
	width?: number;
	className?: string;
}

export function ResourceBar({ value, max, color, width, className }: ResourceBarProps) {
	const classes = useStyles({
		percent: (value / max) * 100,
		color,
		width,
	});

	return (
		<div className={classNames(classes.resourceBar, className)}>
			<div className={classes.resource} />
		</div>
	);
}
