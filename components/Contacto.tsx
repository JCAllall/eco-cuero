const wpp = "5493415551234";
const msg = encodeURIComponent("Hola! Quiero consultar por cartas de menú en eco cuero.");

export default function Contacto() {
  return (
    <section id="contacto" className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
          Contanos qué necesitás y te pasamos un presupuesto.
        </h2>

        <p className="font-body text-cream/70 text-lg mt-6 max-w-xl leading-relaxed">
          Respondemos el mismo día. Si preferís, escribinos directo por WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <a href={`https://wa.me/${wpp}?text=${msg}`} target="_blank" rel="noopener noreferrer" className="bg-clay text-cream font-body font-medium px-8 py-4 text-center hover:bg-clay/90 transition-colors">Escribir por WhatsApp</a>
          <a href="mailto:tucorreo@ejemplo.com" className="border border-cream/30 text-cream font-body font-medium px-8 py-4 text-center hover:bg-cream/10 transition-colors">Mandar un mail</a>
        </div>

        <div className="border-t border-cream/15 mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="font-body text-cream/50 text-sm">Rosario, Santa Fe · Envíos a todo el país</span>
          <a href="https://instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="font-body text-cream/70 text-sm hover:text-cream transition-colors">Instagram</a>
        </div>
      </div>
    </section>
  );
}