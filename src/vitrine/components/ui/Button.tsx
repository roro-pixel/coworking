import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
    secondary: 'bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200',
    outline: 'border-2 border-fuchtsia-600 text-fuchsia-600 hover:bg-fuchsia-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};