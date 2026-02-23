import { useQuery } from '@tanstack/react-query';
import type { ClientBooking, ClientInvoice, ClientStats } from '../types/index';
// import { useAuth } from '../../contexts/AuthContext';

// Données mockées
const MOCK_BOOKINGS: ClientBooking[] = [
  {
    id: 'b1',
    spaceId: '1',
    spaceName: 'Bureau Privé Lumière',
    spaceImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    date: '24 Fév 2026',
    startTime: '09:00',
    endTime: '17:00',
    duration: 8,
    price: 40000,
    status: 'confirmed',
    location: 'Étage 3 - Bureau 305'
  },
  {
    id: 'b2',
    spaceId: '2',
    spaceName: 'Salle de Réunion Innovation',
    spaceImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    date: '26 Fév 2026',
    startTime: '14:00',
    endTime: '16:00',
    duration: 2,
    price: 16000,
    status: 'confirmed',
    location: 'Étage 1 - Salle 105'
  },
  {
    id: 'b3',
    spaceId: '3',
    spaceName: 'Espace Collaboratif',
    spaceImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    date: '28 Fév 2026',
    startTime: '10:00',
    endTime: '12:00',
    duration: 2,
    price: 6000,
    status: 'pending',
    location: 'Étage 2 - Open Space'
  },
  {
    id: 'b4',
    spaceId: '1',
    spaceName: 'Bureau Privé Lumière',
    spaceImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    date: '15 Fév 2026',
    startTime: '09:00',
    endTime: '18:00',
    duration: 9,
    price: 45000,
    status: 'completed',
    location: 'Étage 3 - Bureau 305'
  }
];

const MOCK_INVOICES: ClientInvoice[] = [
  {
    id: 'i1',
    number: 'FACT-2026-001',
    date: '15 Fév 2026',
    dueDate: '15 Mar 2026',
    amount: 199000,
    status: 'paid',
    items: [
      { description: 'Abonnement Premium - Février 2026', quantity: 1, unitPrice: 199000, total: 199000 }
    ]
  },
  {
    id: 'i2',
    number: 'FACT-2026-002',
    date: '15 Jan 2026',
    dueDate: '15 Fév 2026',
    amount: 199000,
    status: 'paid',
    items: [
      { description: 'Abonnement Premium - Janvier 2026', quantity: 1, unitPrice: 199000, total: 199000 }
    ]
  },
  {
    id: 'i3',
    number: 'FACT-2026-003',
    date: '15 Déc 2025',
    dueDate: '15 Jan 2026',
    amount: 199000,
    status: 'paid',
    items: [
      { description: 'Abonnement Premium - Décembre 2025', quantity: 1, unitPrice: 199000, total: 199000 }
    ]
  }
];

export const useClientBookings = () => {
  return useQuery({
    queryKey: ['clientBookings'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      return MOCK_BOOKINGS;
    },
  });
};

export const useClientInvoices = () => {
  return useQuery({
    queryKey: ['clientInvoices'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      return MOCK_INVOICES;
    },
  });
};

export const useClientStats = () => {
  const { data: bookings } = useClientBookings();
  const { data: invoices } = useClientInvoices();
  // const { user } = useAuth();

  const stats: ClientStats = {
    upcomingBookings: bookings?.filter(b => b.status === 'confirmed' || b.status === 'pending').length || 0,
    totalSpent: invoices?.reduce((sum, inv) => sum + inv.amount, 0) || 0,
    membershipDays: 127, // Simulé
    totalBookings: bookings?.length || 0,
  };

  return { stats, isLoading: !bookings || !invoices };
};