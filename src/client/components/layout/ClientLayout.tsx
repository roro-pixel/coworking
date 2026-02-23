import React from 'react';
import { ClientHeader } from './ClientHeader';
import { ClientSidebar } from './ClientSidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ClientHeader />
      <div className="flex">
        <ClientSidebar />
        <main className="flex-1 p-6 ml-64 mt-16">
          <div className="opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};