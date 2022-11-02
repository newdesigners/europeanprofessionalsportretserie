import { client } from "../lib/client";
import { useState } from "react";

// components
import { Navigation } from "../components/molecules/Navigation";
import { Banner } from "../components/molecules/banner";
import { InterviewPreview } from "../components/molecules/InterviewPreview";
import { Footer } from "../components/molecules/Footer";
import { ButtonLarge } from "../components/atoms/ButtonLarge";

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
  return {
    props: { banner, navigation, page, interview, footer },
  };
};

export default function Home({ banner, navigation, page, interview, footer }) {
  const [isMore, setIsMore] = useState(true);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    console.log(isMore, visible);
    setVisible(visible + 1);

    if (visible == interview.length) {
      setIsMore(false);
    }
  };
  return (
    <>
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
        </div>
        {isMore && (
          <ButtonLarge text={page[1].buttonMore} showMore={showMoreItems} />
        )}
      </main>

      <Footer footer={footer[0]} page={page} />
    </>
  );
}

/* TODO: 

COMPONENTEN
[x] about component
[x] footer component
[x] interview component
[x] interview preview component
[x] button component
[x] banner component
[x] Navigatie component

PAGINAS
[x] about pagina
[x] interview pagina

ANIMATIES
[ ] menu transitie
[ ] pagina transities

OVERIGE
[ ] desktop style
[ ] scroll smooth
[ ] desktop menu
[ ] navigatie link active blauw maken
[ ] alt text op foto's
[ ] fix routing, links
[ ] interview quote afkorten als quote lang is
[x] Logo's bij about page in grid zetten
[ ] laad meer button alleen tonen bij het laden van meer interviews anders niet
*/
