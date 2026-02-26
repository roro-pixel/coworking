import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from'../../../assets/img/logo.jpeg';
import {
  LayoutDashboard,
  Calendar,
  Clock,
  FileText,
  User,
  Settings,
  HelpCircle,
  CreditCard,
  Wallet,
  CalendarDays,
  Users,
  Ticket
} from 'lucide-react';

interface ClientSidebarProps {
  closeSidebar?: () => void;
}

export const ClientSidebar: React.FC<ClientSidebarProps> = ({ closeSidebar }) => {
  const menuItems = [
    { path: '/client/dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
    { path: '/client/subscription', icon: CreditCard, label: 'Mon abonnement' },
    { path: '/client/bookings', icon: Calendar, label: 'Réservations' },
    { path: '/client/upcoming', icon: Clock, label: 'À venir' },
    { path: '/client/calendar', icon: CalendarDays, label: 'Calendrier' },
    { path: '/client/wallet', icon: Wallet, label: 'Portefeuille' },
    { path: '/client/events', icon: Ticket, label: 'Événements' },
    { path: '/client/activities', icon: Users, label: 'Activités' },
    { path: '/client/invoices', icon: FileText, label: 'Factures' },
    { path: '/client/profile', icon: User, label: 'Profil' },
    { path: '/client/settings', icon: Settings, label: 'Paramètres' },
    { path: '/client/support', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <aside className="h-full overflow-y-auto">
      <div className="p-4">
        {/* Logo desktop uniquement */}
        <div className="hidden md:flex items-center space-x-2 mb-8 px-4">
          <img src={Logo} alt="" className='w-15 h-15 ml-15' />
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-fuchsia-50 text-fuchsia-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Icon size={20} className="mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};