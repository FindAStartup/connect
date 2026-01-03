import React from 'react';
import { BadgeCheck, LayoutDashboard, Users, Compass, ShieldCheck, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_image.png'; 

const STEPS = [
  {
    id: '01',
    title: 'Verify Identity',
    description: 'Sign up securely with your official college email (.edu) or request admin approval. This ensures the community remains exclusive to verified students, alumni, and faculty.',
    icon: <BadgeCheck size={28} />,
  },
  {
    id: '02',
    title: 'Access Dashboard',
    description: 'Unlock your personalized campus hub. See live updates, trending discussions, and customized feeds specific to your university department and interests.',
    icon: <LayoutDashboard size={28} />,
  },
  {
    id: '03',
    title: 'Connect with Peers',
    description: 'Build your network. Connect directly with classmates, seek mentorship from alumni, or collaborate with faculty members on research projects.',
    icon: <Users size={28} />,
  },
  {
    id: '04',
    title: 'Explore Opportunities',
    description: 'Discover exclusive job listings, internship referrals, and campus events. Use secure chat features to discuss opportunities without leaving the platform.',
    icon: <Compass size={28} />,
  },
  {
    id: '05',
    title: 'Own Your Data',
    description: 'Your professional identity is stored on the blockchain. You have full ownership—decentralized, private, and portable. No data mining, ever.',
    icon: <ShieldCheck size={28} />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* --- HERO SECTION --- */}
      <div className="w-full max-w-5xl px-4 py-8 md:py-12">
        <div className="relative flex flex-col gap-6 items-center justify-center p-8 md:p-16 min-h-[480px] rounded-[2.5rem] overflow-hidden group text-center shadow-soft bg-white border border-brand-blue/10">
          
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Process Background" 
              className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Light gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-brand-bg/50 to-white/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl gap-6">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider shadow-sm">
              The Process
            </div>
            
            <h1 className="text-brand-dark text-4xl md:text-6xl font-black leading-tight tracking-tight">
              How It All <span className="text-brand-green">Works</span>
            </h1>
            
            <p className="text-brand-dark/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A secure, decentralized path to professional growth. From identity verification to owning your data—follow the journey.
            </p>

            <Button className="mt-4">
              Start the Journey
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* --- TIMELINE SECTION --- */}
      <div className="w-full max-w-4xl px-4 pb-20">
        <div className="flex flex-col gap-12 relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-green via-brand-blue/20 to-transparent hidden md:block opacity-50"></div>

          {STEPS.map((step, index) => (
            <div key={step.id} className="grid grid-cols-[56px_1fr] md:gap-x-12 gap-x-6 relative group">
              
              {/* Icon Column */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center size-14 rounded-full bg-white border-2 border-brand-blue/20 text-brand-blue group-hover:border-brand-green group-hover:text-brand-green group-hover:shadow-glow transition-all duration-300 z-10 shadow-sm">
                  {step.icon}
                </div>
                {/* Mobile Connecting Line */}
                {index !== STEPS.length - 1 && (
                  <div className="w-[2px] bg-brand-blue/10 h-full mt-4 md:hidden group-hover:bg-brand-green/50 transition-colors"></div>
                )}
              </div>

              {/* Content Card */}
              <div className="flex flex-col justify-center">
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-blue/10 group-hover:border-brand-green/30 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-green font-bold text-sm tracking-wider uppercase">Step {step.id}</span>
                    <div className="h-px bg-brand-blue/10 flex-grow group-hover:bg-brand-green/20 transition-colors"></div>
                  </div>
                  
                  <h3 className="text-brand-dark text-2xl font-bold leading-tight mb-3 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-dark/70 text-base leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* --- BOTTOM CTA --- */}
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

    </div>
  );
};

export default HowItWorksSection;