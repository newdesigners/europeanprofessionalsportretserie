import { MdOutlineAutoStories } from "react-icons/md";

export default {
  name: "interview",
  title: "Interview",
  type: "document",
  icon: MdOutlineAutoStories,
  i18n: true,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "interviewText",
      title: "Interview Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "number",
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
      title: "Meer verhalen",
      name: "meerVerhalen",
      type: "string",
    },
  ],
};
