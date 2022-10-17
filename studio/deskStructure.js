import S from "@sanity/desk-tool/structure-builder";
import { FiHome } from "react-icons/fi";
import { GrSettingsOption } from "react-icons/gr";
import { RiLayoutBottomLine } from "react-icons/ri";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(GrSettingsOption)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Navigation")
                .schemaType("navigation")
                .child(S.documentTypeList("navigation").title("navigation")),
              S.listItem()
                .title("Site config")
                .schemaType("siteConfig")
                .child(S.documentTypeList("siteConfig").title("siteConfig")),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Home")
        .icon(FiHome)
        .child(
          S.list()
            .title("Home")
            .items([
              S.listItem()
                .title("Banner")
                .schemaType("banner")
                .child(S.documentTypeList("banner").title("Banner")),
            ])
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Page")
            .items([
              S.listItem()
                .title("Page")
                .schemaType("page")
                .child(S.documentTypeList("page").title("Page")),
              S.listItem()
                .title("Footer")
                .icon(RiLayoutBottomLine)
                .schemaType("footer")
                .child(S.documentTypeList("footer").title("Footer")),
              S.divider(),
              S.listItem()
                .title("Interviews")
                .schemaType("interview")
                .child(S.documentTypeList("interview").title("interview")),
              S.listItem()
                .title("About")
                .schemaType("about")
                .child(S.documentTypeList("about").title("About")),
            ])
        ),
    ]);
