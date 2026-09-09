const ventajas = [
  {
    titulo: "Resiste la grasa",
    texto: "La superficie no absorbe. Lo que en cartón o papel plastificado queda marcado para siempre, acá sale con un trapo húmedo.",
  },
  {
    titulo: "No se cuartea",
    texto: "El cuero real se reseca y se parte en los dobleces con el uso diario. El eco cuero mantiene la flexibilidad.",
  },
  {
    titulo: "Color parejo",
    texto: "Al ser un material fabricado, dos cartas del mismo lote salen idénticas. Con cuero natural cada pieza varía.",
  },
  {
    titulo: "Sin origen animal",
    texto: "Cada vez más locales lo piden. Si tu carta tiene opciones veganas, el material de la tapa también comunica.",
  },
];

export default function EcoCuero() {
  return (
    <section className="bg-moss text-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-cream/50 text-xs tracking-[0.18em] uppercase mb-5">
          El material
        </p>

        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
          Una carta la tocan cien manos por día.
        </h2>

        <p className="font-body text-cream/75 text-lg mt-6 max-w-xl leading-relaxed">
          Elegimos eco cuero porque es el único material que aguanta ese uso sin
          verse gastado a los seis meses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-14">
          {ventajas.map((v) => (
            <div key={v.titulo} className="border-t border-cream/20 pt-6">
              <h3 className="font-display text-xl md:text-2xl">{v.titulo}</h3>
              <p className="font-body text-cream/70 mt-3 leading-relaxed">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}