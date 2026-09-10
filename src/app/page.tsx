import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
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
        <Reveal><Galeria /></Reveal>
        <Reveal><EcoCuero /></Reveal>
        <Reveal><Personalizacion /></Reveal>
        <Reveal><Proceso /></Reveal>
        <Reveal><Testimonios /></Reveal>
        <Reveal><Faq /></Reveal>
        <Reveal><Contacto /></Reveal>
      </main>
    </>
  );
}