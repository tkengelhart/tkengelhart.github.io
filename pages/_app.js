import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import style from "../styles/globals.css";
import { Genos } from "@next/font/google";


const genos = Genos({ subsets: ["latin"], display: "swap" });

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={genos.className}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </CacheProvider>
  );
}
