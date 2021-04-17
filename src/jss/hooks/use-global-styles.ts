import { createUseStyles } from 'react-jss';

export const useGlobalStyles = createUseStyles({
	'@global': {
		html: {
			fontSize: 10,
			height: '100%',
		},
		body: {
			width: '100%',
			display: 'flex',
			minHeight: '100%',
			position: 'relative',
			backgroundColor: '#A6B8CA',
		},
	},
});
