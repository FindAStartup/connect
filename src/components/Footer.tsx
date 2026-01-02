import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
   <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center size-8 rounded-full bg-brand-green/10 text-brand-green">
                <Share2 size={20} />
              </div>
              <span className="text-xl font-bold text-white">Connect</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of professionals through decentralized networking.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex gap-16 flex-wrap">
            
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/features" className="hover:text-brand-green transition-colors">Features</Link></li>
                <li><Link to="/howitworks" className="hover:text-brand-green transition-colors">How it Works</Link></li>
                <li><Link to="/community" className="hover:text-brand-green transition-colors">Communities</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="#" className="hover:text-brand-green transition-colors">Blog</Link></li>
                <li><Link to="#" className="hover:text-brand-green transition-colors">Career Guide</Link></li>
                <li><Link to="/contact" className="hover:text-brand-green transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="#" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 Connect Inc. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Globe size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
