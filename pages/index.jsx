import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { Box } from '@mui/material';
import theme from "../src/theme";
import SpeedDial from "../components/SpeedDial";


export default function Home() {
	return (
    <>	

<Box sx={{backgroundColor: theme.palette.primary.main, pt: 2, minWidth: '5%'}}>
<SpeedDial />
 <Box
        sx={{
          display: "flex",
          minWidth: "25%",
		  justifyContent: 'center',
		  pt: 7
        }}
      >
			<Header />
			</Box>
			<Box
        sx={{
          justifyContent: "space-between",
		  height: '50%',
        }}
      >
<Project />
</Box>
<Box
        sx={{
          justifyContent: "flex-end",
		  height: '20%'
        }}
      >
<Footer />
</Box>
</Box>
        </>

	);
}
