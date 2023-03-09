import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from 'app/providers/router/router';

// import { store } from 'app/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		{/* <ThemeProvider theme={theme}> */}
		<RouterProvider router={router} />
		{/* </ThemeProvider> */}
		{/* </Provider> */}
	</React.StrictMode>
);
