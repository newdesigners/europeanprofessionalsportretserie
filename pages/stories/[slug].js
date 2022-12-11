import { useState } from "react";
import { Footer } from "../../components/molecules/Footer";
import { Interview } from "../../components/molecules/Interview";
import { Navigation } from "../../components/molecules/Navigation";
import { InterviewPreview } from "../../components/molecules/InterviewPreview";
import { ButtonLarge } from "../../components/atoms/ButtonLarge";
import { client } from "../../lib/client";
import Head from "next/head";

export const getStaticPaths = async ({ locales }) => {
  const query = `*[_type == "interview" && __i18n_lang == $lang] {
    slug {
      current
    }
  }`;

  const interviews = await client.fetch(query, { lang: locales });

  const paths = interviews.map((interview) => ({
    params: { slug: interview.slug.current },
    locale: locales,
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  // navigation
  const navigationQuery = `*[_type == "navigation" && __i18n_lang == $lang]`;
  const navigation = await client.fetch(navigationQuery, { lang: locale });
  // pages
  const pageQuery = `*[_type == "page" && __i18n_lang == $lang]`;
  const page = await client.fetch(pageQuery, { lang: locale });

  // interview
  const interviewQuery = `*[_type == "interview" && slug.current == $slug && __i18n_lang == $lang][0]`;
  const interview = await client.fetch(interviewQuery, {
    lang: locale,
    slug: slug,
  });

  // interview
  const interviewPrevQuery = `*[_type == "interview" && __i18n_lang == $lang]`;
  const interviewPrev = await client.fetch(interviewPrevQuery, {
    lang: locale,
  });
  // footer
  const footerQuery = `*[_type == "footer" && __i18n_lang == $lang]`;
  const footer = await client.fetch(footerQuery, { lang: locale });

  // siteConfig title
  const siteConfigQuery = `*[_type == "siteConfig" && __i18n_lang == $lang]`;
  const siteConfig = await client.fetch(siteConfigQuery, { lang: locale });
  return {
    props: { navigation, page, interview, footer, interviewPrev, siteConfig },
  };
};

export default function StoryPage({
  footer,
  navigation,
  page,
  interview,
  interviewPrev,
  siteConfig,
}) {
  const [isMore, setIsMore] = useState(true);
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible(visible + 3);
    visible + 3 < interviewPrev.length ? setIsMore(true) : setIsMore(false);
  };

  return (
    <>
      <Head>
        <title>
          {interview?.name} - {siteConfig[0].title}
        </title>
        <meta name="description" content={`${interview?.name} story`} />
        <meta
          property="og:title"
          content={`${interview?.name} - Portraits of European Professionals`}
        />
      </Head>
      <Navigation navigation={navigation} page={page} />
      {interview?.slug.current && (
        <Interview interview={interview} page={page} />
      )}

      <div className="flex flex-col items-center pb-10 lg:pb-14">
        <div className="grid grid-cols-2 mt-4 pb-14 justify-items-center gap-y-4 gap-12 lg:gap-20 lg:gap-y-11 lg:grid-cols-3 lg:mt-12 lg:justify-items-center lg:mx-32">
          {interviewPrev?.slice(0, visible).map((interview) => (
            <InterviewPreview
              key={interview._id}
              interview={interview}
              page={page}
            />
          ))}
        </div>
        {isMore && (
          <ButtonLarge text={page[0].buttonMore} showMore={showMoreItems} />
        )}
      </div>
      <Footer footer={footer[0]} page={page} />
    </>
  );
}
