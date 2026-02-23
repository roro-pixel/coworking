import React from 'react';
import { Calendar, Clock, CreditCard, TrendingUp } from 'lucide-react';
import type { ClientStats } from '../../types';

interface StatsCardsProps {
  stats: ClientStats;
}

export const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  const cards = [
    {
      label: 'Réservations à venir',
      value: stats.upcomingBookings,
      icon: Calendar,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      label: 'Total dépensé',
      value: `${(stats.totalSpent / 1000).toFixed(0)}K FCFA`,
      icon: CreditCard,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      label: 'Jours de membre',
      value: stats.membershipDays,
      icon: Clock,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      label: 'Total réservations',
      value: stats.totalBookings,
      icon: TrendingUp,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className={`${card.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <Icon className={card.textColor} size={24} />
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{card.value}</p>
            <p className="text-sm text-gray-600">{card.label}</p>
          </div>
        );
      })}
    </div>
  );
};