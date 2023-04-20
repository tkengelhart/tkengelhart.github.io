import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { Box } from '@mui/material';
import theme from "../src/theme";
import SpeedDial from "../components/SpeedDial";
import Head from 'next/head'


export default function Home() {
	return (
    <>
<Head>      <title>Technical Tanya</title>
      <link rel="icon" href="/monitor.ico" />
    </Head>

<Box sx={{height: '100%'}}>

        <Box sx={{ backgroundColor: theme.palette.primary.main, height: 200, minWidth: '5%'}}>
         
         <SpeedDial />
          
          <Box
            sx={{
              minWidth: "25%",
              justifyContent: 'center',
              pt: 1,
              pb: 4
         
            }}
          >
            <Header />
          </Box>

          <Box
 sx={{
  backgroundColor: theme.palette.secondary.main,
  padding: 5,
  height: 600,
}}          >
            <Project />

          </Box>
          <Box
          className="footerStyle"
            sx={{
              justifyContent: "flex-end",
          
            }}
          >
            <Footer />
          </Box>
        </Box>
        </Box>
      </>

	);
}
