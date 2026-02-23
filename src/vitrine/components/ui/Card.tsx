import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all
        opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]
        ${className}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};