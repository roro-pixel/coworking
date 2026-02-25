import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '../ui/Button';

export const Location: React.FC = () => {
  return (
    <section className="py-20 bg-violet-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            <div className="inline-flex items-center bg-violet-100 text-violet-600 px-4 py-2 rounded-full mb-6">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm font-medium">Notre emplacement</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Au cœur de Pointe-Noire
            </h2>
            
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold text-violet-600">Situé en plein centre ville</span>, 
              notre espace se trouve sur l'une des voies les plus emblématiques de Pointe-Noire : 
              l'<span className="font-semibold">Avenue Charles de Gaulle</span>.
            </p>
            
            <p className="text-gray-600 mb-6">
              Un emplacement stratégique à proximité des commerces, des transports et 
              des principaux axes de la ville. Accessible et visible, idéal pour votre 
              activité professionnelle.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-violet-600 flex items-center justify-center text-violet-600 font-bold">5</div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-violet-600 flex items-center justify-center text-violet-600 font-bold">10</div>
                <div className="w-10 h-10 bg-white rounded-full border-2 border-violet-600 flex items-center justify-center text-violet-600 font-bold">15</div>
              </div>
              <span className="text-sm text-gray-500">Minutes des principaux axes</span>
            </div>
            
            <div className="mt-8">
              <Button variant="primary" onClick={() => window.open('https://maps.app.goo.gl/xHU9AYZ1XJ7Gv69PA', '_blank')}>
                <Navigation size={18} className="mr-2" />
                Obtenir l'itinéraire
              </Button>
            </div>
          </div>

          {/* Right - Map/Carte stylisée */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.820189422816!2d11.83832513950991!3d-4.800905449588576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60a4d9ce6ff31b%3A0x7eb70ee1f7dd0971!2sAv.%20Charles%20de%20Gaulle%2C%20Pointe-Noire!5e0!3m2!1sen!2scg!4v1772051432254!5m2!1sen!2scg" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="font-semibold text-lg">Avenue Charles de Gaulle</p>
                <p className="text-sm opacity-90">Pointe-Noire, Congo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};