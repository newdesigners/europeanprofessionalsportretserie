import React from "react";
import { client } from "../../lib/client";
// components
import { About } from "../../components/molecules/About";
import { Footer } from "../../components/molecules/Footer";
import { Navigation } from "../../components/molecules/Navigation";
import Head from "next/head";

export const getServerSideProps = async ({ locale }) => {
  // navigation
  const navigationQuery = `*[_type == "navigation" && __i18n_lang == $lang]`;
  const navigation = await client.fetch(navigationQuery, { lang: locale });
  // pages
  const pageQuery = `*[_type == "page" && __i18n_lang == $lang]`;
  const page = await client.fetch(pageQuery, { lang: locale });

  // about
  const aboutQuery = `*[_type == "about" && __i18n_lang == $lang]`;
  const about = await client.fetch(aboutQuery, { lang: locale });
  // footer
  const footerQuery = `*[_type == "footer" && __i18n_lang == $lang]`;
  const footer = await client.fetch(footerQuery, { lang: locale });
  return {
    props: { navigation, page, footer, about },
  };
};

export default function AboutPage({ navigation, page, about, footer }) {
  return (
    <>
      <Head>
        <title>{about[0]?.title}</title>
        <meta name="description" content="About us page" />
        <meta
          property="og:title"
          content="About - Portraits of European Professionals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation navigation={navigation} page={page} />
      <About about={about[0]} />
      <Footer footer={footer[0]} page={page} />
    </>
  );
}
