import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { Box } from "@mui/material";
import theme from "../src/theme";
import SpeedDial from "../components/SpeedDial";
import Head from "next/head";
import TabCard from "../components/TabCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Tanya</title>
        <link rel="icon" href="/monitor.ico" />
      </Head>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            width: "100%",
            height: "30%",
          }}
        >
          <SpeedDial />

          <Box
            sx={{
              pb: 4,
              height: "100%",
            }}
          >
            <Header />
          </Box>

          <Project />
          <Box
            className="footerStyle"
            sx={{
              justifyContent: "flex-end",
              backgroundColor: theme.palette.error.main,
            }}
          >
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}
