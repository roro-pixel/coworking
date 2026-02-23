import React from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { StatsCards } from '../components/dashboard/StatsCards';
import { UpcomingBookingsPreview } from '../components/dashboard/UpcomingBookingsPreview';
import { InvoicesPreview } from '../components/dashboard/InvoicesPreview';
import { useClientStats, useClientBookings, useClientInvoices } from '../hooks/useClientData';
// import { useAuth } from '../../contexts/AuthContext';

export const ClientDashboard: React.FC = () => {
  // const { user } = useAuth();
  const { stats, isLoading: statsLoading } = useClientStats();
  const { data: bookings, isLoading: bookingsLoading } = useClientBookings();
  const { data: invoices, isLoading: invoicesLoading } = useClientInvoices();

  if (statsLoading || bookingsLoading || invoicesLoading) {
    return (
      <ClientLayout>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-1">
          {new Date().toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <StatsCards stats={stats} />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <UpcomingBookingsPreview bookings={bookings || []} />
        <InvoicesPreview invoices={invoices || []} />
      </div>

      <div className="mt-8 bg-violet-50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-3">Mon abonnement</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Plan actuel</p>
            <p className="text-xl font-bold text-violet-600">Premium</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Prochain paiement</p>
            <p className="font-semibold">199 000 FCFA</p>
            <p className="text-xs text-gray-500">le 15 Mars 2026</p>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};