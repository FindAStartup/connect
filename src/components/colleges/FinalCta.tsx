import React from 'react';
import Button from '../ui/Button';

const FinalCta: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-20 text-center">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#112217_2px,transparent_2px)] [background-size:30px_30px]"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <h2 className="text-background text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Ready to Modernize Your Campus Network?
            </h2>
            <p className="text-background/80 text-lg md:text-xl font-medium leading-relaxed">
              Join the decentralized revolution. Give your students the safety, trust, and opportunities they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
              <Button className="bg-background text-white hover:scale-105 shadow-lg border-none">
                Schedule a Demo
              </Button>
              <Button className="bg-white/20 border-2 border-background text-background hover:bg-white/40">
                Contact Sales
              </Button>
            </div>
            
            <p className="text-background/60 text-sm font-medium mt-4">
              No credit card required for demo. SOC2 Compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;