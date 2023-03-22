import { FC, useContext } from 'react';
import { Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

import './styles/reset.scss';
import './styles/variables/global.scss';
import { ThemeContext } from './providers/theme';

const App: FC = () => {
	const { changeTheme } = useContext(ThemeContext);
	return (
		<Paper elevation={0} className='app'>
			<button onClick={changeTheme}>click</button>
			<Outlet />
		</Paper>
	);
};

export { App };
