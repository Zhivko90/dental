import Link from "next/link";
import { client } from "../sanity/client";
import {
  SERVICES_NAV_QUERY,
  SETTINGS_QUERY,
  CONTACT_QUERY,
} from "../sanity/queries";

export const revalidate = 60;

export default async function Footer() {
  const [services, settings, contact] = await Promise.all([
    client.fetch(SERVICES_NAV_QUERY),
    client.fetch(SETTINGS_QUERY),
    client.fetch(CONTACT_QUERY),
  ]);

  const name = settings?.siteName || "Д-р Шенай Кадир";

  return (
    <footer className="mt-24 bg-deep text-porcelain">
      <div className="mx-auto max-w-wrap px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl tracking-tight text-white">{name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-porcelain/70">
              Съвременна дентална грижа с 3D диагностика и минимално инвазивни
              методи — за здрава и красива усмивка.
            </p>
            <div className="mt-6 flex gap-3">
              {settings?.facebook && (
                <a href={settings.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-white/40 hover:bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9c0-.6.4-1 1-1Z" /></svg>
                </a>
              )}
              {settings?.instagram && (
                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-white/40 hover:bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Навигация</h3>
            <ul className="mt-4 space-y-3 text-sm text-porcelain/70">
              <li><Link href="/" className="transition hover:text-white">Начало</Link></li>
              <li><Link href="/uslugi" className="transition hover:text-white">Услуги</Link></li>
              <li><Link href="/za-men" className="transition hover:text-white">За мен</Link></li>
              <li><Link href="/cenorazpis" className="transition hover:text-white">Ценоразпис</Link></li>
              <li><Link href="/kontakti" className="transition hover:text-white">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Услуги</h3>
            <ul className="mt-4 space-y-3 text-sm text-porcelain/70">
              {services.length === 0 ? (
                <li className="text-porcelain/50">Скоро…</li>
              ) : (
                services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/uslugi/${s.slug}`} className="transition hover:text-white">{s.title}</Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Контакти</h3>
            <ul className="mt-4 space-y-3 text-sm text-porcelain/70">
              {contact?.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition hover:text-white">{contact.phone}</a>
                </li>
              )}
              {contact?.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="transition hover:text-white">{contact.email}</a>
                </li>
              )}
              {contact?.address && <li>{contact.address}</li>}
              {contact?.hours && <li className="whitespace-pre-line text-porcelain/50">{contact.hours}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-porcelain/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {name}. Всички права запазени.</p>
         <p>
            Изработка:{" "}
            <a
              href="https://webkodo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#8fc0ec] underline decoration-[#8fc0ec]/40 underline-offset-2 transition hover:text-white hover:decoration-white"
            >
              Живко Желязков
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}