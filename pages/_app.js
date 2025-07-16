import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          hrefLang="nl-nl"
          name="description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          hrefLang="nl-nl"
          property="og:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta hrefLang="nl" property="og:type" content="website" />
        <meta
          hrefLang="nl-nl"
          property="og:title"
          content="Portretten van Europese vakmensen"
        />
        <meta
          hrefLang="nl-nl"
          property="og:description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          hrefLang="nl-nl"
          property="og:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/c52d1fa1c74c3325591cd216adee48b006c35c5e-168x56.svg"
        />

        <meta
          hrefLang="nl-nl"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          hrefLang="nl-nl"
          property="twitter:domain"
          content="european-professionals.netlify.app"
        />
        <meta
          hrefLang="nl-nl"
          property="twitter:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta
          hrefLang="nl-nl"
          name="twitter:title"
          content="Portretten van Europese vakmensen"
        />
        <meta
          hrefLang="nl-nl"
          name="twitter:description"
          content="Iedere dag zijn er honderden professionals bezig met het maken en implementeren van Europees beleid, ook dicht bij huis. Via de portretserie Europese Professionals laten we zien wie er in Nederland allemaal meebouwt aan de toekomst van Europa."
        />
        <meta
          hrefLang="nl-nl"
          name="twitter:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/c52d1fa1c74c3325591cd216adee48b006c35c5e-168x56.svg"
        />
        <meta
          hrefLang="en-uk"
          name="description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />

        <meta
          hrefLang="en-uk"
          property="og:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta hrefLang="en" property="og:type" content="website" />
        <meta
          hrefLang="en-uk"
          property="og:title"
          content="Portraits of European Professionals"
        />
        <meta
          hrefLang="en-uk"
          property="og:description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />
        <meta
          hrefLang="en-uk"
          property="og:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/2b50689cbc495bd902e8d209d275c3778b0ff78d-168x56.svg"
        />

        <meta hrefLang="en" name="twitter:card" content="summary_large_image" />
        <meta
          hrefLang="en-uk"
          property="twitter:domain"
          content="european-professionals.netlify.app"
        />
        <meta
          hrefLang="en-uk"
          property="twitter:url"
          content="https://european-professionals.netlify.app/"
        />
        <meta
          hrefLang="en-uk"
          name="twitter:title"
          content="Portraits of European Professionals"
        />
        <meta
          hrefLang="en-uk"
          name="twitter:description"
          content="Every day, hundreds of professionals in EU member states are actively shaping European policy. On this website, we put these professionals in the spotlight."
        />
        <meta
          hrefLang="en-uk"
          name="twitter:image"
          content="https://cdn.sanity.io/images/7eygyk4k/production/2b50689cbc495bd902e8d209d275c3778b0ff78d-168x56.svg"
        />
        <title>European profesionals</title>
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
