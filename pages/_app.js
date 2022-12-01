import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps, locales }) {
  return (
    <>
      <Head>
        <title>Portretten van Europese vakmensen</title>
        <meta
          name="description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          property="og:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portretten van Europese vakmensen" />
        <meta
          property="og:description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/c52d1fa1c74c3325591cd216adee48b006c35c5e-168x56.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="european-professionals.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta
          name="twitter:title"
          content="Portretten van Europese vakmensen"
        />
        <meta
          name="twitter:description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/c52d1fa1c74c3325591cd216adee48b006c35c5e-168x56.svg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
        <title>Portraits of European Professionals</title>
        <meta
          name="description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />

        <meta
          property="og:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portraits of European Professionals"
        />
        <meta
          property="og:description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />
        <meta
          property="og:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/2b50689cbc495bd902e8d209d275c3778b0ff78d-168x56.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="european-professionals.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta
          name="twitter:title"
          content="Portraits of European Professionals"
        />
        <meta
          name="twitter:description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />
        <meta
          name="twitter:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/2b50689cbc495bd902e8d209d275c3778b0ff78d-168x56.svg"
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
