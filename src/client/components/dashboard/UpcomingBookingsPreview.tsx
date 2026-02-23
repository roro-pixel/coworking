import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import type { ClientBooking } from '../../types';

interface UpcomingBookingsPreviewProps {
  bookings: ClientBooking[];
}

export const UpcomingBookingsPreview: React.FC<UpcomingBookingsPreviewProps> = ({ bookings }) => {
  const upcoming = bookings.filter(b => b.status === 'confirmed' || b.status === 'pending').slice(0, 3);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Réservations à venir</h3>
        <Link to="/client/upcoming" className="text-violet-600 text-sm hover:underline flex items-center">
          Voir tout
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {upcoming.map((booking) => (
          <div key={booking.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <img
              src={booking.spaceImage}
              alt={booking.spaceName}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-2">{booking.spaceName}</h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="mr-2 text-gray-400" />
                  {booking.date}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={14} className="mr-2 text-gray-400" />
                  {booking.startTime} - {booking.endTime}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-2 text-gray-400" />
                  {booking.location}
                </div>
              </div>
            </div>
          </div>
        ))}

        {upcoming.length === 0 && (
          <p className="text-center text-gray-500 py-4">Aucune réservation à venir</p>
        )}
      </div>
    </div>
  );
};