export type Linea = {
  id: string;
  nombre: string;
  bajada: string;
};

export const lineas: Linea[] = [
  {
    id: "clasica",
    nombre: "Clásica",
    bajada: "Eco cuero liso con logo grabado. Para restaurantes de salón y parrillas.",
  },
  {
    id: "texturada",
    nombre: "Texturada",
    bajada: "Relieve tipo cuero graneado. Suma presencia sin cambiar el formato.",
  },
  {
    id: "vinos",
    nombre: "Cartas de vino",
    bajada: "Formato alargado, tapa rígida. Pensada para listas largas.",
  },
  {
    id: "portacuentas",
    nombre: "Portacuentas",
    bajada: "El último objeto que toca el cliente. Combina con la carta.",
  },
];

export type Trabajo = {
  src: string;
  alt: string;
  linea: string;
  cliente?: string;
};

export const trabajos: Trabajo[] = [
  { src: "/trabajos/01.png", alt: "Carta de menú en eco cuero negro con logo grabado", linea: "clasica", cliente: "Rock and Fellers" },
  { src: "/trabajos/02.png", alt: "Carta de menú en eco cuero texturado marrón", linea: "texturada", cliente: "Cassina" },
  { src: "/trabajos/03.png", alt: "Carta de vinos en eco cuero con tapa rígida", linea: "vinos" },
  { src: "/trabajos/04.png", alt: "Portacuentas en eco cuero sobre mesa de restaurante", linea: "portacuentas", cliente: "Rizoma" },
  { src: "/trabajos/05.jpeg", alt: "Carta de menú en eco cuero color arena", linea: "clasica" },
  { src: "/trabajos/06.jpeg", alt: "Detalle de costura en carta de menú de eco cuero", linea: "texturada" },
];

export const lineasNombres = ["clasica", "texturada", "vinos", "portacuentas"] as const;