import React from 'react';
import { CheckCircle2, ShieldAlert, Users2, Briefcase, BarChart3, Lock } from 'lucide-react';

const FEATURES = [
  { icon: <CheckCircle2 />, title: "Verified Users", desc: "Zero bots. 100% ID-verified student profiles ensure authentic interactions.", color: "text-brand-green", bg: "bg-[#E0F2F1]" },
  { icon: <ShieldAlert />, title: "Safe Community", desc: "AI-moderated spaces ensuring positive discourse, with real-time alerts for safety.", color: "text-brand-blue", bg: "bg-[#E3F2FD]" },
  { icon: <Users2 />, title: "Alumni Engagement", desc: "Seamlessly bridge the gap between graduation and long-term mentorship.", color: "text-brand-green", bg: "bg-[#E0F2F1]" },
  { icon: <Briefcase />, title: "Student Opportunities", desc: "Direct pipelines to top recruiters looking specifically for verified talent.", color: "text-brand-blue", bg: "bg-[#E3F2FD]" },
  { icon: <BarChart3 />, title: "Analytics Insights", desc: "Real-time dashboard insights into engagement and career placement stats.", color: "text-brand-green", bg: "bg-[#E0F2F1]" },
  { icon: <Lock />, title: "Digital Trust", desc: "Blockchain-backed credentials and transcripts that cannot be forged.", color: "text-brand-blue", bg: "bg-[#E3F2FD]" },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10 bg-brand-bg">
      <div className="max-w-7xl w-full flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-brand-dark text-3xl md:text-4xl font-black mb-4">Why Colleges Love Us</h2>
          <p className="text-brand-dark/70 text-lg font-medium">Infrastructure designed to foster safe, thriving digital communities without the overhead.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="group flex flex-col gap-4 rounded-2xl border border-brand-light bg-brand-light p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <div className={`size-12 rounded-full ${feat.bg} flex items-center justify-center ${feat.color}`}>
                {feat.icon}
              </div>
              <div>
                <h3 className="text-brand-dark text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-brand-dark/70 text-base leading-relaxed font-medium">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;