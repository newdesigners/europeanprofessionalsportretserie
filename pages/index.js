import { client } from "../lib/client";
import { useState, useEffect } from "react";

// components
import { Navigation } from "../components/molecules/Navigation";
import { Banner } from "../components/molecules/Banner";
import { InterviewPreview } from "../components/molecules/InterviewPreview";
import { Footer } from "../components/molecules/Footer";
import { ButtonLarge } from "../components/atoms/ButtonLarge";
import Head from "next/head";

export const getServerSideProps = async ({ locale }) => {
  // banner
  const bannerQuery = `*[_type == "banner" && __i18n_lang == $lang]`;
  const banner = await client.fetch(bannerQuery, {
    lang: locale,
  });

  // navigation
  const navigationQuery = `*[_type == "navigation" && __i18n_lang == $lang]`;
  const navigation = await client.fetch(navigationQuery, { lang: locale });
  // pages
  const pageQuery = `*[_type == "page" && __i18n_lang == $lang]`;
  const page = await client.fetch(pageQuery, { lang: locale });
  // interview
  const interviewQuery = `*[_type == "interview" && __i18n_lang == $lang]`;
  const interview = await client.fetch(interviewQuery, { lang: locale });

  // footer
  const footerQuery = `*[_type == "footer" && __i18n_lang == $lang]`;
  const footer = await client.fetch(footerQuery, { lang: locale });

  const siteConfigQuery = `*[_type == "siteConfig" && __i18n_lang == $lang]`;
  const siteConfig = await client.fetch(siteConfigQuery, { lang: locale });

  return {
    props: { banner, navigation, page, interview, footer, siteConfig },
  };
};

export default function Home({
  banner,
  navigation,
  page,
  interview,
  footer,
  siteConfig,
}) {
  const [isMore, setIsMore] = useState(true);
  const [visible, setVisible] = useState(9);

  const showMoreItems = () => {
    setVisible(visible + 3);
    visible + 3 < interview.length ? setIsMore(true) : setIsMore(false);
  };

  const interviewTime = interview.map((inter) => inter._updatedAt);
  const interviewArr = interviewTime;
  const sortArray = interviewArr.sort();

  console.log("interviewArr", interviewArr);
  console.log("interviewArr reverse", sortArray.reverse());

  const test = interview
    .map((interview) => interview._updatedAt)
    .sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    })
    .reverse()
    .slice(0, visible);
  console.log(test);
  return (
    <>
      <Head>
        <title>{siteConfig[0]?.title}</title>
      </Head>
      <Navigation
        navigation={navigation}
        page={page}
        secondaryNav={true}
        secondaryLink={true}
        secondaryBorder={true}
        mainOpen={false}
        menuColor={true}
        menuColorMain={false}
      />
      <Banner banner={banner} />

      <main className="flex flex-col items-center pb-6" id="stories">
        <h2 className="text-Phone/header2 font-merriweather-bold  pt-8 lg:text-Desktop/Header2 lg:pt-16">
          {page[1].text}
        </h2>

        <div className="grid grid-cols-2 mt-4 pb-14 justify-items-center gap-y-4 gap-12 lg:gap-20 lg:gap-y-11 lg:grid-cols-3 lg:mt-12 lg:justify-items-center lg:mx-32">
          {interview.slice(0, visible).map((interview) => (
            <InterviewPreview
              key={interview._id}
              interview={interview}
              page={page}
            />
          ))}

          {/* {interview
            .map((interview) => (
              <InterviewPreview
                key={interview._id}
                interview={interview}
                page={page}
              />
            ))
            .sort(function (a, b) {
              return a < b ? -1 : a > b ? 1 : 0;
            })
            .reverse()
            .slice(0, visible)} */}
        </div>
        {isMore && (
          <ButtonLarge text={page[0].buttonMore} showMore={showMoreItems} />
        )}
      </main>

      <Footer footer={footer[0]} page={page} />
    </>
  );
}
