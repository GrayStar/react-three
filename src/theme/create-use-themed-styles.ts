import { createUseStyles } from 'react-jss';
import { ThemeConfig } from './theme-context';

export function createUseThemedStyles<Theme extends ThemeConfig, C extends string = string>(
	style: Record<C, any> | ((theme: Theme) => Record<C, any>)
) {
	return createUseStyles(style);
}
