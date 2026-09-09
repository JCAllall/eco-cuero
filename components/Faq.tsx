"use client";

import { useState } from "react";

const preguntas = [
  { q: "¿Cuál es el mínimo de pedido?", a: "Trabajamos desde 10 unidades. Para cantidades menores consultanos igual, según el formato puede salir." },
  { q: "¿Cuánto tardan?", a: "Entre 10 y 15 días hábiles desde que aprobás el diseño. Si tenés una fecha de apertura, avisanos y vemos cómo acomodarlo." },
  { q: "¿Hacen envíos fuera de Rosario?", a: "Sí, a todo el país por transporte. El costo depende del destino y la cantidad." },
  { q: "¿Puedo ver una muestra antes de encargar?", a: "Sí. Te llevamos el material y una carta armada para que la veas en persona antes de confirmar." },
  { q: "¿Trabajan con mi diseño o lo hacen ustedes?", a: "Las dos. Si tenés el logo en vector, lo usamos directo. Si no, lo resolvemos nosotros." },
];

export default function Faq() {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-ink text-3xl md:text-5xl leading-tight">
          Preguntas frecuentes
        </h2>

        <div className="mt-12">
          {preguntas.map((p, i) => (
            <div key={p.q} className="border-t border-sand last:border-b">
              <button onClick={() => setAbierta(abierta === i ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left">
                <span className="font-display text-ink text-lg md:text-xl">{p.q}</span>
                <span className={`font-body text-clay text-2xl shrink-0 transition-transform duration-300 ${abierta === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {abierta === i && (
                <p className="font-body text-ink/65 leading-relaxed pb-6 max-w-xl">{p.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}