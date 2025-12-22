import React from 'react';
import { ArrowRight, FileText, Network } from 'lucide-react';
import Button from '../ui/Button';
import aboutHeroImg from '../../assets/AboutImage.jpeg'; 

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Text */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
            The Future of <span className="text-primary">Academic Networking</span> is Here
          </h1>
          <h2 className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
            We are redefining how the global college community connects. Built on trust, driven by ownership, and powered by decentralized identity.
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button>
              Join the Network
            </Button>
            <Button variant="outline" className="gap-2">
              <FileText size={18} />
              Read Whitepaper
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-square rounded-full bg-surface-dark relative overflow-hidden flex items-center justify-center border border-surface-border shadow-[0_0_100px_-20px_rgba(19,236,91,0.2)]">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-primary/5 opacity-20"></div>
            {/* Image */}
            <img 
              src={aboutHeroImg} 
              alt="Decentralized Network" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            />
            
            {/* Center Hub Icon */}
            <div className="relative z-10 p-8 text-center flex flex-col items-center">
              <Network className="text-primary size-24 mb-4" strokeWidth={1} />
              <p className="text-primary/80 font-mono text-sm tracking-widest uppercase">Decentralized Protocol</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;