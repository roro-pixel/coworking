import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Check,
} from 'lucide-react';

export const ClientEvents: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Afterwork Networking',
      description: 'Rencontrez d\'autres membres autour d\'un verre',
      date: '28 Fév 2026',
      time: '18h00 - 21h00',
      location: 'Espace détente',
      capacity: 30,
      registered: 18,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
      category: 'social'
    },
    {
      id: 2,
      title: 'Workshop: Growth Hacking',
      description: 'Apprenez les techniques de croissance avec un expert',
      date: '5 Mar 2026',
      time: '14h00 - 17h00',
      location: 'Salle de formation',
      capacity: 20,
      registered: 12,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      category: 'formation'
    },
    {
      id: 3,
      title: 'Petit-déjeuner membres',
      description: 'Échangez dans une ambiance conviviale',
      date: '10 Mar 2026',
      time: '08h30 - 10h00',
      location: 'Snack bar',
      capacity: 25,
      registered: 8,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      category: 'social'
    },
    {
      id: 4,
      title: 'Conférence: Future of Work',
      description: 'Les tendances du travail de demain',
      date: '15 Mar 2026',
      time: '18h30 - 20h30',
      location: 'Auditorium',
      capacity: 50,
      registered: 32,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
      category: 'conference'
    }
  ];

  const myEvents = [
    {
      id: 101,
      title: 'Afterwork Networking',
      date: '28 Fév 2026',
      status: 'confirmé'
    },
    {
      id: 102,
      title: 'Workshop: Growth Hacking',
      date: '5 Mar 2026',
      status: 'confirmé'
    }
  ];

  return (
    <ClientLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Événements</h1>
        <p className="text-gray-600 mt-1">Découvrez et participez à nos événements</p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex overflow-x-auto gap-2 pb-2">
          {['all', 'social', 'formation', 'conference'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f
                  ? 'bg-fuchsia-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f === 'all' ? 'Tous' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des événements */}
      <div className="space-y-4 mb-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 h-32 md:h-auto bg-gray-200">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <span className="text-sm text-fuchsia-600 font-medium">
                    {event.registered}/{event.capacity} inscrits
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-2 text-gray-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={14} className="mr-2 text-gray-400" />
                    {event.capacity} places
                  </div>
                </div>

                <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-700 text-sm font-medium">
                  M'inscrire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mes événements */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mes inscriptions</h3>

        <div className="space-y-3">
          {myEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {event.status}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-4 text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium">
          Voir historique complet
        </button>
      </div>
    </ClientLayout>
  );
};