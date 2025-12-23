import React from 'react';
import { Landmark, Users, GraduationCap, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: <Landmark size={32} />, label: "Universities Partnered", value: "150+" },
  { icon: <Users size={32} />, label: "Verified Students", value: "2.5M" },
  { icon: <GraduationCap size={32} />, label: "Alumni Connected", value: "500k" },
  { icon: <TrendingUp size={32} />, label: "Engagement Rate", value: "98%" },
];

const StatsGrid: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 bg-background-alt border-y border-surface-border">
      <div className="max-w-7xl w-full px-4 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2 p-6 rounded-2xl bg-surface-dark/50 border border-surface-border hover:border-primary/30 transition-all">
              <div className="mb-2 text-primary">{stat.icon}</div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-white text-3xl font-bold leading-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;