import { useQuery } from '@tanstack/react-query';

export interface Space {
  id: string;
  name: string;
  description: string;
  capacity: number;
  pricePerHour: number;
  pricePerDay: number;
  pricePerMonth: number;
  images: string[];
  amenities: string[];
  location: string;
}

const MOCK_SPACES: Space[] = [
  {
    id: '1',
    name: 'Bureau Privé Lumière',
    description: 'Espace calme et lumineux avec vue dégagée. Idéal pour la concentration.',
    capacity: 4,
    pricePerHour: 5000,
    pricePerDay: 35000,
    pricePerMonth: 350000,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c'],
    amenities: ['Wifi haut débit', 'Climatisation', 'Casier', 'Éclairage naturel'],
    location: 'Étage 3'
  },
  {
    id: '2',
    name: 'Salle de Réunion Innovation',
    description: 'Salle équipée pour vos réunions d\'équipe et présentations clients.',
    capacity: 8,
    pricePerHour: 8000,
    pricePerDay: 50000,
    pricePerMonth: 500000,
    images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80'],
    amenities: ['Vidéoprojecteur', 'Tableau blanc', 'Visio-conférence', 'Paperboard'],
    location: 'Étage 1'
  },
  {
    id: '3',
    name: 'Espace Collaboratif',
    description: 'Open space dynamique pour travailler en équipe et réseauter.',
    capacity: 12,
    pricePerHour: 3000,
    pricePerDay: 20000,
    pricePerMonth: 200000,
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72'],
    amenities: ['Wifi', 'Café', 'Terrasse', 'Prises multiples'],
    location: 'Étage 2'
  },
  {
    id: '4',
    name: 'Bureau Privé Exécutif',
    description: 'Espace premium avec mobilier haut de gamme et service prioritaire.',
    capacity: 2,
    pricePerHour: 7000,
    pricePerDay: 45000,
    pricePerMonth: 450000,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c'],
    amenities: ['Bureau standing', 'Accès VIP', 'Snacks inclus', 'Assistant dédié'],
    location: 'Étage 4'
  },
  {
    id: '5',
    name: 'Salle de Formation',
    description: 'Espace modulable pour vos formations et ateliers.',
    capacity: 20,
    pricePerHour: 12000,
    pricePerDay: 80000,
    pricePerMonth: 800000,
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80'],
    amenities: ['Tables modulables', 'Écran géant', 'Sonorisation', 'Micros'],
    location: 'Étage 0'
  },
  {
    id: '6',
    name: 'Coin Détente Créatif',
    description: 'Espace informel pour brainstormer et se détendre.',
    capacity: 6,
    pricePerHour: 4000,
    pricePerDay: 25000,
    pricePerMonth: 250000,
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72'],
    amenities: ['Canapés', 'Jeux', 'Cafétéria', 'Musique'],
    location: 'Étage 1'
  }
];

export const useSpaces = () => {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: async () => {
      // Simule un délai API
      await new Promise(resolve => setTimeout(resolve, 800));
      return MOCK_SPACES;
    },
  });
};