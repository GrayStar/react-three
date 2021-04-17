import React, { FC, createContext, useState, useCallback } from 'react';
import { ThemeProvider as JssProvider } from 'react-jss';

import { colors, fonts } from './';

type TypeOfColors = typeof colors;
type TypeOfFonts = typeof fonts;

export interface ThemeConfig {
	colors: TypeOfColors;
	fonts: TypeOfFonts;
}

interface ThemeContextConfig {
	theme: ThemeConfig;
	setColors(values: Partial<TypeOfColors>): void;
	setFonts(values: Partial<TypeOfFonts>): void;
}

export const ThemeContext = createContext({} as ThemeContextConfig);

export const ThemeProvider: FC = ({ children }) => {
	const [theme, setInternalTheme] = useState<ThemeConfig>({
		colors,
		fonts,
	});

	const setColors = useCallback(
		(newColors: Partial<TypeOfColors>) => {
			setInternalTheme({
				...theme,
				colors: {
					...colors,
					...newColors,
				},
			});
		},
		[theme]
	);

	const setFonts = useCallback(
		(newFonts: Partial<TypeOfFonts>) => {
			setInternalTheme({
				...theme,
				fonts: {
					...fonts,
					...newFonts,
				},
			});
		},
		[theme]
	);

	const values = {
		theme,
		setColors,
		setFonts,
	};

	return (
		<ThemeContext.Provider value={values}>
			<JssProvider theme={values.theme}>{children}</JssProvider>
		</ThemeContext.Provider>
	);
};

export const ThemeConsumer = ThemeContext.Consumer;
