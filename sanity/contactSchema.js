import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Контакти",
  type: "document",
  fields: [
    defineField({ name: "phone", title: "Телефон", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", title: "Имейл", type: "string", validation: (r) => r.required().email() }),
    defineField({ name: "address", title: "Адрес", type: "string", description: "Пълен адрес — от него се прави картата автоматично." }),
    defineField({ name: "hours", title: "Работно време", type: "text", rows: 3, description: "Напр. Пон–Пет: 09:00 – 18:00" }),
  ],
  preview: { prepare: () => ({ title: "Контакти" }) },
});