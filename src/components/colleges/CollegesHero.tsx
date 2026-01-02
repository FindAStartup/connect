import React from 'react';
import { BadgeCheck, Play } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_image.png'; 

const CollegesHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 lg:py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white border border-brand-green/20 px-3 py-1 shadow-sm">
            <BadgeCheck size={16} className="text-brand-green" />
            <span className="text-brand-green text-xs font-bold uppercase tracking-wide">Institutional Partner Program</span>
          </div>
          
          <h1 className="text-brand-dark text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            The Future of Campus Networking is <span className="text-brand-blue">Verified</span>
          </h1>
          
          <h2 className="text-brand-dark/70 text-lg font-medium leading-relaxed">
            Connect students, alumni, and faculty in a decentralized, safe, and trust-first ecosystem designed specifically for the modern university.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button to="/contact">
              Partner With Us
            </Button>
            <Button variant="outline" className="gap-2" to="/howitworks">
              <Play size={16} />
              View Case Studies
            </Button>
          </div>
        </div>

        {/* Right Visual (Dashboard Mockup) */}
        <div className="flex-1 w-full">
          <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-soft bg-white border border-brand-blue/10 p-2 group">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <img 
                src={heroImage} 
                alt="College Analytics Dashboard" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Light Overlay */}
                <div className="absolute inset-0 bg-brand-blue/5 mix-blend-multiply"></div>
                
                {/* Overlay Floating Card */}
                <div className="absolute bottom-10 left-6 right-6 md:left-10 md:right-10 bg-white/95 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <BadgeCheck size={28} />
                    </div>
                    <div>
                    <h3 className="text-brand-dark font-bold text-lg">Identity Verified</h3>
                    <p className="text-brand-blue text-sm font-bold">Blockchain Credentials Issued</p>
                    </div>
                </div>
                
                {/* Progress Bar Mockup */}
                <div className="h-2 bg-brand-bg rounded-full w-full mb-2 overflow-hidden">
                    <div className="h-full bg-brand-green w-[98%] rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs text-brand-dark/50 font-medium">
                    <span>Verification Status</span>
                    <span className="text-brand-green font-bold">Processing 98%</span>
                </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollegesHero;