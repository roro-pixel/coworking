import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  Users, 
  FileText, 
  Package, 
  Plus, 
  Upload,
  Check,
  Clock,
} from 'lucide-react';

export const ClientActivities: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  // Données mockées
  const guests = [
    { id: 1, name: 'Marie Konde', date: '24 Fév 2026', status: 'confirmé' },
    { id: 2, name: 'Paul Ndinga', date: '26 Fév 2026', status: 'en attente' },
    { id: 3, name: 'Claire Mbemba', date: '28 Fév 2026', status: 'confirmé' },
  ];

  const documents = [
    { id: 1, name: 'Pièce d\'identité', status: 'fourni', date: '15 Jan 2026' },
    { id: 2, name: 'Justificatif de domicile', status: 'en attente', date: '-' },
    { id: 3, name: 'KBis (entreprise)', status: 'à fournir', date: '-' },
  ];

  const deliveries = [
    { id: 1, sender: 'Amazon', tracking: 'AZ123456', date: '24 Fév 2026', status: 'livré' },
    { id: 2, sender: 'Chronopost', tracking: 'CP789012', date: '22 Fév 2026', status: 'livré' },
    { id: 3, sender: 'FedEx', tracking: 'FX345678', date: '20 Fév 2026', status: 'récupéré' },
  ];

  return (
    <ClientLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mes activités</h1>
        <p className="text-gray-600 mt-1">Gérez vos invités, documents et livraisons</p>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Users size={20} className="mx-auto text-fuchsia-600 mb-2" />
          <p className="text-xl font-bold text-gray-900">{guests.length}</p>
          <p className="text-xs text-gray-500">Invitée(s)</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <FileText size={20} className="mx-auto text-fuchsia-600 mb-2" />
          <p className="text-xl font-bold text-gray-900">
            {documents.filter(d => d.status === 'fourni').length}/{documents.length}
          </p>
          <p className="text-xs text-gray-500">Documents</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Package size={20} className="mx-auto text-fuchsia-600 mb-2" />
          <p className="text-xl font-bold text-gray-900">{deliveries.length}</p>
          <p className="text-xs text-gray-500">Livraisons</p>
        </div>
      </div>

      {/* Section Invités */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Mes invités</h3>
          <button
            onClick={() => setShowInviteModal(true)}
            className="text-fuchsia-600 hover:text-fuchsia-700 flex items-center text-sm font-medium"
          >
            <Plus size={16} className="mr-1" />
            Inviter
          </button>
        </div>

        <div className="space-y-3">
          {guests.map((guest) => (
            <div key={guest.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-fuchsia-100 rounded-full flex items-center justify-center">
                  <span className="text-fuchsia-600 font-semibold">
                    {guest.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{guest.name}</p>
                  <p className="text-xs text-gray-500">{guest.date}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                guest.status === 'confirmé' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-yellow-600 bg-yellow-50'
              }`}>
                {guest.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Documents */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents à fournir</h3>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText size={20} className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">Fourni le {doc.date}</p>
                </div>
              </div>
              {doc.status === 'fourni' ? (
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                  <Check size={12} className="mr-1" />
                  Fourni
                </span>
              ) : doc.status === 'en attente' ? (
                <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full flex items-center">
                  <Clock size={12} className="mr-1" />
                  En attente
                </span>
              ) : (
                <button className="text-xs text-fuchsia-600 border border-fuchsia-200 px-3 py-1 rounded-full hover:bg-fuchsia-50 flex items-center">
                  <Upload size={12} className="mr-1" />
                  Fournir
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section Livraisons */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mes livraisons</h3>

        <div className="space-y-3">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Package size={20} className="text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{delivery.sender}</p>
                  <p className="text-xs text-gray-500">Suivi: {delivery.tracking}</p>
                  <p className="text-xs text-gray-500">{delivery.date}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                delivery.status === 'livré' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-blue-600 bg-blue-50'
              }`}>
                {delivery.status}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-4 w-full text-center text-sm text-fuchsia-600 hover:text-fuchsia-700">
          Voir toutes les livraisons
        </button>
      </div>

      {/* Modal d'invitation */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowInviteModal(false)} />
          
          <div className="relative bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Inviter un invité</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email de l'invité
              </label>
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="invite@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date de visite
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowInviteModal(false)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  alert(`Invitation envoyée à ${inviteEmail}`);
                  setShowInviteModal(false);
                  setInviteEmail('');
                }}
                className="flex-1 bg-fuchsia-600 text-white px-4 py-3 rounded-lg hover:bg-fuchsia-700"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </ClientLayout>
  );
};