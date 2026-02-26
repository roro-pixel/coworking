import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { CreditCard, Plus, Trash2, CheckCircle, Building, Calendar } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  last4: string;
  expiryDate?: string;
  brand?: string;
  isDefault: boolean;
  name: string;
}

export const ClientPayments: React.FC = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      brand: 'Visa',
      last4: '4242',
      expiryDate: '12/25',
      isDefault: true,
      name: 'Visa se terminant par 4242'
    },
    {
      id: '2',
      type: 'card',
      brand: 'Mastercard',
      last4: '8888',
      expiryDate: '06/26',
      isDefault: false,
      name: 'Mastercard se terminant par 8888'
    }
  ]);

  const transactions = [
    {
      id: 't1',
      date: '15 Fév 2026',
      description: 'Abonnement Premium - Février 2026',
      amount: -199000,
      status: 'completed',
      method: 'Visa •••• 4242'
    },
    {
      id: 't2',
      date: '15 Jan 2026',
      description: 'Abonnement Premium - Janvier 2026',
      amount: -199000,
      status: 'completed',
      method: 'Visa •••• 4242'
    },
    {
      id: 't3',
      date: '26 Fév 2026',
      description: 'Réservation - Salle de réunion',
      amount: -16000,
      status: 'pending',
      method: 'Mastercard •••• 8888'
    }
  ];

  const handleSetDefault = (id: string) => {
    setPaymentMethods(methods =>
      methods.map(m => ({
        ...m,
        isDefault: m.id === id
      }))
    );
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(methods => methods.filter(m => m.id !== id));
  };

  const totalSpent = transactions
    .filter(t => t.amount < 0 && t.status === 'completed')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Moyens de paiement</h1>
        <p className="text-gray-600 mt-1">Gérez vos cartes et méthodes de paiement</p>
      </div>

      {/* Résumé */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Dépenses totales</p>
          <p className="text-3xl font-bold text-gray-900">{totalSpent.toLocaleString()} FCFA</p>
          <p className="text-xs text-gray-400 mt-2">Depuis votre inscription</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Moyens de paiement</p>
          <p className="text-3xl font-bold text-gray-900">{paymentMethods.length}</p>
          <p className="text-xs text-gray-400 mt-2">{paymentMethods.filter(m => m.isDefault).length} par défaut</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Prochain paiement</p>
          <p className="text-3xl font-bold text-gray-900">199 000 FCFA</p>
          <p className="text-xs text-gray-400 mt-2">Le 15 Mars 2026</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Moyens de paiement */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Cartes et comptes</h2>
            <button
              onClick={() => setShowAddCard(!showAddCard)}
              className="text-fuchsia-600 hover:text-fuchsia-700 flex items-center text-sm font-medium"
            >
              <Plus size={16} className="mr-1" />
              Ajouter
            </button>
          </div>

          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`p-4 border rounded-lg ${
                  method.isDefault ? 'border-fuchsia-500 bg-fuchsia-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      method.type === 'card' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {method.type === 'card' ? (
                        <CreditCard size={20} className="text-blue-600" />
                      ) : (
                        <Building size={20} className="text-green-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{method.name}</p>
                      {method.expiryDate && (
                        <p className="text-sm text-gray-500 mt-1">
                          Expire le {method.expiryDate}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {method.isDefault ? (
                      <span className="text-xs bg-fuchsia-100 text-fuchsia-700 px-2 py-1 rounded-full flex items-center">
                        <CheckCircle size={12} className="mr-1" />
                        Par défaut
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSetDefault(method.id)}
                        className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                      >
                        Définir par défaut
                      </button>
                    )}
                    
                    {!method.isDefault && (
                      <button
                        onClick={() => handleDelete(method.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ajout de carte */}
          {showAddCard && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900 mb-4">Ajouter une carte</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Numéro de carte</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Date d'expiration</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">CVC</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Nom sur la carte</label>
                  <input
                    type="text"
                    placeholder="JEAN DUPONT"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                  />
                </div>
                <div className="flex items-center justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowAddCard(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Annuler
                  </button>
                  <button className="px-4 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700">
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Transactions récentes */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Transactions récentes</h2>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    transaction.amount < 0 ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    <CreditCard size={16} className={transaction.amount < 0 ? 'text-red-600' : 'text-green-600'} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {transaction.date}
                      <span className="mx-2">•</span>
                      {transaction.method}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.amount < 0 ? 'text-gray-900' : 'text-green-600'
                  }`}>
                    {transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount).toLocaleString()} FCFA
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                    transaction.status === 'completed' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-yellow-600 bg-yellow-50'
                  }`}>
                    {transaction.status === 'completed' ? 'Effectué' : 'En attente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};