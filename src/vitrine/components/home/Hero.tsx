import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { VideoModal } from '../ui/VideoModal';
import { useNavigate } from 'react-router-dom';
import tourVideo from '../../../assets/video/spaceworking.mp4';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                L'espace de travail
                <span className="block text-violet-600">
                  qui vous ressemble
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Des espaces modernes, une communauté dynamique et tous les services 
                nécessaires pour booster votre productivité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary" onClick={() => navigate('/espaces')}>
                  Découvrir nos espaces
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center"
                >
                  <Play size={18} className="mr-2" />
                  Visite virtuelle
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-violet-600">500+</div>
                  <div className="text-gray-600">Membres</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600">4.9</div>
                  <div className="text-gray-600">Note moyenne</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600">24/7</div>
                  <div className="text-gray-600">Accès sécurisé</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-violet-200 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Coworking space"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={tourVideo}
      />
    </>
  );
};