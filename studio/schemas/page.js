import { MdWebAsset } from "react-icons/md";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: MdWebAsset,
  i18n: true,
  fields: [
    { title: "Page Title", name: "title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Text",
      name: "text",
      type: "string",
    },
  ],
};
