import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { Grid } from "@mui/material";
import theme from "../src/theme";
import SpeedDial from "../components/SpeedDial";
import Head from "next/head";
import TabCard from "../components/TabCard";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Tanya</title>
        <link rel="icon" href="/monitor.ico" />
      </Head>
      <Grid container sx={{pr: 10, pl: 10, pt: 5}}>
        <Header />
        <Project />
        {/* <Skills /> */}
      </Grid>
      <Footer />

    </>
  );
}
