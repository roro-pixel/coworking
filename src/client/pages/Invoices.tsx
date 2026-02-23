import React, { useState } from 'react';
import { ClientLayout } from '../components/layout/ClientLayout';
import { FileText, Download, Calendar, Search } from 'lucide-react';
import { useClientInvoices } from '../hooks/useClientData';

const statusConfig = {
  paid: { label: 'Payée', color: 'text-green-600 bg-green-50' },
  pending: { label: 'En attente', color: 'text-yellow-600 bg-yellow-50' },
  overdue: { label: 'En retard', color: 'text-red-600 bg-red-50' }
};

export const ClientInvoices: React.FC = () => {
  const [search, setSearch] = useState('');
  const [year, setYear] = useState('2026');
  const { data: invoices, isLoading } = useClientInvoices();

  const filteredInvoices = invoices?.filter(inv => {
    if (search && !inv.number.toLowerCase().includes(search.toLowerCase())) return false;
    if (year && !inv.date.includes(year)) return false;
    return true;
  }) || [];

  const totalPaid = invoices
    ?.filter(inv => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0) || 0;

  if (isLoading) {
    return (
      <ClientLayout>
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Factures</h1>
        <p className="text-gray-600 mt-1">Consultez et téléchargez vos factures</p>
      </div>

      {/* Résumé */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Total payé</p>
          <p className="text-3xl font-bold text-gray-900">{totalPaid.toLocaleString()} FCFA</p>
          <p className="text-xs text-gray-400 mt-2">Depuis votre inscription</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Nombre de factures</p>
          <p className="text-3xl font-bold text-gray-900">{invoices?.length}</p>
          <p className="text-xs text-gray-400 mt-2">Toutes payées</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-sm text-gray-500 mb-2">Prochaine facture</p>
          <p className="text-3xl font-bold text-gray-900">199 000 FCFA</p>
          <p className="text-xs text-gray-400 mt-2">Le 15 Mars 2026</p>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une facture..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      {/* Liste des factures */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">N° Facture</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Échéance</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Montant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Statut</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {invoice.number}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2 text-gray-400" />
                      {invoice.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {invoice.amount.toLocaleString()} FCFA
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[invoice.status].color}`}>
                      {statusConfig[invoice.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-violet-600 hover:text-violet-700 mr-3">
                      <FileText size={18} />
                    </button>
                    <button className="text-violet-600 hover:text-violet-700">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredInvoices.length === 0 && (
        <div className="text-center py-12">
          <FileText size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500">Aucune facture trouvée</p>
        </div>
      )}
    </ClientLayout>
  );
};