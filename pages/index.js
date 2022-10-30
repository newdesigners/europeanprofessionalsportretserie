import Head from "next/head";
import { client } from "../lib/client";

// components
import { Navigation } from "../components/molecules/Navigation";
import { Banner } from "../components/molecules/banner";
import { InterviewPreview } from "../components/molecules/InterviewPreview";
import { Footer } from "../components/molecules/Footer";
import { ButtonLarge } from "../components/atoms/ButtonLarge";
import { Interview } from "../components/molecules/Interview";

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
  return (
    <>
      <Navigation navigation={navigation} page={page} />
      <Banner banner={banner} />
      {/* interview stuk */}

      <main className="flex flex-col items-center pb-6">
        <h2 className="text-Phone/header2 font-merriweather-bold  pt-8">
          {page[1].text}
        </h2>
        <div className="flex mx-4  mt-4 flex-wrap justify-around">
          {interview.map((interview) => (
            <InterviewPreview
              key={interview._id}
              interview={interview}
              page={page}
            />
          ))}
        </div>
        <ButtonLarge text={page[1].buttonMore} />
      </main>
      {/* footer */}
      <Footer footer={footer[0]} page={page} />
    </>
  );
}

/* TODO: 

COMPONENTEN
[ ] about component
[x] footer component
[ ] interview component
[x] interview preview component
[x] button component
[x] banner component
[x] Navigatie component

PAGINAS
[ ] about pagina
[ ] interview pagina

ANIMATIES
[ ] menu transitie
[ ] pagina transities

OVERIGE
[ ] desktop style
[ ] desktop menu
[ ] navigatie link active blauw maken
[ ] alt text op foto's
[ ] fix routing, links
[ ] interview quote afkorten als quote lang is
*/
