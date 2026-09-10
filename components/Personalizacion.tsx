const opciones = [
  { titulo: "Grabado en seco", texto: "El logo queda hundido en el material, sin tinta. Sobrio y no se borra con el uso." },
  { titulo: "Hot stamping", texto: "Lámina metalizada en oro, plata o cobre. Es la opción que más se nota a distancia." },
  { titulo: "Formatos", texto: "Díptico, tríptico, tapa simple o carpeta con hojas intercambiables." },
  { titulo: "Colores", texto: "Negro, marrón, borgoña, verde y arena. Otros a pedido según cantidad." },
  { titulo: "Costura", texto: "Al tono o contrastante. Un detalle chico que cambia bastante el resultado." },
  { titulo: "Complementos", texto: "Portacuentas, porta servilletas y carpetas de vinos en el mismo material." },
];

export default function Personalizacion() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-ink text-3xl md:text-5xl leading-tight max-w-2xl">
          Todo se define con vos antes de producir.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-14">
          {opciones.map((o) => (
            <div key={o.titulo} className="border-t border-sand pt-5">
              <h3 className="font-display text-ink text-xl">{o.titulo}</h3>
              <p className="font-body text-ink/60 mt-2 leading-relaxed">{o.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}