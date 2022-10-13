export default {
  title: "About",
  name: "about",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "landing foto",
      name: "landingFoto",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Ons Verhaal 1",
      name: "onsVerhaal1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Ons Verhaal 2",
      name: "onsVerhaal2",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "foto",
      name: "foto",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Wie zit er achter het project?",
      name: "wieZitErAchterHetProject",
      type: "string",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Person Image",
      name: "personImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Persoon achter het verhaal",
      name: "persoonAchterHetVerhaal",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Met dank aan",
      name: "metDankAan",
      type: "string",
    },
    {
      name: "brandImages",
      title: "Brand Images",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      title: "Wil je jouw verhaal delen",
      name: "wilJeJouwVerhaalDelen",
      type: "string",
    },
    {
      title: "Contact",
      name: "contact",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
