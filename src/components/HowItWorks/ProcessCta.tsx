import React from 'react';
import Button from '../ui/Button';

const ProcessCta: React.FC = () => {
  return (
    <div className="w-full max-w-5xl px-4 pb-20">
      <div className="relative overflow-hidden bg-brand-dark rounded-[2.5rem] p-10 md:p-20 text-center shadow-xl">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#50D890_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-2xl">
            Ready to take control?
          </h2>
          <p className="text-white/80 text-lg font-bold max-w-xl">
            Join thousands of students and alumni building the future of professional networking on the blockchain.
          </p>
          <Button 
            className="bg-brand-green text-brand-dark hover:bg-white hover:text-brand-green mt-4 shadow-glow border-none"
            to="/register"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcessCta;