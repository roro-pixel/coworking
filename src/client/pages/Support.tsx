import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Search, 
  Book, 
  ChevronRight,
  Clock
} from 'lucide-react';

const faqs = [
  {
    category: 'Réservations',
    questions: [
      {
        q: 'Comment modifier une réservation ?',
        a: 'Rendez-vous dans "Mes réservations", sélectionnez la réservation à modifier et cliquez sur "Modifier". Vous pouvez changer l\'horaire ou l\'espace selon disponibilité.'
      },
      {
        q: 'Puis-je annuler une réservation ?',
        a: 'Oui, l\'annulation est possible jusqu\'à 2h avant le début de la réservation.'
      },
      {
        q: 'Comment réserver une salle de réunion ?',
        a: 'Depuis la page "Espaces", sélectionnez une salle et choisissez votre créneau.'
      }
    ]
  },
  {
    category: 'Facturation',
    questions: [
      {
        q: 'Quand sont prélevés les abonnements ?',
        a: 'Les abonnements sont prélevés le 15 de chaque mois.'
      },
      {
        q: 'Comment modifier mon moyen de paiement ?',
        a: 'Allez dans "Moyens de paiement" depuis votre tableau de bord.'
      },
      {
        q: 'Puis-je obtenir une facture avec TVA ?',
        a: 'Oui, toutes vos factures sont disponibles au format PDF dans l\'onglet "Factures".'
      }
    ]
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Chat en direct',
    description: 'Réponse instantanée',
    availability: 'Lun-Ven, 9h-18h',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Réponse sous 24h',
    availability: '7j/7',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    description: 'Assistance prioritaire',
    availability: 'Lun-Ven, 9h-18h',
    color: 'bg-purple-100 text-purple-600'
  }
];

export const ClientSupport: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Aide et support</h1>
        <p className="text-gray-600 mt-1">Comment pouvons-nous vous aider ?</p>
      </div>

      {/* Recherche */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
        </div>
      </div>

      {/* Contacts */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{method.description}</p>
              <div className="flex items-center text-xs text-gray-400 mb-4">
                <Clock size={12} className="mr-1" />
                {method.availability}
              </div>
              <button className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium flex items-center">
                Contacter
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center mb-6">
          <Book className="text-fuchsia-600 mr-3" size={24} />
          <h2 className="text-lg font-semibold text-gray-900">Questions fréquentes</h2>
        </div>

        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="mb-8 last:mb-0">
            <h3 className="text-md font-semibold text-gray-700 mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.questions.map((faq, qIndex) => {
                const globalIndex = catIndex * 100 + qIndex;
                return (
                  <div key={qIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{faq.q}</span>
                      <ChevronRight
                        size={20}
                        className={`text-gray-400 transition-transform ${
                          openFaq === globalIndex ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {openFaq === globalIndex && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </ClientLayout>
  );
};