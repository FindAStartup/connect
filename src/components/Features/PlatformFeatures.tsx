import React from 'react';
import { BadgeCheck, Globe, Settings, Database } from 'lucide-react';

const FEATURES = [
  {
    icon: <BadgeCheck size={28} />,
    title: "Identity Verification",
    desc: "Blockchain-backed verification ensures every user is a confirmed alumnus, eliminating fake profiles.",
    color: "text-brand-green",
    bg: "bg-brand-green/10"
  },
  {
    icon: <Globe size={28} />,
    title: "Multi-College Directory",
    desc: "Seamlessly navigate and connect across multiple college networks globally through a unified interface.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10"
  },
  {
    icon: <Settings size={28} />,
    title: "Admin Portal",
    desc: "Powerful tools for college administrators to manage their digital campus, events, and communications.",
    color: "text-purple-600",
    bg: "bg-purple-600/10"
  },
  {
    icon: <Database size={28} />,
    title: "Decentralization Layer",
    desc: "User-owned data architecture giving power back to the community and ensuring long-term data permanence.",
    color: "text-brand-green",
    bg: "bg-brand-green/10"
  }
];

const PlatformFeatures: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-brand-dark sm:text-4xl">Platform Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-brand-dark/70 font-medium">The foundation of a modern alumni network, built on secure decentralized architecture.</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-brand-blue/10 bg-brand-bg p-6 transition hover:border-brand-green/50 hover:shadow-soft hover:-translate-y-1 duration-300">
              <div className={`mb-4 flex size-12 items-center justify-center rounded-xl ${feat.bg} ${feat.color} group-hover:scale-110 transition-transform`}>
                {feat.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-brand-dark">{feat.title}</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;