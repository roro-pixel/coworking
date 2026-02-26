import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Users, Calendar, ArrowLeft, Check } from 'lucide-react';
import { useSpaces } from '../hooks/useSpaces';
import { Button } from '../components/ui/Button';
import { useAuth } from '../../contexts/AuthContext';

export const SpaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: spaces, isLoading } = useSpaces();
  const { isAuthenticated } = useAuth();

  // Trouver l'espace correspondant à l'ID
  const space = spaces?.find(s => s.id === id);

  const handleReservation = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate(`/client/bookings?space=${space?.id}`);
  };

  if (isLoading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!space) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Espace non trouvé</h2>
          <p className="text-gray-600 mb-8">L'espace que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button variant="primary" onClick={() => navigate('/espaces')}>
            Retour aux espaces
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Bouton retour */}
        <button
          onClick={() => navigate('/espaces')}
          className="flex items-center text-gray-600 hover:text-fuchsia-600 mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux espaces
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Galerie d'images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={space.images[0]}
                alt={space.name}
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {space.images.slice(1, 4).map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden h-24 shadow-md">
                  <img 
                    src={img} 
                    alt={`${space.name} ${index + 2}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informations détaillées */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{space.name}</h1>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <span className="flex items-center">
                  <MapPin size={18} className="mr-2 text-fuchsia-600" />
                  {space.location}
                </span>
                <span className="flex items-center">
                  <Users size={18} className="mr-2 text-fuchsia-600" />
                  {space.capacity} personnes
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">{space.description}</p>
            </div>

            {/* Tarifs */}
            <div className="bg-fuchsia-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Tarifs</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">À l'heure</p>
                  <p className="text-xl font-bold text-fuchsia-600">{space.pricePerHour.toLocaleString()} FCFA</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">À la journée</p>
                  <p className="text-xl font-bold text-fuchsia-600">{space.pricePerDay.toLocaleString()} FCFA</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Au mois</p>
                  <p className="text-xl font-bold text-fuchsia-600">{space.pricePerMonth.toLocaleString()} FCFA</p>
                </div>
              </div>
            </div>

            {/* Équipements */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Équipements</h2>
              <div className="grid grid-cols-2 gap-3">
                {space.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Check size={16} className="mr-2 text-fuchsia-600 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horaires d'accès */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Horaires d'accès</h2>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">8h00 - 20h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">10h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium text-gray-400">Fermé</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={handleReservation}
              >
                <Calendar size={18} className="mr-2" />
                Réserver maintenant
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Contacter le support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};