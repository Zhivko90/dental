"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu({ services = [], phone }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Отвори меню"
        className="flex h-10 w-10 items-center justify-center rounded-full text-deep transition hover:bg-sage-soft"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-deep/40 backdrop-blur-sm"
            onClick={close}
          />

          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-enamel p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-deep">Меню</span>
              <button
                type="button"
                onClick={close}
                aria-label="Затвори меню"
                className="flex h-10 w-10 items-center justify-center rounded-full text-deep transition hover:bg-sage-soft"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              <Link href="/" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep transition hover:bg-sage-soft">Начало</Link>
              <Link href="/uslugi" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep transition hover:bg-sage-soft">Услуги</Link>

              {services.length > 0 && (
                <div className="ml-3 flex flex-col gap-1 border-l border-line pl-3">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/uslugi/${s.slug}`} onClick={close} className="rounded-xl px-3 py-2 text-sm text-muted transition hover:bg-sage-soft hover:text-teal">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/za-men" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep transition hover:bg-sage-soft">За мен</Link>
              <Link href="/cenorazpis" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep transition hover:bg-sage-soft">Ценоразпис</Link>
              <Link href="/kontakti" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep transition hover:bg-sage-soft">Контакти</Link>
            </nav>

            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                onClick={close}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-bold text-white transition hover:bg-teal-hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
                </svg>
                Обади се
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}