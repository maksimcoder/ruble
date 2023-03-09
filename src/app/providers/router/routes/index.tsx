import { ReactElement } from 'react';

import { App } from 'app/App';
import { Main } from 'pages/Main';

enum ERoutes {
	App = '/',
	Main = '/main',
}

const RoutesComponents: Record<ERoutes, ReactElement> = {
	[ERoutes.App]: <App />,
	[ERoutes.Main]: <Main />,
};

export { ERoutes, RoutesComponents };
