import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Share2 } from 'lucide-react'; 
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features'},
    { name: 'Community', path: '/community' },
    { name: 'How It Works', path: '/howitworks' },
  ];

  return (
    <header className="w-full border-b border-brand-blue/10 bg-brand-bg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-brand-green text-brand-dark shadow-sm">
              <Share2 size={24} />
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-brand-dark">
              Connect
            </h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-sm font-semibold text-brand-dark/70 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Uses new 'dark' variant */}
            <Button variant="dark" to="/contact">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="text-brand-dark p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-screen bg-brand-bg z-50 p-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-xl font-bold text-brand-dark hover:text-brand-blue"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="dark" className="w-full mt-4" to="/contact">Connect Wallet</Button>
        </div>
      )}
    </header>
  );
};

export default Header;