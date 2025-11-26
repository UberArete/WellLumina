import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-violet-600 shadow-lg shadow-violet-500/20",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 shadow-sm border border-slate-200",
    outline: "bg-transparent border border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-600",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
  };

  const sizes = "px-6 py-3 text-sm";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
