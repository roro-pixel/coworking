import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeSpaceCard } from './HomeSpaceCard';
import { useSpaces } from '../../hooks/useSpaces';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const HomeSpaces: React.FC = () => {
  const { data: spaces, isLoading } = useSpaces();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
          </div>
        </div>
      </section>
    );
  }

  // Ne prendre que les 3 premiers espaces
  const featuredSpaces = spaces?.slice(0, 3) || [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Nos espaces phares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Découvrez une sélection de nos espaces les plus populaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSpaces.map((space, index) => (
            <HomeSpaceCard key={space.id} space={space} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/espaces')}
          >
            Voir tous nos espaces
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};