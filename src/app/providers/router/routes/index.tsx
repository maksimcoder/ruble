import { ReactElement } from 'react';

import { Home } from 'pages/Home';

enum ERoutes {
	Home = '/',
}

const RoutesComponents: Record<ERoutes, ReactElement> = {
	[ERoutes.Home]: <Home />,
};

export { ERoutes, RoutesComponents };
