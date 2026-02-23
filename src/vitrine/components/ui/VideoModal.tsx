import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-video">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <X className="text-white" size={24} />
        </button>
        
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-full object-cover"
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
};