export default {
  title: "About",
  name: "about",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Our story",
      name: "ourStory",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
