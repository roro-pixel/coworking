import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { User, Mail, Phone, MapPin, Camera, Save } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const ClientProfile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '+242 06 493 06 42',
    company: 'SNI',
    position: 'Responsable produit et infrastructure',
    address: '15 bus rue congo(Moungali)',
    city: 'Brazzavile',
    postalCode: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ClientLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mon profil</h1>
          <p className="text-gray-600 mt-1">Gérez vos informations personnelles</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isEditing
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              : 'bg-violet-600 text-white hover:bg-violet-700'
          }`}
        >
          {isEditing ? 'Annuler' : 'Modifier le profil'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Colonne gauche - Avatar et infos rapides */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={48} className="text-violet-600" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700">
                    <Camera size={16} />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{formData.firstName} {formData.lastName}</h2>
              <p className="text-gray-500 text-sm mt-1">{formData.position}</p>
              <p className="text-gray-500 text-sm">{formData.company}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-4">Informations</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-600">{formData.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-600">{formData.phone}</span>
                </div>
                <div className="flex items-start text-sm">
                  <MapPin size={16} className="mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">
                    {formData.address}, {formData.postalCode} {formData.city}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="font-medium text-gray-900 mb-4">Mon abonnement</h3>
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="text-sm text-violet-600 font-medium mb-1">Plan Premium</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">199 000 FCFA <span className="text-sm font-normal text-gray-500">/mois</span></p>
                <p className="text-xs text-gray-500">Renouvellement le 15/03/2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite - Formulaire */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations personnelles</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Poste</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  name="bio"
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                />
              </div>

              {isEditing && (
                <div className="flex justify-end pt-4">
                  <button className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 flex items-center">
                    <Save size={18} className="mr-2" />
                    Enregistrer les modifications
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};