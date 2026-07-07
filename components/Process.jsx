const STEPS = [
  {
    title: "Запазете час",
    text: "Обадете се или пишете — избираме удобно за вас време бързо и лесно.",
  },
  {
    title: "Преглед и диагностика",
    text: "3D сканиране и индивидуален план за лечение, съобразен с вашия случай.",
  },
  {
    title: "Лечение и резултат",
    text: "Прецизна процедура с дълготраен и предвидим резултат.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-wrap px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-6 bg-gold" />
            Как протича посещението
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl text-deep">
            Три прости стъпки
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-line bg-enamel p-8 pt-10 shadow-soft"
            >
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-teal font-serif text-lg font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="font-serif text-2xl text-deep">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}