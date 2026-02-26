import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Phone, Building, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Logo from'../../assets/img/logo.jpeg';


export const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '99 000',
      period: 'mois',
      features: ['Accès 8h-18h', 'Casier partagé', 'Café inclus', 'Wifi haut débit']
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '199 000',
      period: 'mois',
      features: ['Accès 24/7', 'Casier privé', 'Café & snacks', 'Salles de réunion 5h/mois', 'Impressions incluses'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '399 000',
      period: 'mois',
      features: ['Bureau privé', 'Casier personnel', 'Tout inclus', 'Accès prioritaire', 'Assistant dédié']
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    setError('');
    setIsLoading(true);

    const success = await register(formData);
    
    if (success) {
      setStep(2);
    }
    
    setIsLoading(false);
  };

  const handlePlanConfirm = () => {
    if (selectedPlan) {
      navigate('/client/dashboard');
    }
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-white flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Logo et progression */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <img src={Logo} alt="" className='w-20 h-20' />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Créer votre compte
            </h2>
            <p className="text-gray-600">
              Déjà membre ?{' '}
              <Link to="/login" className="text-fuchsia-600 hover:text-fuchsia-700 font-medium">
                Se connecter
              </Link>
            </p>
          </div>

          {/* Barre de progression */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-fuchsia-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <span className="ml-2 text-sm font-medium text-gray-900">Informations</span>
              </div>
              <div className="flex-1 mx-4 h-0.5 bg-gray-200"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center font-semibold">2</div>
                <span className="ml-2 text-sm font-medium text-gray-400">Choix du plan</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                      placeholder="Prénom"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="Nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="votre.email@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="0X XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-fuchsia-600 text-white py-3 rounded-lg hover:bg-fuchsia-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                  ) : (
                    'Continuer'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Étape 2: Choix du plan
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Logo et progression */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl mx-auto mb-4"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choisissez votre plan
          </h2>
          <p className="text-gray-600">
            Sélectionnez l'offre qui correspond le mieux à vos besoins
          </p>
        </div>

        {/* Barre de progression */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-fuchsia-600 text-white rounded-full flex items-center justify-center">✓</div>
              <span className="ml-2 text-sm font-medium text-gray-900">Informations</span>
            </div>
            <div className="flex-1 mx-4 h-0.5 bg-fuchsia-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-fuchsia-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
              <span className="ml-2 text-sm font-medium text-gray-900">Choix du plan</span>
            </div>
          </div>
        </div>

        {/* Grille des plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`
                bg-white rounded-2xl p-6 cursor-pointer transition-all border-2
                ${selectedPlan === plan.id ? 'border-fuchsia-600 shadow-xl' : 'border-gray-200 hover:border-fuchsia-200'}
                ${plan.popular ? 'relative' : ''}
              `}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fuchsia-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  POPULAIRE
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-fuchsia-600">{plan.price} FCFA</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center">
                    <Check size={16} className="text-fuchsia-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={`
                w-5 h-5 rounded-full border-2 mx-auto
                ${selectedPlan === plan.id ? 'border-fuchsia-600 bg-fuchsia-600' : 'border-gray-300'}
              `} />
            </div>
          ))}
        </div>

        {/* Bouton de confirmation */}
        <div className="text-center">
          <button
            onClick={handlePlanConfirm}
            disabled={!selectedPlan}
            className="bg-fuchsia-600 text-white px-12 py-3 rounded-lg hover:bg-fuchsia-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Confirmer et accéder à mon espace
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Vous pourrez changer de plan à tout moment depuis votre espace
          </p>
        </div>
      </div>
    </div>
  );
};