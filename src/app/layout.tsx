import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Cartas de menú en eco cuero | CASSINA",
  description:
    "Fabricamos cartas de menú, cartas de vino y portacuentas en eco cuero para restaurantes. Personalizadas, resistentes y con entrega en Rosario y todo el país.",
  openGraph: {
    title: "Cartas de menú en eco cuero",
    description:
      "Cartas personalizadas para restaurantes. Resisten el uso diario y se limpian con un trapo.",
    url: "https://eco-cuero2026.vercel.app/",
    siteName: "CASSINA",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}