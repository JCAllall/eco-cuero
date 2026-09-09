import Hero from "@/components/Hero";
import Clientes from "@/components/Clientes";
import Galeria from "@/components/Galeria";
import EcoCuero from "@/components/EcoCuero";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clientes />
      <Galeria />
      <EcoCuero />
    </main>
  );
}