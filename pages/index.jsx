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

<Box sx={{display: 'flex'}}>

        <Box sx={{ backgroundColor: theme.palette.primary.main, width: '100%', height: '30%'}}>
         
         <SpeedDial />
          
          <Box
            sx={{
              justifyContent: 'center',
              pt: 1,
              pb: 4,
              height: '100%'
         
            }}
          >
            <Header />
          </Box>

          <Box
            className="projectStyle"

 sx={{
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  padding: 5,
  flexGrow: 1,
  maxHeight: '50%'
  
}}          >
            <Project />

          </Box>
          <Box
          className="footerStyle"
            sx={{
              justifyContent: "flex-end",
              backgroundColor: theme.palette.error.main
            }}
          >
            <Footer />
          </Box>
        </Box>
        </Box>
      </>

	);
}
