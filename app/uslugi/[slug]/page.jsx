import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/client";
import {
  SERVICE_BY_SLUG_QUERY,
  SERVICE_SLUGS_QUERY,
} from "../../../sanity/queries";
import ServiceSections from "../../../components/ServiceSections";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(SERVICE_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });
  if (!service) return { title: "Услуга — Д-р Шенай Кадир" };
  return {
    title: `${service.title} — Д-р Шенай Кадир`,
    description: service.excerpt || undefined,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });

  if (!service) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden">

      <div className="mx-auto max-w-wrap px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/uslugi"
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal transition hover:gap-2"
          >
            <span>←</span> Всички услуги
          </Link>

          <h1 className="mt-6 text-4xl md:text-5xl text-deep">{service.title}</h1>
        </div>

        <ServiceSections sections={service.sections} />
      </div>
    </main>
  );
}