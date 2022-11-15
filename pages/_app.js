import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>European proffesionals</title>
        <meta
          name="description"
          content="European proffesionals. interviews, story's"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Script
        defer
        data-domain="european-professionals.netlify.app"
        src="https://plausible.io/js/script.js"
      ></Script>
    </>
  );
}

export default MyApp;
