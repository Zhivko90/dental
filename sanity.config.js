import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schema";

const singleton = (S, id, type, title) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(type).documentId(id).title(title));

export default defineConfig({
  name: "default",
  title: "Д-р Шенай Кадир — Админ панел",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Съдържание")
          .items([
            singleton(S, "home", "home", "Начало"),
            S.documentTypeListItem("service").title("Услуги"),
            singleton(S, "about", "about", "За мен"),
            singleton(S, "pricing2", "pricing", "Ценоразпис"),
            singleton(S, "contact", "contact", "Контакти"),
            S.divider(),
            singleton(S, "settings", "settings", "Настройки"),
          ]),
    }),
    visionTool(),
  ],
  document: {
    unstable_comments: { enabled: false },
  },
  schema: { types: schemaTypes },
});