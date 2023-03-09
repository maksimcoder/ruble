import { createBrowserRouter } from 'react-router-dom';
import { ERoutes, RoutesComponents } from 'app/providers/router/routes';

const router = createBrowserRouter([
	{
		path: ERoutes.App,
		element: RoutesComponents[ERoutes.App],
		children: [
			{
				path: ERoutes.Main,
				element: RoutesComponents[ERoutes.Main],
			},
		],
	},
]);

export { router };
