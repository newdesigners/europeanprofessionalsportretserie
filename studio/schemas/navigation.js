import { GrNavigate } from "react-icons/gr";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: GrNavigate,
  i18n: true,
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "navigation",
      title: "navigation bar",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
        },
      ],
    },
    {
      name: "footer",
      title: "Footer navigation",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
        },
      ],
    },
  ],
};
