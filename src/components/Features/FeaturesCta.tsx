import React from 'react';
import Button from '../ui/Button';

const FeaturesCta: React.FC = () => {
  return (
    <section className="bg-brand-bg py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] bg-brand-dark px-6 py-16 text-center shadow-xl md:px-12 lg:py-24 relative overflow-hidden">
          
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#50D890_2px,transparent_2px)] [background-size:30px_30px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">Ready to modernize your alumni network?</h2>
            <p className="text-lg text-gray-300 font-medium max-w-2xl">Join over 500 colleges using Connect to empower their graduates. Experience the future of professional networking today.</p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-4">
              <Button className="bg-brand-green text-brand-dark hover:bg-white hover:text-brand-green shadow-glow border-none">
                Request Demo
              </Button>
              <Button className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCta;