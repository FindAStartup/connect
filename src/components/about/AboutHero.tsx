import React from 'react';
import { FileText, Network } from 'lucide-react';
import Button from '../ui/Button';
import aboutHeroImg from '../../assets/AboutImage.jpeg'; 

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Text */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <h1 className="text-brand-dark text-4xl font-black leading-tight tracking-tight md:text-6xl">
            The Future of <span className="text-brand-green">Academic Networking</span> is Here
          </h1>
          <h2 className="text-brand-dark/70 text-lg md:text-xl font-medium leading-relaxed max-w-[600px]">
            We are redefining how the global college community connects. Built on trust, driven by ownership, and powered by decentralized identity.
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button to="/contact">
              Join the Network
            </Button>
            <Button variant="outline" className="gap-2" to="/howitworks">
              <FileText size={18} />
              Explore Features
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] aspect-square rounded-[2.5rem] bg-white relative overflow-hidden flex items-center justify-center border border-brand-blue/10 shadow-soft p-2">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                {/* Image */}
                <img 
                  src={aboutHeroImg} 
                  alt="Decentralized Network" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay"></div>
                
                {/* Center Hub Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center flex flex-col items-center">
                        <Network className="text-brand-green size-16 mb-2" strokeWidth={1.5} />
                        <p className="text-brand-dark font-bold font-mono text-xs tracking-widest uppercase">Decentralized Protocol</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;