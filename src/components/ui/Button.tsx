import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
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

  const baseStyles = "flex items-center justify-center rounded-full h-12 px-8 text-base font-bold transition-all duration-300 cursor-pointer";
  
  const variants = {
    // Primary: Neon Green background, Dark Text
    primary: "bg-primary text-background hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:bg-opacity-90",
    
    // Outline: White/Green border, White Text
    outline: "border border-white/20 hover:bg-white/10 text-white hover:border-primary/50",
    
    // Ghost: Just text
    ghost: "text-sm font-medium hover:text-primary transition-colors bg-transparent h-auto px-4 text-white"
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