const testimonios = [
  {
    texto: "Las anteriores nos duraban seis meses y ya estaban manchadas. Estas van dos años y siguen impecables.",
    nombre: "Nombre Apellido",
    local: "Rock and Fellers",
  },
  {
    texto: "Nos hicieron una muestra antes de arrancar y pudimos cambiar el color a tiempo. El acabado quedó tal cual lo pedimos.",
    nombre: "Nombre Apellido",
    local: "Cassina",
  },
];

export default function Testimonios() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {testimonios.map((t) => (
            <figure key={t.local}>
              <blockquote className="font-display text-ink text-xl md:text-2xl leading-snug">
                {t.texto}
              </blockquote>
              <figcaption className="font-body text-ink/55 text-sm mt-5">
                {t.nombre} · {t.local}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}