import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

interface ClientHeaderProps {
  toggleSidebar: () => void;
  isMobile: boolean;
}

export const ClientHeader: React.FC<ClientHeaderProps> = ({ toggleSidebar, isMobile }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40 h-16">
      <div className="flex items-center justify-between px-4 md:px-6 h-full">
        <div className="flex items-center space-x-4">
          {/* Bouton menu mobile */}
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={20} className="text-gray-600" />
            </button>
          )}
          
          {/* Logo mobile */}
          {isMobile && (
            <span className="text-lg font-bold text-gray-900">
              CoWork<span className="text-fuchsia-600">Space</span>
            </span>
          )}

          {/* Titre desktop */}
          {!isMobile && (
            <h2 className="text-lg font-semibold text-gray-800">
              Bonjour, {user?.firstName} 
            </h2>
          )}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Menu profil */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center space-x-2 md:space-x-3 p-1 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-fuchsia-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-fuchsia-600" />
              </div>
              {!isMobile && (
                <>
                  <span className="text-sm font-medium text-gray-700 hidden md:inline">
                    {user?.firstName}
                  </span>
                  <ChevronDown size={16} className="text-gray-500 hidden md:inline" />
                </>
              )}
            </button>

            {showMenu && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setShowMenu(false)} />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-40">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                    <p className="text-xs text-gray-500 mt-1">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate('/client/profile');
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center text-gray-700"
                  >
                    <User size={16} className="mr-3 text-gray-500" />
                    Mon profil
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      navigate('/client/settings');
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center text-gray-700"
                  >
                    <Settings size={16} className="mr-3 text-gray-500" />
                    Paramètres
                  </button>
                  <hr className="my-1" />
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      logout();
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                  >
                    <LogOut size={16} className="mr-3" />
                    Déconnexion
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};