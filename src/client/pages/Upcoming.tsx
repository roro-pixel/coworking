import React from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';
import { useClientBookings } from '../hooks/useClientData';

export const ClientUpcoming: React.FC = () => {
  const { data: bookings, isLoading } = useClientBookings();
  
  const upcomingBookings = bookings?.filter(
    b => b.status === 'confirmed' || b.status === 'pending'
  ) || [];

  if (isLoading) {
    return (
      <ClientLayout>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Réservations à venir</h1>
        <p className="text-gray-600 mt-1">Vos prochaines réservations</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <AlertCircle size={16} />
          <span>{upcomingBookings.length} réservation(s) à venir</span>
        </div>

        <div className="space-y-4">
          {upcomingBookings.map((booking, index) => (
            <div key={booking.id} className="relative">
              {index < upcomingBookings.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200" />
              )}
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all ml-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 text-center">
                    <div className="text-2xl font-bold text-fuchsia-600">
                      {booking.date.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-500">
                      {booking.date.split(' ')[1]}
                    </div>
                  </div>

                  <img
                    src={booking.spaceImage}
                    alt={booking.spaceName}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{booking.spaceName}</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                        <div className="text-sm font-semibold text-fuchsia-600">
                          {booking.price.toLocaleString()} FCFA
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <MapPin size={14} className="mr-1" />
                      {booking.location}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                      Modifier
                    </button>
                    <button className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50">
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {upcomingBookings.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center">
              <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune réservation à venir</h3>
              <p className="text-gray-500 mb-6">Vous n'avez pas encore de réservations planifiées</p>
              <button
                onClick={() => window.location.href = '/espaces'}
                className="px-6 py-3 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700"
              >
                Explorer les espaces
              </button>
            </div>
          )}
        </div>
      </div>
    </ClientLayout>
  );
};