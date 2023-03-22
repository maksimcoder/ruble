import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';

import { ThemeProvider } from 'app/providers/theme';
// import { store } from 'app/store';
import { router } from 'app/providers/router/router';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
		{/* </Provider> */}
	</React.StrictMode>
);
