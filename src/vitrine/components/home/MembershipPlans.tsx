import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Pass demi-journée',
    description: 'Idéal pour une utilisation ponctuelle',
    price: '5 000',
    period: 'demi-journée',
    features: [
      'Accès 4h consécutives',
      'Wifi haut débit',
      'Espace snack',
      'Prise électrique'
    ]
  },
  {
    name: 'Pass journalier',
    description: 'Pour une journée de travail complète',
    price: '8 000',
    period: 'jour',
    features: [
      'Accès de 8h à 18h',
      'Wifi haut débit',
      'Café à volonté',
      '1h de salle de réunion offerte'
    ]
  },
  {
    name: 'Membership 1 mois',
    description: 'Pour les travailleurs réguliers',
    price: '45 000',
    period: 'mois',
    popular: true,
    features: [
      'Accès illimité 24/7',
      'Casier personnel',
      '5h de salle de réunion/mois',
      'Snack inclus',
      'Invitations événements'
    ]
  },
  {
    name: 'Membership 3 mois',
    description: 'Engagement trimestriel avantageux',
    price: '120 000',
    period: '3 mois',
    features: [
      'Accès illimité 24/7',
      'Casier personnel',
      '15h de salle de réunion',
      'Snack inclus',
      '5% de réduction'
    ]
  },
  {
    name: 'Membership 6 mois',
    description: 'Pour une stabilité à long terme',
    price: '220 000',
    period: '6 mois',
    features: [
      'Accès illimité 24/7',
      'Casier privé',
      '30h de salle de réunion',
      'Snack inclus',
      '10% de réduction'
    ]
  },
  {
    name: 'Abonnement entreprise',
    description: 'Pour les équipes et sociétés',
    price: 'Sur devis',
    period: 'personnalisé',
    features: [
      'Forfaits multi-utilisateurs',
      'Bureaux privatifs',
      'Salles de réunion prioritaires',
      'Facturation mensuelle',
      'Service IT inclus'
    ]
  }
];

export const MembershipPlans: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Une tarification flexible
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Des formules adaptées à tous les besoins, sans engagement
          </p>
        </div>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2
                ${plan.popular ? 'border-violet-600 relative' : 'border-gray-100'}
                opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]
              `}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  POPULAIRE
                </span>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-violet-600">{plan.price}</span>
                <span className="text-gray-500 text-sm">/{plan.period}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <Check size={16} className="text-violet-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => navigate('/abonnements')}
              >
                {plan.name === 'Abonnement entreprise' ? 'Nous contacter' : 'Choisir cette formule'}
              </Button>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/abonnements')}
            className="px-8"
          >
            Devenir membre
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Pas de frais cachés • Annulation possible • Accès immédiat
          </p>
        </div>
      </div>
    </section>
  );
};