import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { Calendar, Clock, MapPin, Search, XCircle, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react';
import { useClientBookings } from '../hooks/useClientData';
import { Link } from 'react-router-dom';

const statusConfig = {
  confirmed: { label: 'Confirmée', color: 'text-green-600 bg-green-50', icon: CheckCircle },
  pending: { label: 'En attente', color: 'text-yellow-600 bg-yellow-50', icon: AlertCircle },
  cancelled: { label: 'Annulée', color: 'text-red-600 bg-red-50', icon: XCircle },
  completed: { label: 'Terminée', color: 'text-gray-600 bg-gray-50', icon: CheckCircle }
};

export const ClientBookings: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { data: bookings, isLoading } = useClientBookings();

  const filteredBookings = bookings?.filter(booking => {
    if (filter !== 'all' && booking.status !== filter) return false;
    if (search && !booking.spaceName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }) || [];

  if (isLoading) {
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
        <h1 className="text-2xl font-bold text-gray-900">Toutes mes réservations</h1>
        <p className="text-gray-600 mt-1">Consultez et gérez l'ensemble de vos réservations</p>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un espace..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === f
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f === 'all' ? 'Tous' : statusConfig[f as keyof typeof statusConfig].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des réservations */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => {
          const StatusIcon = statusConfig[booking.status].icon;
          return (
            <div key={booking.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={booking.spaceImage}
                  alt={booking.spaceName}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{booking.spaceName}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full flex items-center w-fit ${statusConfig[booking.status].color}`}>
                      <StatusIcon size={12} className="mr-1" />
                      {statusConfig[booking.status].label}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date</p>
                      <div className="flex items-center text-sm">
                        <Calendar size={14} className="mr-1 text-gray-400" />
                        {booking.date}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Horaire</p>
                      <div className="flex items-center text-sm">
                        <Clock size={14} className="mr-1 text-gray-400" />
                        {booking.startTime} - {booking.endTime}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Durée</p>
                      <div className="text-sm">{booking.duration}h</div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Prix</p>
                      <div className="text-sm font-semibold text-violet-600">{booking.price.toLocaleString()} FCFA</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {booking.location}
                  </div>
                </div>

                <button className="text-violet-600 hover:text-violet-700 self-center">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          );
        })}

        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center">
            <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune réservation</h3>
            <p className="text-gray-500 mb-6">Vous n'avez pas encore de réservations</p>
            <Link
              to="/espaces"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700"
            >
              Réserver un espace
            </Link>
          </div>
        )}
      </div>
    </ClientLayout>
  );
};