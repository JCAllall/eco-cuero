"use client";

import { useState } from "react";
import Image from "next/image";
import { lineas, trabajos } from "@/data/lineas";

export default function Galeria() {
  const [filtro, setFiltro] = useState<string>("todos");

  const visibles = filtro === "todos" ? trabajos : trabajos.filter((t) => t.linea === filtro);
  const lineaActiva = lineas.find((l) => l.id === filtro);

  return (
    <section id="trabajos" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-ink text-3xl md:text-5xl leading-tight max-w-2xl">
          Cada línea resuelve un tipo de mesa distinto.
        </h2>

        <div className="flex flex-wrap gap-2 mt-10">
          <button onClick={() => setFiltro("todos")} className={`font-body text-sm px-5 py-2.5 border transition-colors ${filtro === "todos" ? "bg-ink text-cream border-ink" : "border-sand text-ink/70 hover:border-ink/40"}`}>Todos</button>
          {lineas.map((l) => (
            <button key={l.id} onClick={() => setFiltro(l.id)} className={`font-body text-sm px-5 py-2.5 border transition-colors ${filtro === l.id ? "bg-ink text-cream border-ink" : "border-sand text-ink/70 hover:border-ink/40"}`}>{l.nombre}</button>
          ))}
        </div>

        {lineaActiva && (
          <p className="font-body text-ink/60 text-base mt-6 max-w-xl leading-relaxed">
            {lineaActiva.bajada}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {visibles.map((t) => (
            <figure key={t.src} className="relative aspect-[4/5] overflow-hidden bg-sand group">
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {t.cliente && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10">
                  <span className="font-body text-cream text-sm">{t.cliente}</span>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}