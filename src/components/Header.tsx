import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Share2 } from 'lucide-react'; 
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Community', path: '/community' },
    { name: 'How It Works', path: '/howitworks' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
              <Share2 size={24} />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white">
              Connect
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-sm font-medium text-gray-300 hover:text-primary transition-colors px-4 py-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* UPDATED: Points to /contact now */}
            <Button className="h-10 px-6 text-sm" to="/contact">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              className="text-white p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-primary z-50 animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-black text-background hover:text-white transition-colors tracking-tight"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-12 h-1 bg-background/20 rounded-full"></div>
            {/* UPDATED: Points to /contact */}
            <Button 
              className="w-full max-w-xs bg-background text-white hover:bg-black"
              to="/contact"
              onClick={handleLinkClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;