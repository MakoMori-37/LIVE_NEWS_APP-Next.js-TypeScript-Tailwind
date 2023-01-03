import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Provider from "../components/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
    <div className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700 h-screen ">
      <Head>
        <title>Live News App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <Header />
      <div className="max-w-6xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
    </Provider>
  );
}

export default MyApp;
