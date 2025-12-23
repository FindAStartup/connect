import React from 'react';
import { CheckCircle2, ShieldAlert, Users2, Briefcase, BarChart3, Lock } from 'lucide-react';

const FEATURES = [
  { icon: <CheckCircle2 />, title: "Verified Users", desc: "Zero bots. 100% ID-verified student profiles ensure authentic interactions." },
  { icon: <ShieldAlert />, title: "Safe Community", desc: "AI-moderated spaces ensuring positive discourse, with real-time alerts for safety." },
  { icon: <Users2 />, title: "Alumni Engagement", desc: "Seamlessly bridge the gap between graduation and long-term mentorship." },
  { icon: <Briefcase />, title: "Student Opportunities", desc: "Direct pipelines to top recruiters looking specifically for verified talent." },
  { icon: <BarChart3 />, title: "Analytics Insights", desc: "Real-time dashboard insights into engagement and career placement stats." },
  { icon: <Lock />, title: "Digital Trust", desc: "Blockchain-backed credentials and transcripts that cannot be forged." },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Why Colleges Love Us</h2>
          <p className="text-gray-400 text-lg">Infrastructure designed to foster safe, thriving digital communities without the overhead.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="group flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 hover:bg-[#1f402a] transition-all duration-300">
              <div className="size-12 rounded-full bg-background flex items-center justify-center border border-border-dark group-hover:border-primary transition-colors text-white group-hover:text-primary">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed group-hover:text-white/90 transition-colors">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;