import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "pricing",
  title: "Ценоразпис",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Процедури",
      type: "array",
      description:
        "Добави процедура, напиши категорията ѝ и цената. Процедурите с еднаква категория се групират автоматично в една таблица.",
      of: [
        defineArrayMember({
          type: "object",
          name: "priceItem",
          fields: [
            defineField({
              name: "category",
              title: "Категория",
              type: "string",
              description: "Напр. Педиатрия. Пиши същото име, за да е в същата таблица.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "name",
              title: "Процедура",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "price",
              title: "Цена в евро",
              type: "number",
              validation: (r) => r.required().min(0),
            }),
          ],
          preview: {
            select: { title: "name", category: "category", price: "price" },
            prepare(sel) {
              return {
                title: sel.title,
                subtitle:
                  (sel.category || "?") +
                  " · " +
                  (sel.price != null ? sel.price + " €" : ""),
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Ценоразпис" }) },
});