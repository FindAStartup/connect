import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_image.png'; 

const HowItWorksHero: React.FC = () => {
  return (
    <div className="w-full max-w-5xl px-4 py-8 md:py-12">
      <div className="relative flex flex-col gap-6 items-center justify-center p-8 md:p-16 min-h-[480px] rounded-[2.5rem] overflow-hidden group text-center shadow-2xl bg-brand-dark">
        
        {/* Background Pattern Overlay (Matches FinalCta) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#50D890_2px,transparent_2px)] [background-size:30px_30px]"></div>

        {/* Optional: Subtle background image behind the dark overlay if needed */}
        {/* <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
           <img src={heroImage} className="w-full h-full object-cover" />
        </div> */}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl gap-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-green text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
            The Process
          </div>
          
          <h1 className="text-brand-light text-4xl md:text-6xl font-black leading-tight tracking-tight">
            How It All <span className="text-brand-green">Works</span>
          </h1>
          
          <p className="text-brand-light/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            A secure, decentralized path to professional growth. From identity verification to owning your data—follow the journey.
          </p>

          <Button 
            className="mt-4 bg-brand-green text-brand-dark hover:scale-105 hover:bg-brand-light transition-all shadow-glow border-none"
          >
            Start the Journey
            <ChevronRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksHero;