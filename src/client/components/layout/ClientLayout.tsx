import React, { useState, useEffect } from 'react';
import { ClientHeader } from './ClientHeader';
import { ClientSidebar } from './ClientSidebar';
// import { ClientMobileMenu } from './ClientMobileMenu';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true); // Sur desktop, sidebar toujours visible
      } else {
        setSidebarOpen(false); // Sur mobile, sidebar cachée par défaut
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientHeader 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        isMobile={isMobile}
      />
      
      {/* Overlay pour mobile quand sidebar est ouverte */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - conditionnelle selon taille */}
      <div className={`
        fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50
        transition-transform duration-300
        ${isMobile && !sidebarOpen ? '-translate-x-full' : 'translate-x-0'}
      `}>
        <ClientSidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Contenu principal */}
      <main className={`
        transition-all duration-300 pt-16
        ${!isMobile ? 'ml-64' : 'ml-0'}
      `}>
        <div className="p-4 md:p-6">
          <div className="opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};