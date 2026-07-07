import Link from "next/link";
import { client } from "../sanity/client";
import { SERVICES_NAV_QUERY, SETTINGS_QUERY, CONTACT_QUERY } from "../sanity/queries";
import ServicesMenu from "./ServicesMenu";
import MobileMenu from "./MobileMenu";
import HeaderShell from "./HeaderShell";

export const revalidate = 60;

export default async function Header() {
  const [services, settings, contact] = await Promise.all([
    client.fetch(SERVICES_NAV_QUERY),
    client.fetch(SETTINGS_QUERY),
    client.fetch(CONTACT_QUERY),
  ]);

  const name = settings?.siteName || "Д-р Шенай Кадир";
  const phone = contact?.phone || "+359 88 000 0000";

  return (
    <HeaderShell>
      <Link
        href="/"
        className="whitespace-nowrap font-serif text-lg md:text-xl text-deep tracking-tight"
      >
        {name}
      </Link>

      <nav className="hidden items-center gap-1 md:flex">
        <Link href="/" className="rounded-full px-4 py-2 text-sm font-semibold text-deep transition hover:bg-sage-soft hover:text-teal">Начало</Link>
        <ServicesMenu services={services} />
        <Link href="/za-men" className="rounded-full px-4 py-2 text-sm font-semibold text-deep transition hover:bg-sage-soft hover:text-teal">За мен</Link>
        <Link href="/cenorazpis" className="rounded-full px-4 py-2 text-sm font-semibold text-deep transition hover:bg-sage-soft hover:text-teal">Ценоразпис</Link>
        <Link href="/kontakti" className="rounded-full px-4 py-2 text-sm font-semibold text-deep transition hover:bg-sage-soft hover:text-teal">Контакти</Link>
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-teal px-5 py-2 text-sm font-bold text-white transition hover:bg-teal-hover sm:inline-flex"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
          </svg>
          Обади се
        </a>
        <MobileMenu services={services} phone={phone} />
      </div>
    </HeaderShell>
  );
}