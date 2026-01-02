import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'; // Added 'dark' variant for header button
  className?: string;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to,
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();

  const baseStyles = "flex items-center justify-center rounded-full h-14 px-8 text-base font-bold transition-all duration-300 cursor-pointer active:scale-95";
  
  const variants = {
    // Green background, Dark text, Glow effect
    primary: "bg-brand-green text-brand-dark hover:scale-105 shadow-glow hover:shadow-lg",
    
    // White background, Blue border, Dark text
    outline: "border-2 border-brand-blue/20 bg-white hover:border-brand-blue hover:bg-brand-blue/5 text-brand-dark",
    
    // Dark background, White text (For 'Connect Wallet' in header)
    dark: "bg-brand-dark text-white hover:bg-brand-blue shadow-lg shadow-brand-dark/10 h-10 px-6 text-sm",

    // Ghost links
    ghost: "text-brand-dark/70 hover:text-brand-blue bg-transparent h-auto px-4"
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to) navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;