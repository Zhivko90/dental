import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "service",
  title: "Услуга",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Заглавие", type: "string", validation: (r) => r.required().min(3).max(80) }),
    defineField({ name: "slug", title: "URL адрес", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Кратко описание", type: "text", rows: 3, validation: (r) => r.required().min(20).max(200) }),
    defineField({ name: "image", title: "Основна снимка", type: "image", options: { hotspot: true, accept: "image/jpeg,image/png,image/webp" } }),
    defineField({
      name: "sections",
      title: "Секции (случаи, процедури)",
      type: "array",
      description: "Всяка секция е снимка + описание. Оформлението ляво/дясно се редува автоматично.",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          title: "Секция",
          fields: [
            defineField({ name: "heading", title: "Заглавие на секцията", type: "string" }),
            defineField({ name: "image", title: "Снимка", type: "image", options: { hotspot: true, accept: "image/jpeg,image/png,image/webp" } }),
            defineField({ name: "text", title: "Описание", type: "array", of: [{ type: "block" }] }),
            defineField({ name: "highlighted", title: "Тъмен акцентен фон", type: "boolean", initialValue: false }),
          ],
          preview: { select: { title: "heading", media: "image" }, prepare: ({ title, media }) => ({ title: title || "Секция", media }) },
        }),
      ],
    }),
    defineField({ name: "order", title: "Подредба", type: "number", validation: (r) => r.required().integer().min(1) }),
  ],
});