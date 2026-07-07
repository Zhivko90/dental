"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderShell({ children }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname && pathname.startsWith("/studio")) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-white/40 bg-porcelain/70 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-wrap items-center justify-between gap-6 px-6 py-4">
          {children}
        </div>
      </div>
    </header>
  );
}