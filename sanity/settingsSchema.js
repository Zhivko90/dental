import { defineType, defineField } from "sanity";

export default defineType({
  name: "settings",
  title: "Настройки",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Име (текстово лого)", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      title: "Лого (картинка) — по избор",
      type: "image",
      options: { accept: "image/png,image/svg+xml,image/webp" },
    }),
    defineField({ name: "facebook", title: "Facebook (пълен линк)", type: "url" }),
    defineField({ name: "instagram", title: "Instagram (пълен линк)", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Настройки" }) },
});