import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './styles/variables/global.scss';
import './styles/themes/light.scss';

const App: FC = () => {
	return (
		<div className='app'>
			<h1>this is app</h1>
			<Outlet />
		</div>
	);
};

export { App };
