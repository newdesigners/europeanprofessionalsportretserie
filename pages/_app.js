import "../styles/globals.css";
import Head from "next/head";

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
        <script
          defer
          data-domain="european-professionals.netlify.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
