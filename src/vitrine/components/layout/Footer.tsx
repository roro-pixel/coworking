import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              CoWork<span className="text-violet-400">Space</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Des espaces de coworking modernes et inspirants pour les professionnels d'aujourd'hui.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/espaces" className="hover:text-violet-400">Espaces & Tarifs</Link></li>
              <li><Link to="/a-propos" className="hover:text-violet-400">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-violet-400">Contact</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/mentions-legales" className="hover:text-violet-400">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:text-violet-400">Confidentialité</Link></li>
              <li><Link to="/cgv" className="hover:text-violet-400">CGV</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-violet-400" />
                01 Avenue des affaires, Pointe-Noire
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-violet-400" />
                +242 0X XXX XX XX
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-violet-400" />
                contact@coworkspace.com
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos actualités et offres spéciales
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button
                type="submit"
                className="bg-violet-600 px-4 py-3 rounded-r-lg hover:bg-violet-700 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2026 CoWorkSpace. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};