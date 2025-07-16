import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>European proffesionals</title>
        <meta
          name="description"
          content="European profesionals, interviews, stories"
        />
        <link rel="icon" href="/favicon.ico" />
        <script defer data-domain="europeanprofessionals.eu" src="https://plausible.newdesigners.agency/js/script.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
