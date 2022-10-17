export default {
  title: "Banner",
  name: "banner",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Images",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
