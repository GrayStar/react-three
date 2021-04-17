import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
	statusEffect: {
		width: 24,
		height: 24,
		borderRadius: 4,
		backgroundColor: '#2D373E',
	},
});

interface Props {
	className?: string;
}

export const StatusEffect: FC<Props> = ({ className }) => {
	const classes = useStyles();

	return <div className={classNames(classes.statusEffect, className)} />;
};
