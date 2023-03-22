import { FC, useState, useMemo, ReactNode } from 'react';

import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	PaletteMode,
} from '@mui/material';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from '../ThemeContext';

interface IThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(
		(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as PaletteMode) || Theme.LIGHT
	);

	const toggleTheme = () => {
		const newTheme = currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setCurrentTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: currentTheme,
				},
			}),
		[currentTheme]
	);

	return (
		<MuiThemeProvider theme={theme}>
			<ThemeContext.Provider value={{ changeTheme: toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</MuiThemeProvider>
	);
};

export default ThemeProvider;
