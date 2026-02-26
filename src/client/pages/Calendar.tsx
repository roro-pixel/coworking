import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check,
  X
} from 'lucide-react';

export const ClientCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSpace, setSelectedSpace] = useState('all');

  // Mois en français
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  // Générer les jours du mois
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    const startPadding = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    
    // Jours du mois précédent
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }
    
    // Jours du mois courant
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const spaces = [
    { id: '1', name: 'Bureau Privé Lumière' },
    { id: '2', name: 'Salle de Réunion Innovation' },
    { id: '3', name: 'Espace Collaboratif' },
    { id: '4', name: 'Salle de Formation' }
  ];

  // Données mockées de disponibilité
  const availability: Record<string, any> = {
    '2026-02-24': { '1': 'disponible', '2': 'réservé', '3': 'disponible', '4': 'disponible' },
    '2026-02-25': { '1': 'réservé', '2': 'disponible', '3': 'réservé', '4': 'disponible' },
    '2026-02-26': { '1': 'disponible', '2': 'disponible', '3': 'disponible', '4': 'réservé' },
  };

  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 18:00',
    '18:00 - 20:00'
  ];

  const formatDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // const isDateAvailable = (date: Date, spaceId: string) => {
  //   const key = formatDateKey(date);
  //   return availability[key]?.[spaceId] === 'disponible';
  // };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const days = getDaysInMonth(currentDate);

  return (
    <ClientLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calendrier des disponibilités</h1>
        <p className="text-gray-600 mt-1">Consultez en temps réel les espaces disponibles</p>
      </div>

      {/* Filtre par espace */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filtrer par espace
        </label>
        <select
          value={selectedSpace}
          onChange={(e) => setSelectedSpace(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
        >
          <option value="all">Tous les espaces</option>
          {spaces.map(space => (
            <option key={space.id} value={space.id}>{space.name}</option>
          ))}
        </select>
      </div>

      {/* Calendrier */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        {/* En-tête du calendrier */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Jours de la semaine */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Grille du calendrier */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="h-24 bg-gray-50 rounded-lg" />;
            }

            const dateKey = formatDateKey(day);
            const isToday = formatDateKey(new Date()) === dateKey;
            const isSelected = selectedDate === dateKey;
            const disponibility = availability[dateKey];

            return (
              <button
                key={dateKey}
                onClick={() => setSelectedDate(dateKey)}
                className={`
                  h-24 p-2 rounded-lg border-2 transition-all text-left
                  ${isSelected ? 'border-fuchsia-600 bg-fuchsia-50' : 'border-gray-100 hover:border-fuchsia-200'}
                  ${isToday ? 'bg-fuchsia-50' : 'bg-white'}
                `}
              >
                <span className={`text-sm font-medium ${isToday ? 'text-fuchsia-600' : 'text-gray-700'}`}>
                  {day.getDate()}
                </span>
                
                {disponibility && (
                  <div className="mt-2 space-y-1">
                    {selectedSpace === 'all' ? (
                      // Afficher le nombre d'espaces disponibles
                      <div className="text-xs">
                        <span className="text-green-600 font-medium">
                          {Object.values(disponibility).filter(v => v === 'disponible').length}
                        </span>
                        <span className="text-gray-500"> disponibles</span>
                      </div>
                    ) : (
                      // Afficher le statut d'un espace spécifique
                      <div className={`text-xs font-medium ${
                        disponibility[selectedSpace] === 'disponible' 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        {disponibility[selectedSpace] === 'disponible' ? '✓ Disponible' : '✗ Réservé'}
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Détail du jour sélectionné */}
      {selectedDate && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Disponibilités du {new Date(selectedDate).toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>

          <div className="space-y-4">
            {spaces.map(space => {
              const isAvailable = availability[selectedDate]?.[space.id] === 'disponible';
              
              return (
                <div key={space.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{space.name}</h4>
                      <p className="text-sm text-gray-500">
                        {isAvailable ? 'Disponible' : 'Complet'}
                      </p>
                    </div>
                    {isAvailable ? (
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                        <Check size={12} className="mr-1" />
                        Disponible
                      </span>
                    ) : (
                      <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center">
                        <X size={12} className="mr-1" />
                        Réservé
                      </span>
                    )}
                  </div>

                  {isAvailable && (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
                        {timeSlots.map((slot, idx) => (
                          <button
                            key={idx}
                            className="text-xs p-2 border border-gray-200 rounded-lg hover:border-fuchsia-600 hover:bg-fuchsia-50 transition-colors"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      <button className="text-fuchsia-600 text-sm font-medium hover:underline">
                        Réserver cet espace
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Légende */}
      <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
          <span className="text-gray-600">Disponible</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-100 border border-red-300 rounded mr-2"></div>
          <span className="text-gray-600">Réservé</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-fuchsia-100 border border-fuchsia-300 rounded mr-2"></div>
          <span className="text-gray-600">Aujourd'hui</span>
        </div>
      </div>
    </ClientLayout>
  );
};