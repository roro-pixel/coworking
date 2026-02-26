import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../../contexts/AuthContext';
import Logo from'../../../assets/img/logo.jpeg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Espaces & Tarifs', path: '/espaces' },
    { label: 'Nos abonnements', path: '/abonnements' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={Logo} alt="" className='w-15 h-15' />
          {/* <Link to="/" className="text-2xl font-bold text-gray-900">
            CoWork<span className="text-violet-600">Space</span>
          </Link> */}

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-fuchsia-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Boutons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">
                  Bonjour, <span className="font-semibold text-fuchsia-600">{user?.firstName}</span>
                </span>
                <Button variant="outline" size="sm" onClick={() => navigate('/client/dashboard')}>
                  Mon espace
                </Button>
                <Button variant="primary" size="sm" onClick={logout}>
                  <LogOut size={16} className="mr-2" />
                  Déconnexion
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                  Connexion
                </Button>
                <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                  Inscription
                </Button>
              </>
            )}
          </div>

          {/* Menu Mobile Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-[fadeUp_0.3s_ease-out]">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-gray-600 hover:text-fuchsia-600 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/client/dashboard')}>
                    <User size={16} className="mr-2" />
                    Mon espace
                  </Button>
                  <Button variant="primary" className="w-full" onClick={logout}>
                    <LogOut size={16} className="mr-2" />
                    Déconnexion
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/login')}>
                    Connexion
                  </Button>
                  <Button variant="primary" className="w-full" onClick={() => navigate('/register')}>
                    Inscription
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};