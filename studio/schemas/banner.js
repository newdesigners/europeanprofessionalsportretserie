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
      title: "Italic Text",
      name: "italicText",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Images",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
  ],
};
