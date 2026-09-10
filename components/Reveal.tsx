"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}