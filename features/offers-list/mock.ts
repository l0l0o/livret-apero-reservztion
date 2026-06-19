export type Bar = {
  id: string;
  title: string;
  city: string;
  hours: string;
  maxPeople: number;
  imageSrc: string;
  discount?: string;
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
    discount: '-20%',
  },
  {
    id: '2',
    title: 'Punta Cana Bar',
    city: 'Bordeaux',
    hours: '17h - 01h',
    maxPeople: 60,
    imageSrc: '/bars/punta-cana.jpeg',
    discount: '-15%',
  },
  {
    id: '3',
    title: 'Le Yachting',
    city: 'Lège-Cap-Ferret',
    hours: '16h - 00h',
    maxPeople: 80,
    imageSrc: '/bars/yachting.jpeg',
    discount: '-30%',
  },
  {
    id: '4',
    title: 'Troll Pub',
    city: 'La Rochelle',
    hours: '18h - 02h',
    maxPeople: 35,
    imageSrc: '/bars/troll-pub.jpeg',
    discount: '-10%',
  },
  {
    id: '5',
    title: 'Le Verre Luisant',
    city: 'La Rochelle',
    hours: '19h - 03h',
    maxPeople: 50,
    imageSrc: '/bars/verre-luisant.jpeg',
    discount: '-25%',
  },
  {
    id: '6',
    title: 'Chez Popeye',
    city: 'La Rochelle',
    hours: '17h - 01h',
    maxPeople: 45,
    imageSrc: '/bars/chez-popeye.jpeg',
    discount: '-20%',
  },
  {
    id: '7',
    title: 'LE CHAM',
    city: 'La Rochelle',
    hours: '18h - 00h',
    maxPeople: 30,
    imageSrc: '/bars/le-cham.jpeg',
    discount: '-15%',
  },
  {
    id: '8',
    title: "L'Abreuvoir",
    city: 'La Rochelle',
    hours: '19h - 02h',
    maxPeople: 25,
    imageSrc: '/bars/abreuvoir.webp',
    discount: '-40%',
  },
];
