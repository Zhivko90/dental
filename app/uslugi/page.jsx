import Link from "next/link";
import { client } from "../../sanity/client";
import { SERVICES_QUERY } from "../../sanity/queries";
import ServiceImage from "../../components/ServiceImage";

export const metadata = {
    title: "Услуги — Аура Дент",
};

export const revalidate = 60;

export default async function ServicesPage() {
    const services = await client.fetch(SERVICES_QUERY);

    return (
        <main className="mx-auto max-w-wrap px-6 pt-32 pb-24">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal">
                <span className="h-px w-6 bg-gold" />
                Дентални услуги
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl text-deep">Нашите услуги</h1>

            {services.length === 0 ? (
                <p className="mt-8 text-muted">
                    Все още няма добавени услуги. Влез в{" "}
                    <Link href="/studio" className="text-teal underline">
                        панела
                    </Link>{" "}
                    и публикувай първата.
                </p>
            ) : (
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <Link
                            key={s._id}
                            href={`/uslugi/${s.slug}`}
                            className="group overflow-hidden rounded-2xl border border-line bg-enamel transition hover:shadow-soft"
                        >
                            <div className="relative aspect-[3/2] w-full overflow-hidden bg-porcelain">
                                <ServiceImage
                                    image={s.image}
                                    alt={s.title}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-contain p-3"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="font-serif text-2xl text-deep">{s.title}</h2>
                                {s.excerpt && (
                                    <p className="mt-2 text-sm text-muted">{s.excerpt}</p>
                                )}
                                <span className="mt-4 inline-block text-sm font-bold text-teal">
                                    Научете повече →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
}