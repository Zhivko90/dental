import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "about",
  title: "За мен",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Заглавие", type: "string" }),
    defineField({ name: "text", title: "Текст", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "image",
      title: "Снимка",
      type: "image",
      options: { hotspot: true, accept: "image/jpeg,image/png,image/webp" },
    }),
    defineField({ name: "mission", title: "Моята мисия", type: "text", rows: 4 }),
    defineField({ name: "vision", title: "Моята визия", type: "text", rows: 4 }),
    defineField({
      name: "values",
      title: "Моите ценности",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "valueItem",
          fields: [
            defineField({ name: "title", title: "Заглавие", type: "string", validation: (r) => r.required() }),
            defineField({ name: "text", title: "Описание", type: "text", rows: 2, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "За мен" }) },
});