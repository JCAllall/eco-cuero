const clientes = [
  "Rock and Fellers",
  "BeatMemo",
  "Rizoma",
];

export default function Clientes() {
  return (
    <section className="bg-cream border-b border-sand py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-ink/50 text-xs tracking-[0.18em] uppercase text-center mb-8">
          Ya trabajamos con
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-16">
          {clientes.map((nombre) => (
            <li
              key={nombre}
              className="font-display text-ink/70 text-lg md:text-2xl"
            >
              {nombre}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}