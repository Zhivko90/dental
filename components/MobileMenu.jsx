"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu({ services = [], phone }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Отвори меню"
        className="flex h-10 w-10 items-center justify-center rounded-full text-deep"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-deep/40" onClick={close} />

          <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col overflow-y-auto overscroll-contain bg-enamel p-6">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-deep">Меню</span>
              <button
                type="button"
                onClick={close}
                aria-label="Затвори меню"
                className="flex h-10 w-10 items-center justify-center rounded-full text-deep"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1">
              <Link href="/" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep active:bg-sage-soft">Начало</Link>
              <Link href="/uslugi" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep active:bg-sage-soft">Услуги</Link>

              {services.length > 0 && (
                <div className="ml-3 flex flex-col gap-1 border-l border-line pl-3">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/uslugi/${s.slug}`} onClick={close} className="rounded-xl px-3 py-2 text-sm text-muted active:bg-sage-soft">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/za-men" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep active:bg-sage-soft">За мен</Link>
              <Link href="/cenorazpis" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep active:bg-sage-soft">Ценоразпис</Link>
              <Link href="/kontakti" onClick={close} className="rounded-xl px-4 py-3 font-semibold text-deep active:bg-sage-soft">Контакти</Link>
            </nav>

            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                onClick={close}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-bold text-white"
              >
                Обади се
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}