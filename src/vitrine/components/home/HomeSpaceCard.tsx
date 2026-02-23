import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface HomeSpaceCardProps {
  space: {
    id: string;
    name: string;
    description: string;
    capacity: number;
    pricePerHour: number;
    images: string[];
    location: string;
  };
  index: number;
}

export const HomeSpaceCard: React.FC<HomeSpaceCardProps> = ({ space, index }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={space.images[0]}
          alt={space.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{space.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {space.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Users size={16} className="mr-1 text-violet-600" />
            {space.capacity} personnes
          </span>
          <span className="flex items-center">
            <MapPin size={16} className="mr-1 text-violet-600" />
            {space.location}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-violet-600">
              {space.pricePerHour.toLocaleString()} FCFA
            </span>
            <span className="text-sm text-gray-500">/heure</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(`/espaces/${space.id}`)}
          >
            Voir plus
          </Button>
        </div>
      </div>
    </div>
  );
};