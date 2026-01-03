import React from 'react';
import Button from '../ui/Button';

const FinalCta: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10 bg-brand-bg">
      <div className="max-w-7xl w-full">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-dark p-10 md:p-20 text-center shadow-2xl">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#50D890_2px,transparent_2px)] [background-size:30px_30px]"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <h2 className="text-brand-light text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Ready to Modernize Your Campus Network?
            </h2>
            <p className="text-brand-light/80 text-lg md:text-xl font-medium leading-relaxed">
              Join the decentralized revolution. Give your students the safety, trust, and opportunities they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
              <Button className="bg-brand-green text-brand-dark hover:scale-105 shadow-glow border-none hover:bg-brand-light">
                Schedule a Demo
              </Button>
              <Button className="bg-brand-light/10 border-2 border-brand-light/20 text-brand-light hover:bg-brand-light/20">
                Contact Sales
              </Button>
            </div>
            
            <p className="text-brand-light/40 text-sm font-medium mt-4">
              No credit card required for demo. SOC2 Compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;