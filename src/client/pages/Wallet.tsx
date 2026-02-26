import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { 
  Wallet, 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  Smartphone,
  Download,
  Calendar,
  Check
} from 'lucide-react';

export const ClientWallet: React.FC = () => {
  const [showRecharge, setShowRecharge] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mobile' | 'card'>('mobile');

  // Données mockées
  const balance = 25000; // Solde en FCFA

  const transactions = [
    {
      id: 't1',
      type: 'credit',
      amount: 50000,
      description: 'Recharge portefeuille',
      date: '24 Fév 2026',
      method: 'Mobile Money',
      status: 'completed'
    },
    {
      id: 't2',
      type: 'debit',
      amount: -8000,
      description: 'Paiement réservation - Bureau privé',
      date: '23 Fév 2026',
      method: 'Solde portefeuille',
      status: 'completed'
    },
    {
      id: 't3',
      type: 'credit',
      amount: 25000,
      description: 'Recharge portefeuille',
      date: '20 Fév 2026',
      method: 'Carte bancaire',
      status: 'completed'
    },
    {
      id: 't4',
      type: 'debit',
      amount: -5000,
      description: 'Paiement snack bar',
      date: '18 Fév 2026',
      method: 'Solde portefeuille',
      status: 'completed'
    }
  ];

  const predefinedAmounts = [10000, 25000, 50000, 100000];

  const handleRecharge = () => {
    // Logique de recharge
    alert(`Recharge de ${rechargeAmount || customAmount} FCFA via ${paymentMethod === 'mobile' ? 'Mobile Money' : 'Carte bancaire'}`);
    setShowRecharge(false);
    setRechargeAmount(null);
    setCustomAmount('');
  };

  const totalCredits = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDebits = transactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <ClientLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mon portefeuille</h1>
        <p className="text-gray-600 mt-1">Gérez votre solde et vos transactions</p>
      </div>

      {/* Solde actuel */}
      <div className="bg-fuchsia-600 rounded-xl p-6 shadow-lg mb-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Wallet size={24} className="mr-2" />
            <span className="text-sm opacity-90">Solde disponible</span>
          </div>
          <button
            onClick={() => setShowRecharge(true)}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Recharger
          </button>
        </div>
        <div className="text-4xl font-bold mb-2">{balance.toLocaleString()} FCFA</div>
        <p className="text-sm opacity-75">Mis à jour il y a 1 minute</p>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Total crédits</span>
            <ArrowDownLeft size={16} className="text-green-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">{totalCredits.toLocaleString()} FCFA</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Total débits</span>
            <ArrowUpRight size={16} className="text-red-600" />
          </div>
          <p className="text-xl font-bold text-gray-900">{totalDebits.toLocaleString()} FCFA</p>
        </div>
      </div>

      {/* Modal de recharge */}
      {showRecharge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowRecharge(false)} />
          
          <div className="relative bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recharger mon portefeuille</h3>

            {/* Montants prédéfinis */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Montant (FCFA)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setRechargeAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`
                      p-3 border rounded-lg text-center transition-colors
                      ${rechargeAmount === amount 
                        ? 'border-fuchsia-600 bg-fuchsia-50 text-fuchsia-600' 
                        : 'border-gray-200 hover:border-fuchsia-200'
                      }
                    `}
                  >
                    {amount.toLocaleString()} FCFA
                  </button>
                ))}
              </div>
            </div>

            {/* Montant personnalisé */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ou saisir un montant personnalisé
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setRechargeAmount(null);
                }}
                placeholder="Ex: 15000"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
            </div>

            {/* Mode de paiement */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Mode de paiement
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('mobile')}
                  className={`
                    w-full p-4 border rounded-lg flex items-center justify-between
                    ${paymentMethod === 'mobile' ? 'border-fuchsia-600 bg-fuchsia-50' : 'border-gray-200'}
                  `}
                >
                  <div className="flex items-center">
                    <Smartphone size={20} className="text-fuchsia-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Mobile Money</p>
                      <p className="text-xs text-gray-500">Airtel Money, MTN Money</p>
                    </div>
                  </div>
                  {paymentMethod === 'mobile' && (
                    <Check size={20} className="text-fuchsia-600" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`
                    w-full p-4 border rounded-lg flex items-center justify-between
                    ${paymentMethod === 'card' ? 'border-fuchsia-600 bg-fuchsia-50' : 'border-gray-200'}
                  `}
                >
                  <div className="flex items-center">
                    <CreditCard size={20} className="text-fuchsia-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Carte bancaire</p>
                      <p className="text-xs text-gray-500">Visa, Mastercard</p>
                    </div>
                  </div>
                  {paymentMethod === 'card' && (
                    <Check size={20} className="text-fuchsia-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Boutons action */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowRecharge(false)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                onClick={handleRecharge}
                disabled={!rechargeAmount && !customAmount}
                className="flex-1 bg-fuchsia-600 text-white px-4 py-3 rounded-lg hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Recharger
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Historique des transactions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Historique des transactions</h3>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft size={16} className="text-green-600" />
                  ) : (
                    <ArrowUpRight size={16} className="text-red-600" />
                  )}
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
                  transaction.type === 'credit' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}{Math.abs(transaction.amount).toLocaleString()} FCFA
                </p>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton télécharger relevé */}
        <button className="mt-6 w-full flex items-center justify-center text-fuchsia-600 hover:text-fuchsia-700 py-2 border-t border-gray-100">
          <Download size={16} className="mr-2" />
          Télécharger le relevé de transactions
        </button>
      </div>
    </ClientLayout>
  );
};