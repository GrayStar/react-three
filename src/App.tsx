import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as BootstrapThemeProvider } from 'react-bootstrap';

import { ThemeProvider as MasterClientThemeProvider } from '@/theme';
import { prefixes } from '@/jss/bootstrap';
import { useGlobalStyles, useThemedBootstrapStyles } from '@/jss/hooks';

import { Battle } from '@/pages';

// Wrapped by <Router>, allows use of 'react-router-dom' hooks
function RoutedApp() {
	return <Battle />;
}

// Wrapped by various <ThemeProviders>, allows use of 'jss' hooks
function ThemedApp() {
	useGlobalStyles();
	useThemedBootstrapStyles();

	return (
		<Router>
			<RoutedApp />
		</Router>
	);
}

// Exported App, not wrapped by anything, can add various context providers here
function App() {
	return (
		<MasterClientThemeProvider>
			<BootstrapThemeProvider prefixes={prefixes}>
				<ThemedApp />
			</BootstrapThemeProvider>
		</MasterClientThemeProvider>
	);
}

export default App;
