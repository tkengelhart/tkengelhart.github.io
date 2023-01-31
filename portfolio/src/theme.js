import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#121f27',
		},
		secondary: {
			main: '#1d666a',
		},
		error: {
			main: '#bf523d',
		},
		warning: {
			main: '#f3e4d7',
		}
	},
});

export default theme;
