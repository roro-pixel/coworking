import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            Une question ? Un projet ? N'hésitez pas à nous écrire
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-8 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <Send size={18} className="mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <MapPin className="text-violet-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      01 Avenue des affaires, Pointe-Noire
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <Phone className="text-violet-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+242 0X XXX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-lg">
                    <Mail className="text-violet-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@coworkspace.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte ou horaires */}
            <div className="bg-white rounded-2xl shadow-lg p-8 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">8h - 20h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">10h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};