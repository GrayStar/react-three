import { useContext } from 'react';
import { ThemeContext } from './theme-context';

export function useTheme() {
	const themeContext = useContext(ThemeContext);
	return themeContext;
}
