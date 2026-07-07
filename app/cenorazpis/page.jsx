import { getPricing } from "../../sanity/getSettings";

export const revalidate = 60;
export const metadata = { title: "Ценоразпис — Д-р Шенай Кадир" };

const BGN_RATE = 1.95583;
const toBGN = (eur) => (eur * BGN_RATE).toFixed(2);

export default async function PricingPage() {
  const data = await getPricing();
  const items = (data?.items || []).filter(
    (i) => i && typeof i.name === "string" && typeof i.category === "string"
  );

  const order = [...new Set(items.map((i) => i.category))];
  const groups = order.map((cat) => ({
    title: cat,
    rows: items.filter((i) => i.category === cat),
  }));

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 pt-36 pb-12 text-center md:pt-44">
          <h1 className="text-4xl md:text-5xl text-deep">Ценоразпис</h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          {groups.length === 0 ? (
            <p className="text-center text-muted">
              Ценоразписът се попълва в панела.
            </p>
          ) : (
            <div className="space-y-14">
              {groups.map((g, ci) => (
                <div key={ci}>
                  <h2 className="mb-5 font-serif text-3xl md:text-4xl text-deep">
                    {g.title}
                  </h2>
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-sage-soft/70 text-sm font-bold text-deep">
                          <th className="px-6 py-4">Процедура</th>
                          <th className="px-6 py-4 text-right">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {g.rows.map((it, ii) => (
                          <tr
                            key={ii}
                            className="border-t border-line odd:bg-enamel even:bg-porcelain/40"
                          >
                            <td className="px-6 py-3.5 font-medium text-ink">
                              {it.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-3.5 text-right text-muted">
                              {it.price} € / {toBGN(it.price)} лв
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}