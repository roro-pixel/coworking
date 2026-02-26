import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  Clock, 
  Building, 
  Users, 
  Wifi, 
  Coffee, 
  Award,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';

const plans = [
  {
    id: 'half-day',
    name: 'Pass demi-journée',
    description: 'Idéal pour une utilisation ponctuelle',
    target: 'Freelances, rendez-vous clients',
    price: '5 000',
    period: 'demi-journée',
    benefits: [
      'Accès à l\'espace coworking (4h consécutives)',
      'Wifi haut débit 300 Mb/s',
      'Accès à l\'espace snack',
      'Prise électrique et bureau'
    ],
    commitment: 'Aucun engagement'
  },
  {
    id: 'daily',
    name: 'Pass journalier',
    description: 'Pour une journée de travail complète',
    target: 'Travailleurs nomades, formation',
    price: '8 000',
    period: 'jour',
    benefits: [
      'Accès de 8h à 18h',
      'Wifi haut débit 300 Mb/s',
      'Café, thé, eau à volonté',
      '1 heure de salle de réunion offerte',
      'Casier partagé'
    ],
    commitment: 'Aucun engagement'
  },
  {
    id: 'monthly-1',
    name: 'Membership 1 mois',
    description: 'Pour les travailleurs réguliers',
    target: 'Indépendants, télétravailleurs',
    price: '45 000',
    period: 'mois',
    popular: true,
    benefits: [
      'Accès illimité 24h/24, 7j/7',
      'Casier personnel sécurisé',
      '5 heures de salle de réunion par mois',
      'Snack inclus (1 par jour)',
      'Invitations aux événements networking',
      'Réduction 10% sur services additionnels'
    ],
    commitment: 'Sans engagement, résiliable à tout moment'
  },
  {
    id: 'monthly-3',
    name: 'Membership 3 mois',
    description: 'Engagement trimestriel avantageux',
    target: 'Équipes, startups en croissance',
    price: '120 000',
    period: '3 mois',
    benefits: [
      'Accès illimité 24h/24, 7j/7',
      'Casier personnel sécurisé',
      '15 heures de salle de réunion',
      'Snack inclus quotidien',
      'Accès prioritaire aux salles',
      '5% de réduction sur l\'abonnement',
      '1 journée invite offerte/mois'
    ],
    commitment: 'Engagement 3 mois'
  },
  {
    id: 'monthly-6',
    name: 'Membership 6 mois',
    description: 'Pour une stabilité à long terme',
    target: 'Professionnels établis',
    price: '220 000',
    period: '6 mois',
    benefits: [
      'Accès illimité 24h/24, 7j/7',
      'Casier privé avec serrure',
      '30 heures de salle de réunion',
      'Snack inclus quotidien',
      'Accès prioritaire',
      '10% de réduction sur l\'abonnement',
      '2 journées invite offertes/mois'
    ],
    commitment: 'Engagement 6 mois'
  },
  {
    id: 'corporate',
    name: 'Abonnement entreprise',
    description: 'Pour les équipes et sociétés',
    target: 'Entreprises, équipes de 2 à 10 personnes',
    price: 'Sur devis',
    period: 'personnalisé',
    benefits: [
      'Forfaits multi-utilisateurs',
      'Bureaux privatifs disponibles',
      'Salles de réunion prioritaires',
      'Facturation mensuelle centralisée',
      'Service IT inclus',
      'Accès 24/7 pour toute l\'équipe',
      'Tarifs dégressifs selon effectif'
    ],
    commitment: 'Personnalisable'
  }
];

const memberBenefits = [
  {
    icon: Award,
    title: 'Accès prioritaire',
    description: 'Réservez vos salles en priorité et bénéficiez des meilleurs créneaux'
  },
  {
    icon: Clock,
    title: 'Tarifs préférentiels',
    description: 'Jusqu\'à 20% de réduction sur les réservations ponctuelles'
  },
  {
    icon: Users,
    title: 'Événements exclusifs',
    description: 'Participez à nos afterworks, workshops et conférences'
  },
  {
    icon: Coffee,
    title: 'Snack bar inclus',
    description: 'Offre de restauration légère incluse selon votre formule'
  },
  {
    icon: Building,
    title: 'Services administratifs',
    description: 'Gestion de courrier, domiciliation, assistance'
  },
  {
    icon: Wifi,
    title: 'Connexion prioritaire',
    description: 'Bande passante dédiée pour les membres'
  }
];

