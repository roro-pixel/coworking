import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import type { ClientInvoice } from '../../types';

interface InvoicesPreviewProps {
  invoices: ClientInvoice[];
}

export const InvoicesPreview: React.FC<InvoicesPreviewProps> = ({ invoices }) => {
  const recent = invoices.slice(0, 3);

  const statusConfig = {
    paid: { label: 'Payée', color: 'text-green-600 bg-green-50' },
    pending: { label: 'En attente', color: 'text-yellow-600 bg-yellow-50' },
    overdue: { label: 'En retard', color: 'text-red-600 bg-red-50' }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Factures récentes</h3>
        <Link to="/client/invoices" className="text-violet-600 text-sm hover:underline flex items-center">
          Voir tout
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      <div className="space-y-3">
        {recent.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <FileText size={16} className="text-gray-400" />
              <div>
                <p className="font-medium text-gray-900">{invoice.number}</p>
                <p className="text-sm text-gray-500">{invoice.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{invoice.amount.toLocaleString()} FCFA</p>
              <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[invoice.status].color}`}>
                {statusConfig[invoice.status].label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};