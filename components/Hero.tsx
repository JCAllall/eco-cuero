import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end">
      <Image
        src="/hero.jpg"
        alt="Carta de menú en eco cuero sobre una mesa de restaurante"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <p className="font-body text-sand text-sm tracking-[0.2em] uppercase mb-5">
          Eco cuero · Fabricación propia · Rosario
        </p>

        <h1 className="font-display text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          Tu carta habla antes<br />que el primer plato.
        </h1>

        <p className="font-body text-cream/80 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
          Cartas de menú en eco cuero, hechas a medida. Resisten la grasa, se limpian con un trapo y no se cuartean.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <a href="#contacto" className="bg-clay text-cream font-body font-medium px-8 py-4 text-center hover:bg-clay/90 transition-colors">Pedir presupuesto</a>
          <a href="#trabajos" className="border border-cream/40 text-cream font-body font-medium px-8 py-4 text-center hover:bg-cream/10 transition-colors">Ver trabajos</a>
        </div>
      </div>
    </section>
  );
}