import React, { useState } from 'react';
import { QrCode, Download, Share2, Smartphone } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';


const MockQRCode = ({ value }: { value: string }) => {
  // Utiliser la valeur pour générer un motif déterministe
  const generatePattern = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  const seed = generatePattern(value);
  
  return (
    <div className="w-48 h-48 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 rounded-xl p-4 mx-auto">
      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-7 gap-1">
          {[...Array(49)].map((_, i) => {
            // Utiliser le seed pour générer des motifs cohérents
            const isBlack = (seed + i * 7 + Math.floor(i / 7)) % 2 === 0;
            return (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-sm ${
                  isBlack ? 'bg-black' : 'bg-white'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const QRCodeSection: React.FC = () => {
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  const qrData = JSON.stringify({
    id: user?.id,
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.email,
    plan: 'Premium',
    validUntil: '2026-03-15'
  });

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <QrCode size={24} className="text-fuchsia-600 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">Mon QR Code</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium"
        >
          {isExpanded ? 'Réduire' : 'Agrandir'}
        </button>
      </div>

      <div className={`transition-all duration-300 ${isExpanded ? 'block' : 'flex items-center'}`}>
        {isExpanded ? (
          // Vue agrandie
          <div className="space-y-6">
            <MockQRCode value={qrData} />
            
            <div className="text-center">
              <p className="font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
              <p className="text-sm text-gray-500">Membre Premium</p>
              <p className="text-xs text-gray-400 mt-2">Valable jusqu'au 15 Mars 2026</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-fuchsia-600 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-700 flex items-center justify-center">
                <Download size={16} className="mr-2" />
                Télécharger
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                <Share2 size={16} className="mr-2" />
                Partager
              </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Smartphone size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Comment utiliser votre QR code ?</p>
                  <p className="text-xs text-gray-600">
                    Présentez ce QR code à l'accueil pour un accès rapide aux espaces, 
                    aux événements et pour valider vos services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Vue réduite (dans profil)
          <>
            <div className="flex-1 flex items-center">
              <div className="w-16 h-16 bg-fuchsia-100 rounded-lg flex items-center justify-center mr-4">
                <QrCode size={32} className="text-fuchsia-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Votre QR code personnel</p>
                <p className="text-xs text-gray-500">Présentez-le à l'accueil</p>
              </div>
            </div>
            <button className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium whitespace-nowrap">
              Voir QR code →
            </button>
          </>
        )}
      </div>
    </div>
  );
};