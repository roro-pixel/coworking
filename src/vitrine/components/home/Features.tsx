import React from 'react';
import { Wifi, Coffee, Building2, Shield, Package, Users } from 'lucide-react';

const features = [
  {
    icon: Wifi,
    title: 'Internet haut débit',
    description: 'Fibre optique symétrique 1 Gb/s avec backup 4G'
  },
  {
    icon: Coffee,
    title: 'Café et thé à volonté',
    description: 'Espaces détente avec café équitable et thés bio'
  },
  {
    icon: Building2,
    title: 'Salles de réunion',
    description: 'Équipées en vidéoprojecteur et visioconférence'
  },
  {
    icon: Shield,
    title: 'Sécurité 24/7',
    description: 'Accès sécurisé par badge et vidéosurveillance'
  },
  {
    icon: Package,
    title: 'Casiers sécurisés',
    description: 'Pour stocker votre matériel en toute tranquillité'
  },
  {
    icon: Users,
    title: 'Événements networking',
    description: 'Afterworks, workshops et conférences réguliers'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Des services premium pour vous permettre de vous concentrer sur l'essentiel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="bg-violet-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-violet-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};