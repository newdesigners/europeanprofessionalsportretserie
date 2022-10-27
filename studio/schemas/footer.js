export default {
  title: "Footer",
  name: "footer",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Contact",
      name: "contact",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "volg ons",
      name: "volgOns",
      type: "string",
    },
    {
      title: "Linkedin",
      name: "linkedin",
      type: "url",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "url",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
    },
    {
      name: "logos",
      type: "array",
      title: "Logo's",
      of: [
        {
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
    },
    {
      title: "copyright text",
      name: "copyrightText",
      type: "string",
    },
  ],
};
