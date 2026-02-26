import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { SpaceCard } from '../components/ui/SpaceCard';
import { useSpaces } from '../hooks/useSpaces';
import { Button } from '../components/ui/Button';

interface SpacesProps {
  limit?: number;
}

export const Spaces: React.FC<SpacesProps> = ({ limit }) => {
  const { data: spaces, isLoading } = useSpaces();
  const [search, setSearch] = useState('');
  const [capacityFilter, setCapacityFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredSpaces = spaces?.filter(space => {
    if (search && !space.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (capacityFilter && space.capacity < capacityFilter) return false;
    return true;
  }) || [];

  const displayedSpaces = limit ? filteredSpaces.slice(0, limit) : filteredSpaces;

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* En-tête avec animation */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Nos espaces de coworking
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Des solutions adaptées à tous les besoins, du freelance à l'équipe de 20 personnes
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-8 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un espace..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="px-6"
            >
              <Filter size={20} className="mr-2" />
              Filtres
            </Button>
          </div>

          {/* Filtres déroulants */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filtres</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Capacité minimum</label>
                <select
                  value={capacityFilter || ''}
                  onChange={(e) => setCapacityFilter(e.target.value ? parseInt(e.target.value) : null)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                >
                  <option value="">Toutes capacités</option>
                  <option value="2">2+ personnes</option>
                  <option value="4">4+ personnes</option>
                  <option value="6">6+ personnes</option>
                  <option value="8">8+ personnes</option>
                  <option value="10">10+ personnes</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Grille des espaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSpaces.map((space, index) => (
            <SpaceCard key={space.id} space={space} index={index} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {displayedSpaces.length === 0 && (
          <div className="text-center py-12 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500">Aucun espace ne correspond à votre recherche.</p>
          </div>
        )}

        {/* Bouton voir plus si limit est défini */}
        {limit && filteredSpaces.length > limit && (
          <div className="text-center mt-12">
            <Button variant="primary" onClick={() => window.location.href = '/espaces'}>
              Voir tous les espaces
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};