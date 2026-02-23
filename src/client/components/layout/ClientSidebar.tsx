import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Clock,
  FileText,
  User,
  Settings,
  HelpCircle,
  CreditCard
} from 'lucide-react';

const menuItems = [
  { path: '/client/dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
  { path: '/client/bookings', icon: Calendar, label: 'Toutes les réservations' },
  { path: '/client/upcoming', icon: Clock, label: 'Réservations à venir' },
  { path: '/client/invoices', icon: FileText, label: 'Factures' },
  { path: '/client/payments', icon: CreditCard, label: 'Paiements' },
  { path: '/client/profile', icon: User, label: 'Mon profil' },
  { path: '/client/settings', icon: Settings, label: 'Paramètres' },
  { path: '/client/support', icon: HelpCircle, label: 'Aide et support' },
];

export const ClientSidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <span className="ml-8 text-xl font-bold text-gray-900">
            CoWork<span className="text-violet-600">Space</span>
          </span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-violet-50 text-violet-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Icon size={20} className="mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};