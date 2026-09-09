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
  title: "Cartas de menú en eco cuero | Rosario",
  description:
    "Fabricamos cartas de menú y portacuentas en eco cuero para restaurantes. Personalizadas, resistentes a la grasa y sin origen animal.",
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