"use client";

import { useState } from "react";

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-enamel">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-deep"
      >
        {q}
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
          className={`flex-none text-teal transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <p className="px-6 pb-5 leading-relaxed text-muted">{a}</p>
      )}
    </div>
  );
}

export default function Faq({ items }) {
  if (!items?.length) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-wrap px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal">
            <span className="h-px w-6 bg-gold" />
            Въпроси и отговори
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl text-deep">
            Често задавани въпроси
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <Item key={i} q={it.question} a={it.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}