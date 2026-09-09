"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#trabajos", label: "Trabajos" },
  { href: "#material", label: "Material" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-cream/95 backdrop-blur border-b border-sand" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className={`font-display text-lg transition-colors ${scrolled ? "text-ink" : "text-cream"}`}>
          Tu Marca
        </a>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`font-body text-sm hidden sm:block transition-colors ${scrolled ? "text-ink/70 hover:text-ink" : "text-cream/80 hover:text-cream"}`}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="bg-clay text-cream font-body text-sm px-5 py-2.5 hover:bg-clay/90 transition-colors">
            Presupuesto
          </a>
        </div>
      </nav>
    </header>
  );
}