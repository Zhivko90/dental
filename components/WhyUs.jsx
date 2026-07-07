const ITEMS = [
  {
    title: "Прецизност",
    text: "Дигитална диагностика от последно поколение за точен план на всяко лечение.",
    icon: (
      <path d="M12 2a7 7 0 0 0-7 7c0 2 .7 3 1.4 5.2C7.2 16.6 7.7 22 9 22c1 0 1-3 1.5-4.5.3-.9.7-1.5 1.5-1.5s1.2.6 1.5 1.5C15 19 15 22 16 22c1.3 0 1.8-5.4 2.6-7.8C19.3 12 20 11 20 9a7 7 0 0 0-8-7Z" />
    ),
  },
  {
    title: "Комфорт",
    text: "Вашето спокойствие е приоритет — щадящи методи и грижа на всяка стъпка.",
    icon: (
      <path d="M12 21s-7-4.5-9.2-9C1.5 8.5 3 5 6 5c1.8 0 3 1 4 2.3C11 6 12.2 5 14 5c3 0 4.5 3.5 3.2 7-2.2 4.5-9.2 9-9.2 9Z" />
    ),
  },
  {
    title: "Доверие",
    text: "Изграждаме дългосрочни отношения, базирани на честност и качество.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Zm-1.2 12.5 5-5-1.4-1.4-3.6 3.6-1.6-1.6L8 12.5l2.8 3Z" />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-porcelain via-sage-soft/40 to-porcelain" />

      <div className="mx-auto max-w-wrap px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-6 bg-gold" />
            Защо да изберете нас
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl text-deep">
            Три принципа зад всяка процедура
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-line bg-enamel p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sage-soft text-teal">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-deep">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}