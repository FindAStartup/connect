import React from 'react';
import { Landmark, Users, GraduationCap, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: <Landmark size={32} />, label: "Universities Partnered", value: "150+", color: "text-brand-blue", bg: "bg-[#F0FBFF]", border: "border-[#E0F7FA]" },
  { icon: <Users size={32} />, label: "Verified Students", value: "2.5M", color: "text-brand-green", bg: "bg-[#F0FFF6]", border: "border-[#E0F2F1]" },
  { icon: <GraduationCap size={32} />, label: "Alumni Connected", value: "500k", color: "text-brand-blue", bg: "bg-[#F0FBFF]", border: "border-[#E0F7FA]" },
  { icon: <TrendingUp size={32} />, label: "Engagement Rate", value: "98%", color: "text-brand-green", bg: "bg-[#F0FFF6]", border: "border-[#E0F2F1]" },
];

const StatsGrid: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 bg-brand-light">
      <div className="max-w-7xl w-full px-4 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`flex flex-col gap-2 p-6 rounded-2xl ${stat.bg} border ${stat.border} hover:shadow-md transition-all duration-300`}>
              <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
              <p className="text-brand-dark/60 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-brand-dark text-3xl font-black leading-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;