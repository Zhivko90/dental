import { PortableText } from "next-sanity";
import { getAbout } from "../../sanity/getSettings";
import ServiceImage from "../../components/ServiceImage";

export const revalidate = 60;
export const metadata = { title: "За мен — Д-р Шенай Кадир" };

export default async function AboutPage() {
  const s = await getAbout();

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-wrap items-center gap-10 px-6 pt-36 pb-20 md:grid-cols-2 md:gap-14 md:pt-44">
          <div>
            <h1 className="text-4xl md:text-5xl text-deep">
              {s?.heading || "Запознайте се с мен"}
            </h1>
            {s?.text && (
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <PortableText value={s.text} />
              </div>
            )}
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-enamel shadow-soft">
              {s?.image?.asset ? (
                <ServiceImage image={s.image} alt="Доктор" sizes="(max-width: 768px) 80vw, 400px" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-sm text-muted">
                  Качете снимка в<br />„За мен“
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {(s?.mission || s?.vision) && (
        <section className="bg-enamel py-20 md:py-28">
          <div className="mx-auto max-w-wrap px-6">
            <h2 className="text-center text-4xl md:text-5xl text-deep">Моята мисия и визия</h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              {s?.mission && (
                <div className="rounded-3xl border border-line bg-porcelain p-8 shadow-soft">
                  <h3 className="font-serif text-xl text-teal">Моята мисия</h3>
                  <p className="mt-3 leading-relaxed text-ink">{s.mission}</p>
                </div>
              )}
              {s?.vision && (
                <div className="rounded-3xl border border-line bg-porcelain p-8 shadow-soft">
                  <h3 className="font-serif text-xl text-teal">Моята визия</h3>
                  <p className="mt-3 leading-relaxed text-ink">{s.vision}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {s?.values?.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-wrap px-6">
            <h2 className="text-center text-4xl md:text-5xl text-deep">Моите ценности</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {s.values.map((v, i) => (
                <div key={i} className="rounded-3xl border border-line bg-enamel p-8 text-center shadow-soft">
                  <h3 className="font-serif text-xl text-deep">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}