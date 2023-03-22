import { createContext } from 'react';

export const enum Theme {
	DARK = 'dark',
	LIGHT = 'light',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

interface IThemeContext {
	changeTheme?: () => void;
}

const ThemeContext = createContext<IThemeContext>({});

export default ThemeContext;
