import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clientes from "@/components/Clientes";
import Galeria from "@/components/Galeria";
import EcoCuero from "@/components/EcoCuero";
import Personalizacion from "@/components/Personalizacion";
import Proceso from "@/components/Proceso";
import Testimonios from "@/components/Testimonios";
import Faq from "@/components/Faq";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clientes />
        <Galeria />
        <EcoCuero />
        <Proceso />
        <Contacto />
      </main>
    </>
  );
}