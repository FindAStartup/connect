import React from 'react';
import { BadgeCheck, LayoutDashboard, Users, Compass, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Verify Identity',
    description: 'Sign up securely with your official college email (.edu) or request admin approval. This ensures the community remains exclusive to verified students, alumni, and faculty.',
    icon: <BadgeCheck size={32} />,
  },
  {
    id: '02',
    title: 'Access Dashboard',
    description: 'Unlock your personalized campus hub. See live updates, trending discussions, and customized feeds specific to your university department and interests.',
    icon: <LayoutDashboard size={32} />,
  },
  {
    id: '03',
    title: 'Connect with Peers',
    description: 'Build your network. Connect directly with classmates, seek mentorship from alumni, or collaborate with faculty members on research projects.',
    icon: <Users size={32} />,
  },
  {
    id: '04',
    title: 'Explore Opportunities',
    description: 'Discover exclusive job listings, internship referrals, and campus events. Use secure chat features to discuss opportunities without leaving the platform.',
    icon: <Compass size={32} />,
  },
  {
    id: '05',
    title: 'Own Your Data',
    description: 'Your professional identity is stored on the blockchain. You have full ownership—decentralized, private, and portable. No data mining, ever.',
    icon: <ShieldCheck size={32} />,
  },
];

const ProcessTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 pb-20">
      <div className="flex flex-col gap-12 relative">
        
        {/* Vertical Connecting Line (Desktop) - Made bolder */}
        <div className="absolute left-[31px] top-8 bottom-8 w-[3px] bg-gradient-to-b from-brand-green via-brand-blue/30 to-transparent hidden md:block opacity-60"></div>

        {STEPS.map((step, index) => (
          <div key={step.id} className="grid grid-cols-[64px_1fr] md:gap-x-12 gap-x-6 relative group">
            
            {/* Icon Column */}
            <div className="flex flex-col items-center">
              {/* Highlighted Icon Circle */}
              <div className="flex items-center justify-center size-16 rounded-2xl bg-white border-[3px] border-brand-bg shadow-md group-hover:border-brand-green group-hover:shadow-glow transition-all duration-300 z-10 relative">
                <div className="text-brand-blue group-hover:text-brand-green transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              
              {/* Mobile Connecting Line */}
              {index !== STEPS.length - 1 && (
                <div className="w-[3px] bg-brand-blue/20 h-full mt-4 md:hidden group-hover:bg-brand-green/50 transition-colors rounded-full"></div>
              )}
            </div>

            {/* Content Card */}
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-[2rem] border-2 border-brand-bg shadow-sm group-hover:border-brand-green/40 group-hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                
                {/* Decorative Background Blob on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Step Badge */}
                    <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-black tracking-widest uppercase rounded-full border border-brand-green/20">
                      Step {step.id}
                    </span>
                    <div className="h-[2px] bg-brand-bg flex-grow group-hover:bg-brand-green/20 transition-colors"></div>
                  </div>
                  
                  <h3 className="text-brand-dark text-2xl font-black leading-tight mb-3 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-dark/70 text-base leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProcessTimeline;