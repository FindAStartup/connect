import React from 'react';
// FIXED: Changed 'VerifiedUser' to 'BadgeCheck'
import { BadgeCheck, ArrowRight, Play } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_image.png'; 

const CollegesHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 lg:py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-surface-dark border border-surface-border px-3 py-1">
            {/* FIXED: Icon updated here */}
            <BadgeCheck size={16} className="text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-wide">Institutional Partner Program</span>
          </div>
          
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            The Future of Campus Networking is <span className="text-primary">Verified</span>
          </h1>
          
          <h2 className="text-gray-400 text-lg font-normal leading-relaxed">
            Connect students, alumni, and faculty in a decentralized, safe, and trust-first ecosystem designed specifically for the modern university.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button to="/contact">
              Partner With Us
            </Button>
            <Button variant="outline" className="gap-2" to="/howitworks">
              <Play size={16} />
              How it Works
            </Button>
          </div>
        </div>

        {/* Right Visual (Dashboard Mockup) */}
        <div className="flex-1 w-full">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-surface-dark to-background border border-surface-border group">
            <img 
              src={heroImage} 
              alt="College Analytics Dashboard" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            {/* Overlay Floating Card */}
            <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 bg-background/90 backdrop-blur-md border border-border-dark rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-background">
                  {/* FIXED: Icon updated here */}
                  <BadgeCheck size={28} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Identity Verified</h3>
                  <p className="text-primary text-sm">Blockchain Credentials Issued</p>
                </div>
              </div>
              
              {/* Progress Bar Mockup */}
              <div className="h-2 bg-surface-border rounded-full w-full mb-2 overflow-hidden">
                <div className="h-full bg-primary w-[98%] rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Verification Status</span>
                <span className="text-white">Processing 98%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollegesHero;