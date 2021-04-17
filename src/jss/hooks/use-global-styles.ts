import { createUseStyles } from 'react-jss';

export const useGlobalStyles = createUseStyles({
	'@global': {
		html: {
			fontSize: 10,
			height: '100%',
		},
		body: {
			minHeight: '100%',
			position: 'relative',
			backgroundColor: '#A6B8CA',
		},
	},
});
