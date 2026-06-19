export type Bar = {
  id: string;
  title: string;
  city: string;
  hours: string;
  maxPeople: number;
  imageSrc: string;
  /**
   * Réduction (en %) proposée par le bar pour chaque palier NFZ.
   * Indexée par le coût du palier : 100, 200, 300, 400, 500.
   */
  discounts: Record<number, number>;
};

// Établissements réels issus de https://nightpass.fr/etablissements/
// Horaires et capacités mockés (non fournis par la source).
export const MOCK_BARS: Bar[] = [
  {
    id: '1',
    title: 'Voilà! Bar',
    city: 'Bordeaux',
    hours: '18h - 02h',
    maxPeople: 40,
    imageSrc: '/bars/voila.jpeg',
    discounts: { 100: 5, 200: 10, 300: 17, 400: 25, 500: 50 },
  },
  {
    id: '2',
    title: 'Punta Cana Bar',
    city: 'Bordeaux',
    hours: '17h - 01h',
    maxPeople: 60,
    imageSrc: '/bars/punta-cana.jpeg',
    discounts: { 100: 3, 200: 7, 300: 12, 400: 20, 500: 35 },
  },
  {
    id: '3',
    title: 'Le Yachting',
    city: 'Lège-Cap-Ferret',
    hours: '16h - 00h',
    maxPeople: 80,
    imageSrc: '/bars/yachting.jpeg',
    discounts: { 100: 4, 200: 9, 300: 15, 400: 23, 500: 45 },
  },
  {
    id: '4',
    title: 'Troll Pub',
    city: 'La Rochelle',
    hours: '18h - 02h',
    maxPeople: 35,
    imageSrc: '/bars/troll-pub.jpeg',
    discounts: { 100: 2, 200: 6, 300: 11, 400: 18, 500: 28 },
  },
  {
    id: '5',
    title: 'Le Verre Luisant',
    city: 'La Rochelle',
    hours: '19h - 03h',
    maxPeople: 50,
    imageSrc: '/bars/verre-luisant.jpeg',
    discounts: { 100: 5, 200: 10, 300: 16, 400: 24, 500: 42 },
  },
  {
    id: '6',
    title: 'Chez Popeye',
    city: 'La Rochelle',
    hours: '17h - 01h',
    maxPeople: 45,
    imageSrc: '/bars/chez-popeye.jpeg',
    discounts: { 100: 3, 200: 8, 300: 14, 400: 21, 500: 33 },
  },
  {
    id: '7',
    title: 'LE CHAM',
    city: 'La Rochelle',
    hours: '18h - 00h',
    maxPeople: 30,
    imageSrc: '/bars/le-cham.jpeg',
    discounts: { 100: 1, 200: 5, 300: 10, 400: 19, 500: 26 },
  },
  {
    id: '8',
    title: "L'Abreuvoir",
    city: 'La Rochelle',
    hours: '19h - 02h',
    maxPeople: 25,
    imageSrc: '/bars/abreuvoir.webp',
    discounts: { 100: 4, 200: 9, 300: 17, 400: 25, 500: 48 },
  },
];
