import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "home",
  title: "Начало",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Снимка на доктора (начална страница)",
      type: "image",
      options: { hotspot: true, accept: "image/jpeg,image/png,image/webp" },
    }),
    defineField({
      name: "faq",
      title: "Често задавани въпроси",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faqItem",
          fields: [
            defineField({ name: "question", title: "Въпрос", type: "string", validation: (r) => r.required() }),
            defineField({ name: "answer", title: "Отговор", type: "text", rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Начало" }) },
});