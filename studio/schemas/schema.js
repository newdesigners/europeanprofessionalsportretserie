import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// import custom schemas
import interview from "./interviews";
import about from "./about";
import navigation from "./navigation";
import page from "./page";
import banner from "./banner";
import siteConfig from "./siteConfig";
import footer from "./footer";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    interview,
    about,
    navigation,
    page,
    banner,
    siteConfig,
    footer,
  ]),
});
