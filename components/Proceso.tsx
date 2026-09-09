const pasos = [
  { n: "01", titulo: "Charlamos", texto: "Nos contás qué tipo de local tenés, cuántas cartas necesitás y en qué formato." },
  { n: "02", titulo: "Muestra física", texto: "Te llevamos el material y una carta armada para que la veas y la toques antes de decidir." },
  { n: "03", titulo: "Producción", texto: "Confirmado el diseño, fabricamos el lote completo con la terminación elegida." },
  { n: "04", titulo: "Entrega", texto: "Te las llevamos al local. En Rosario, sin cargo." },
];

export default function Proceso() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-ink text-3xl md:text-5xl leading-tight max-w-2xl">
          De la primera charla al local, en cuatro pasos.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {pasos.map((p) => (
            <div key={p.n}>
              <span className="font-display text-clay text-4xl">{p.n}</span>
              <h3 className="font-display text-ink text-xl mt-3">{p.titulo}</h3>
              <p className="font-body text-ink/60 mt-2 leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}