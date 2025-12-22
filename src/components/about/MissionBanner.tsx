import React from 'react';

const MissionBanner: React.FC = () => {
  return (
    <section className="w-full bg-surface-dark border-y border-surface-border py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          Our Mission
        </span>
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          "Connecting the global college community through trust, ownership, and verified credentials."
        </h2>
      </div>
    </section>
  );
};

export default MissionBanner;