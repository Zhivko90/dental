import { getContact } from "../../sanity/getSettings";
import ContactForm from "../../components/ContactForm";

export const revalidate = 60;
export const metadata = { title: "Контакти — Д-р Шенай Кадир" };

export default async function ContactPage() {
  const c = await getContact();

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-wrap px-6 pt-36 pb-12 text-center md:pt-44">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-6 bg-gold" />
            Свържете се с нас
            <span className="h-px w-6 bg-gold" />
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl text-deep">Контакти</h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-wrap gap-10 px-6 lg:grid-cols-2">
          <div className="space-y-6">
            {c?.address && (
              <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(c.address)}&output=embed`}
                  className="h-72 w-full md:h-96"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Карта"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {c?.phone && (
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="rounded-2xl border border-line bg-enamel p-5 transition hover:shadow-soft"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">Телефон</p>
                  <p className="mt-1 font-semibold text-deep">{c.phone}</p>
                </a>
              )}

              {c?.email && (
                <a
                  href={`mailto:${c.email}`}
                  className="rounded-2xl border border-line bg-enamel p-5 transition hover:shadow-soft"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">Имейл</p>
                  <p className="mt-1 font-semibold text-deep">{c.email}</p>
                </a>
              )}

              {c?.address && (
                <div className="rounded-2xl border border-line bg-enamel p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">Адрес</p>
                  <p className="mt-1 font-semibold text-deep">{c.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-bold text-teal"
                  >
                    Упътване →
                  </a>
                </div>
              )}

              {c?.hours && (
                <div className="rounded-2xl border border-line bg-enamel p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal">Работно време</p>
                  <p className="mt-1 whitespace-pre-line font-semibold text-deep">{c.hours}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-enamel p-8 shadow-soft">
            <h2 className="font-serif text-2xl text-deep">Изпратете съобщение</h2>
            <p className="mt-1 text-sm text-muted">Ще се свържем с вас възможно най-скоро.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}