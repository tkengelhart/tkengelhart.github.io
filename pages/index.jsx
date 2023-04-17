import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import { Box, Stack} from '@mui/material';
import theme from "../src/theme";



export default function Home() {
	return (
    <>			<Head>
				<title>Technical Tanya</title>
				<link rel="icon" href="/monitor.ico" />
			</Head>

	<Header />

<Project />

<Footer />

        </>

	);
}
