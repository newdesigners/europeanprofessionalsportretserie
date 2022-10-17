import { MdOutlineSettings } from "react-icons/md";

export default {
  name: "siteConfig",
  title: "Site Settings",
  type: "document",
  icon: MdOutlineSettings,
  i18n: true,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url.",
    },
  ],
};