const steps = [
  {
    number: 1,
    title: 'Choisissez votre formule',
    description: 'Sélectionnez l\'abonnement qui correspond à vos besoins parmi nos différentes offres.'
  },
  {
    number: 2,
    title: 'Créez votre compte',
    description: 'Remplissez vos informations en quelques clics. Compte gratuit et sans engagement.'
  },
  {
    number: 3,
    title: 'Effectuez le paiement',
    description: 'Paiement sécurisé par mobile money ou carte bancaire.'
  },
  {
    number: 4,
    title: 'Activation immédiate',
    description: 'Votre profil membre est activé automatiquement. Accédez à votre espace client et réservez dès maintenant.'
  }
];

const faqs = [
  {
    q: 'Quels sont les moyens de paiement acceptés ?',
    a: 'Nous acceptons Mobile Money (Airtel Money, MTN Money) et les cartes bancaires (Visa, Mastercard).'
  },
  {
    q: 'Puis-je résilier mon abonnement à tout moment ?',
    a: 'Oui, pour les abonnements mensuels, la résiliation est possible à tout moment sans frais. Pour les engagements 3 et 6 mois, l\'engagement court jusqu\'à la fin de la période souscrite.'
  },
  {
    q: 'Comment accéder aux locaux ?',
    a: 'Un badge d\'accès vous sera remis à votre première visite. L\'accès est disponible 24/7 pour les membres avec abonnement.'
  },
  {
    q: 'Le renouvellement est-il automatique ?',
    a: 'Oui, le renouvellement est automatique sauf demande de résiliation. Vous recevez un rappel 7 jours avant chaque échéance.'
  },
  {
    q: 'Puis-je changer de formule en cours de mois ?',
    a: 'Oui, vous pouvez changer de formule à tout moment depuis votre espace client. La différence sera ajustée automatiquement.'
  }
];

export const Subscriptions: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* ===== HERO SECTION ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos offres d'abonnement
          </h1>
          <p className="text-xl text-gray-600">
            Des formules flexibles et professionnelles pour un accès sur mesure à nos espaces. 
            <span className="block mt-2 text-fuchsia-fuchsia font-semibold">
              Flexibilité, confort, productivité et avantages exclusifs membres.
            </span>
          </p>
        </div>

        {/* ===== GRILLE DES FORMULES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2
                ${plan.popular ? 'border-fuchsia-600 relative' : 'border-gray-100'}
              `}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fuchsia-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  RECOMMANDÉ
                </span>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{plan.description}</p>
              <p className="text-xs text-fuchsia-600 mb-4">{plan.target}</p>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-fuchsia-600">{plan.price}</span>
                <span className="text-gray-500 text-sm">/{plan.period}</span>
              </div>

              <div className="space-y-2 mb-6">
                {plan.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start text-sm">
                    <Check size={16} className="text-fuchsia-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mb-4">Engagement : {plan.commitment}</p>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => navigate('/register')}
              >
                {plan.id === 'corporate' ? 'Nous contacter' : 'Souscrire'}
              </Button>
            </div>
          ))}
        </div>

        {/* ===== AVANTAGES EXCLUSIFS MEMBRES ===== */}
        <div className="bg-fuchsia-50 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Avantages exclusifs membres
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            En devenant membre, vous bénéficiez de nombreux avantages pour optimiser votre expérience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 flex items-start space-x-4">
                  <div className="bg-fuchsia-100 p-3 rounded-lg flex-shrink-0">
                    <Icon size={24} className="text-fuchsia-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== FONCTIONNEMENT ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Devenir membre en quelques étapes simples
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-fuchsia-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="flex items-center mb-8">
            <HelpCircle size={24} className="text-fuchsia-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA FINAL ===== */}
        <div className="text-center bg-fuchsia-600 text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à rejoindre la communauté ?
          </h2>
          <p className="text-xl text-fuchsia-100 mb-8 max-w-2xl mx-auto">
            Choisissez la formule qui vous correspond et accédez à votre espace de travail idéal dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="!bg-white !text-fuchsia-600 hover:!bg-gray-100"
              onClick={() => navigate('/register')}
            >
              S'abonner maintenant
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-fuchsia-700"
              onClick={() => navigate('/contact')}
            >
              Contacter l'équipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};