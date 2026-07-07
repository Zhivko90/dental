"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ServicesMenu({ services }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function onClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-haspopup="true"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-deep transition hover:bg-sage-soft hover:text-teal"
            >
                Услуги
                <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {open && services.length > 0 && (
                <div className="absolute left-0 top-full pt-3">
                    <div className="grid w-64 gap-1 rounded-2xl border border-line bg-enamel p-2 shadow-soft">
                        <Link
                            href="/uslugi"
                            onClick={() => setOpen(false)}
                            className="rounded-xl px-4 py-2 text-sm font-bold text-teal transition hover:bg-sage-soft"
                        >
                            Всички услуги →
                        </Link>
                        <div className="my-1 h-px bg-line" />
                        {services.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/uslugi/${s.slug}`}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-4 py-2 text-sm text-deep transition hover:bg-sage-soft hover:text-teal"
                            >
                                {s.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}