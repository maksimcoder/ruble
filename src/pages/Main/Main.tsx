import { FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Main: FC = () => {
	const style = {
		width: '100vw',
		height: '100vh',
	};
	return (
		<Box sx={style}>
			<Typography>This is Main page</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: 1,
						width: 128,
						height: 128,
					},
				}}>
				<Paper elevation={0} />
				<Paper elevation={1} />
				<Paper elevation={2} />
				<Paper elevation={3} />
			</Box>
		</Box>
	);
};

export { Main };
