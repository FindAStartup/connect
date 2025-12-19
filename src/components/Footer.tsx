import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-dark py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-text-muted text-sm">
          © 2025 Connect. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link to="#" className="text-text-muted hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="text-text-muted hover:text-white text-sm transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;