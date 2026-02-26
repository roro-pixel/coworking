import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  Check, 
  Calendar, 
  Clock, 
  ChevronRight,
  RefreshCw
} from 'lucide-react';
// import { useAuth } from '../../contexts/AuthContext';

export const ClientSubscription: React.FC = () => {
  // const { user } = useAuth();
  const [showHistory, setShowHistory] = useState(false);

  // Données mockées
  const currentPlan = {
    name: 'Membership Premium',
    price: '45 000',
    period: 'mois',
    startDate: '15 Janvier 2026',
    endDate: '15 Février 2026',
    autoRenew: true,
    benefits: [
      'Accès illimité 24/7',
      'Casier personnel',
      '5h de salle de réunion/mois',
      'Snack inclus',
      'Invitations événements',
      'Réduction 10% services'
    ]
  };

  const history = [
    { period: 'Déc 2025 - Jan 2026', plan: 'Premium', amount: '45 000', status: 'payé' },
    { period: 'Nov - Déc 2025', plan: 'Premium', amount: '45 000', status: 'payé' },
    { period: 'Oct - Nov 2025', plan: 'Basic', amount: '25 000', status: 'payé' },
  ];

  const availablePlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '25 000',
      period: 'mois',
      features: ['Accès 8h-18h', 'Casier partagé', 'Wifi', '5h réunion']
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '45 000',
      period: 'mois',
      features: ['Accès 24/7', 'Casier privé', 'Snack inclus', '10h réunion'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '75 000',
      period: 'mois',
      features: ['Bureau privé', 'Tout inclus', '20h réunion', 'Service IT']
    }
  ];

  return (
    <ClientLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mon abonnement</h1>
        <p className="text-gray-600 mt-1">Gérez votre formule et vos avantages</p>
      </div>

      {/* Abonnement actuel */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span className="text-sm text-fuchsia-600 font-medium mb-1 block">Actuel</span>
            <h2 className="text-2xl font-bold text-gray-900">{currentPlan.name}</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-3xl font-bold text-fuchsia-600">{currentPlan.price}</span>
            <span className="text-gray-500">/{currentPlan.period}</span>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Calendar size={18} className="text-fuchsia-600 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Début</p>
              <p className="font-medium">{currentPlan.startDate}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Clock size={18} className="text-fuchsia-600 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Fin</p>
              <p className="font-medium">{currentPlan.endDate}</p>
            </div>
          </div>
        </div>

        {/* Renouvellement */}
        <div className="flex items-center justify-between p-4 bg-fuchsia-50 rounded-lg mb-6">
          <div className="flex items-center">
            <RefreshCw size={18} className="text-fuchsia-600 mr-2" />
            <span className="text-sm text-gray-700">Renouvellement automatique</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={currentPlan.autoRenew} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fuchsia-600"></div>
          </label>
        </div>

        {/* Avantages */}
        <h3 className="font-semibold text-gray-900 mb-3">Avantages inclus</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentPlan.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center text-sm">
              <Check size={16} className="text-fuchsia-600 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Boutons action */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-fuchsia-600 text-white py-3 rounded-lg hover:bg-fuchsia-700 font-medium">
            Changer de formule
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 font-medium">
            Résilier
          </button>
        </div>
      </div>

      {/* Historique */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="font-semibold text-gray-900">Historique des abonnements</h3>
          <ChevronRight size={20} className={`text-gray-400 transition-transform ${showHistory ? 'rotate-90' : ''}`} />
        </button>

        {showHistory && (
          <div className="mt-4 space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.period}</p>
                  <p className="text-sm text-gray-500">{item.plan}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.amount} FCFA</p>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Autres formules */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Autres formules disponibles</h3>
        <div className="space-y-4">
          {availablePlans.map((plan) => (
            <div key={plan.id} className={`p-4 border rounded-lg ${plan.popular ? 'border-fuchsia-600 bg-fuchsia-50' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">{plan.name}</h4>
                  <p className="text-sm text-gray-500">{plan.price} FCFA/{plan.period}</p>
                </div>
                {plan.popular && (
                  <span className="text-xs bg-fuchsia-600 text-white px-2 py-1 rounded-full">Populaire</span>
                )}
              </div>
              <ul className="space-y-1 mb-3">
                {plan.features.map((feat, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-center">
                    <Check size={12} className="text-fuchsia-600 mr-1" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="text-fuchsia-600 text-sm font-medium hover:underline">
                Choisir cette formule
              </button>
            </div>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
};