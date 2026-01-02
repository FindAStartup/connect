import React from 'react';
import { GraduationCap, Award, BookOpen, Settings, CheckCircle2 } from 'lucide-react';

const SEGMENTS = [
  {
    title: "Students",
    desc: "Build an immutable portfolio of your achievements. Connect with peers for study groups and discover verified internship opportunities.",
    icon: <GraduationCap size={32} />,
    checks: ["Verified Student ID", "Peer-to-Peer Learning"]
  },
  {
    title: "Alumni",
    desc: "Stay connected with your alma mater. Mentor the next generation, recruit verified talent directly, and network with other professionals.",
    icon: <Award size={32} />,
    checks: ["Mentorship Programs", "Talent Recruiting"]
  },
  {
    title: "Faculty",
    desc: "Find research collaborators across global institutions. Share your publications with a verified audience and engage in academic discourse.",
    icon: <BookOpen size={32} />,
    checks: ["Global Collaboration", "Grant Opportunities"]
  },
  {
    title: "College Admins",
    desc: "Issue verifiable credentials securely. Monitor alumni engagement and enhance your institution's digital presence in the Web3 era.",
    icon: <Settings size={32} />,
    checks: ["Credential Issuance", "Engagement Analytics"]
  }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col gap-12">
        
        <div className="text-center">
          <h2 className="text-brand-dark text-3xl md:text-4xl font-black leading-tight mb-4">Who is This Platform For?</h2>
          <p className="text-brand-dark/60 text-lg">A unified ecosystem serving every stakeholder in the academic journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SEGMENTS.map((seg, idx) => (
            <div key={idx} className="flex items-start gap-6 p-6 md:p-8 rounded-[2rem] bg-white border border-brand-blue/10 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
              
              <div className="hidden sm:flex shrink-0 size-16 rounded-2xl bg-brand-bg items-center justify-center text-brand-green">
                {seg.icon}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 sm:hidden mb-2">
                  <div className="text-brand-green">{seg.icon}</div>
                  <h3 className="text-brand-dark text-xl font-bold">{seg.title}</h3>
                </div>
                
                <h3 className="text-brand-dark text-xl font-bold hidden sm:block">{seg.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed font-medium">{seg.desc}</p>
                
                <ul className="mt-4 space-y-2">
                  {seg.checks.map((check, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2 text-sm text-brand-blue font-bold">
                      <CheckCircle2 size={18} />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;