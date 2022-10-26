import React from "react";

import { Footer } from "../../components/molecules/Footer";
import { Interview } from "../../components/molecules/Interview";
import { Navigation } from "../../components/molecules/Navigation";
import { client } from "../../lib/client";

export const getServerSideProps = async ({ locale, params: { slug } }) => {
  // navigation
  const navigationQuery = `*[_type == "navigation" && __i18n_lang == $lang]`;
  const navigation = await client.fetch(navigationQuery, { lang: locale });
  // pages
  const pageQuery = `*[_type == "page" && __i18n_lang == $lang]`;
  const page = await client.fetch(pageQuery, { lang: locale });
  // interview
  const interviewQuery = `*[_type == "interview" && slug.current == '${slug}' && __i18n_lang == $lang][0]`;
  const interview = await client.fetch(interviewQuery, { lang: locale });
  // footer
  const footerQuery = `*[_type == "footer" && __i18n_lang == $lang]`;
  const footer = await client.fetch(footerQuery, { lang: locale });
  return {
    props: { navigation, page, interview, footer },
  };
};

export default function StoryPage({ footer, navigation, page, interview }) {
  return (
    <>
      <Navigation navigation={navigation} page={page} />
      <Interview interview={interview} />
      <Footer footer={footer[0]} page={page} />
    </>
  );
}
