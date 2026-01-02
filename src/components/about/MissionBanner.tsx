import React from 'react';

const MissionBanner: React.FC = () => {
  return (
    <section className="w-full bg-brand-green py-16 px-4 shadow-sm">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white text-brand-dark text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          Our Mission
        </span>
        <h2 className="text-brand-dark text-3xl md:text-5xl font-black leading-tight">
          "Connecting the global college community through trust, ownership, and verified credentials."
        </h2>
      </div>
    </section>
  );
};

export default MissionBanner;