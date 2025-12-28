import React from 'react';
import { BadgeCheck, Lock, Rocket, Globe } from 'lucide-react';

const VALUES = [
  {
    title: "Verified Network",
    desc: "Join a trusted network where every member is verified by their institution. No bots, no fake profiles.",
    icon: <BadgeCheck size={28} />
  },
  {
    title: "Data Ownership",
    desc: "Take back control. Your professional data and identity are stored in your wallet, not on our servers.",
    icon: <Lock size={28} />
  },
  {
    title: "Opportunity Ecosystem",
    desc: "Access internships, research grants, and jobs tailored specifically to your verified credentials.",
    icon: <Rocket size={28} />
  },
  {
    title: "Multi-College Navigation",
    desc: "Every institution gets its own dashboard, identity, and dedicated professional space.",
    icon: <Globe size={28} />
  }
];

const ValueProps: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4 md:px-10 bg-surface-dark/30">
      <div className="max-w-7xl w-full flex flex-col gap-10">
        
        <div className="text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight mb-4">Core Value Propositions</h2>
          <p className="text-gray-400 max-w-2xl">The pillars that make DecentralizedNet the most trusted platform for higher education.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {VALUES.map((val, idx) => (
            <div key={idx} className="group flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark border border-surface-border hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                {val.icon}
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueProps;