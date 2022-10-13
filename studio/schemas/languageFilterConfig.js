export default {
  supportedLanguages: [
    { id: "nl", title: "Dutch (NL)" },
    { id: "en", title: "English" },
  ],
  defaultLanguages: ["nl"],
  // Only show language filter for document type `document` (schemaType.name)
  documentTypes: ["document"],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith("locale") ||
    selectedLanguageIds.includes(field.name),
};
