import React from 'react';
import { MapPin, Users, Wifi } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

interface SpaceCardProps {
  space: {
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
  };
  index: number;
}

export const SpaceCard: React.FC<SpaceCardProps> = ({ space, index }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleReservation = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate(`/client/bookings?space=${space.id}`);
  };

  return (
    <Card delay={0.3 + index * 0.1}>
      <div className="h-48 overflow-hidden rounded-t-2xl">
        <img
          src={space.images[0]}
          alt={space.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{space.name}</h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-violet-600">
              {space.pricePerHour.toLocaleString()} FCFA
            </p>
            <p className="text-xs text-gray-500">/heure</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{space.description}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Users size={16} className="mr-1" />
            {space.capacity} pers.
          </span>
          <span className="flex items-center">
            <MapPin size={16} className="mr-1" />
            {space.location}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {space.amenities.slice(0, 3).map((amenity, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs"
            >
              {amenity}
            </span>
          ))}
          {space.amenities.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{space.amenities.length - 3}
            </span>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Jour</p>
            <p className="font-semibold text-violet-600">{space.pricePerDay.toLocaleString()} FCFA</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Mois</p>
            <p className="font-semibold text-violet-600">{space.pricePerMonth.toLocaleString()} FCFA</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Wifi</p>
            <Wifi size={16} className="mx-auto text-violet-600" />
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="primary" className="flex-1" onClick={handleReservation}>
            Réserver
          </Button>
        </div>
      </div>
    </Card>
  );
};