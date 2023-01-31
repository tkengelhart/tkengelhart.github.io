import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";



export default function Home() {
	return (
    <>			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
<Header />
<Project />
<Footer />

        </>

	);
}
