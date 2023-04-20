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

        <Box sx={{ backgroundColor: theme.palette.primary.main, pt: 2, minWidth: '5%', height: 200}}>
          <SpeedDial />
          <Box
            sx={{
              display: "flex",
              minWidth: "25%",
              justifyContent: 'center',
              pt: 7,
              pb: 2,
            }}
          >
            <Header />
          </Box>

          <Box
 sx={{
  backgroundColor: theme.palette.warning.main,
  padding: 2,
  height: 650,
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
      </>

	);
}
