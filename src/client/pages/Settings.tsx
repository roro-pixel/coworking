import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  Bell, 
  Mail, 
  Smartphone, 
  Globe, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield,
  Save
} from 'lucide-react';

export const ClientSettings: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  
  const [settings, setSettings] = useState({
    // Notifications
    emailBookings: true,
    emailInvoices: true,
    emailPromotions: false,
    emailNewsletter: true,
    
    pushBookings: true,
    pushReminders: true,
    pushPromotions: false,
    
    smsBookings: false,
    smsReminders: true,
    
    // Confidentialité
    showProfile: true,
    showEmail: false,
    showPhone: false,
    
    // Préférences
    language: 'fr',
    timezone: 'Europe/Paris',
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-600 mt-1">Gérez vos préférences et notifications</p>
      </div>

      <div className="space-y-8">
        {/* Notifications par email */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Mail className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Notifications par email</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Confirmations de réservation</p>
                <p className="text-sm text-gray-500">Recevoir un email à chaque réservation</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailBookings}
                onChange={() => handleToggle('emailBookings')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Factures et reçus</p>
                <p className="text-sm text-gray-500">Recevoir vos factures par email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailInvoices}
                onChange={() => handleToggle('emailInvoices')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Offres promotionnelles</p>
                <p className="text-sm text-gray-500">Recevoir des offres spéciales</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailPromotions}
                onChange={() => handleToggle('emailPromotions')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Newsletter</p>
                <p className="text-sm text-gray-500">Recevoir notre newsletter mensuelle</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailNewsletter}
                onChange={() => handleToggle('emailNewsletter')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>
          </div>
        </div>

        {/* Notifications push */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Smartphone className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Notifications push</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Réservations</p>
                <p className="text-sm text-gray-500">Notifications pour vos réservations</p>
              </div>
              <input
                type="checkbox"
                checked={settings.pushBookings}
                onChange={() => handleToggle('pushBookings')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Rappels</p>
                <p className="text-sm text-gray-500">Rappels 1h avant vos réservations</p>
              </div>
              <input
                type="checkbox"
                checked={settings.pushReminders}
                onChange={() => handleToggle('pushReminders')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Promotions</p>
                <p className="text-sm text-gray-500">Offres et événements</p>
              </div>
              <input
                type="checkbox"
                checked={settings.pushPromotions}
                onChange={() => handleToggle('pushPromotions')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>
          </div>
        </div>

        {/* Notifications SMS */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Bell className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Notifications SMS</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Confirmations de réservation</p>
                <p className="text-sm text-gray-500">SMS de confirmation</p>
              </div>
              <input
                type="checkbox"
                checked={settings.smsBookings}
                onChange={() => handleToggle('smsBookings')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Rappels</p>
                <p className="text-sm text-gray-500">Rappels par SMS</p>
              </div>
              <input
                type="checkbox"
                checked={settings.smsReminders}
                onChange={() => handleToggle('smsReminders')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>
          </div>
        </div>

        {/* Préférences */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Globe className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Préférences</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fuseau horaire</label>
              <select
                value={settings.timezone}
                onChange={(e) => handleChange('timezone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="Africa/Dakar">Africa/Dakar (UTC+0)</option>
                <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
                <option value="Europe/London">Europe/London (UTC+0)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Confidentialité */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Shield className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Confidentialité</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Afficher mon profil public</p>
                <p className="text-sm text-gray-500">Visible par les autres membres</p>
              </div>
              <input
                type="checkbox"
                checked={settings.showProfile}
                onChange={() => handleToggle('showProfile')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Afficher mon email</p>
                <p className="text-sm text-gray-500">Sur mon profil public</p>
              </div>
              <input
                type="checkbox"
                checked={settings.showEmail}
                onChange={() => handleToggle('showEmail')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>

            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer">
              <div>
                <p className="font-medium text-gray-900">Afficher mon téléphone</p>
                <p className="text-sm text-gray-500">Sur mon profil public</p>
              </div>
              <input
                type="checkbox"
                checked={settings.showPhone}
                onChange={() => handleToggle('showPhone')}
                className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
              />
            </label>
          </div>
        </div>

        {/* Sécurité */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <Lock className="text-violet-600 mr-3" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">Sécurité</h2>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <h3 className="font-medium text-gray-900 mb-4">Changer de mot de passe</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Mot de passe actuel</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Nouveau mot de passe</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <button className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">
                  Mettre à jour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de sauvegarde */}
        <div className="flex justify-end">
          <button className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 flex items-center">
            <Save size={18} className="mr-2" />
            Enregistrer tous les paramètres
          </button>
        </div>
      </div>
    </ClientLayout>
  );
};