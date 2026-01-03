import React from 'react';
import { Briefcase, CheckCircle2, Handshake, Search } from 'lucide-react';
// Replace these with your actual screenshots or placeholder images
import jobImg from '../../assets/Features1.png'; 
import referralImg from '../../assets/Features2.png';
import searchImg from '../../assets/hero_image.png';

const CoreModules: React.FC = () => {
  return (
    <section className="bg-brand-bg py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand-blue">Functionality</span>
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">Core Functional Modules</h2>
        </div>

        {/* Module 1: Jobs */}
        <div className="mb-24 flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 lg:pr-8">
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green">
              <Briefcase size={32} />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-brand-dark">College-Scoped Job Posting</h3>
            <p className="mb-6 text-lg leading-relaxed text-brand-dark/70 font-medium">
              Target talent from specific alma maters with precision. Our scoped job boards allow recruiters and alumni to post opportunities visible exclusively to verified graduates.
            </p>
            <ul className="flex flex-col gap-3">
              {["Verified Alumni Applicants only", "Advanced filtering by graduation year & major", "Direct integration with college career centers"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green shrink-0" size={20} />
                  <span className="font-medium text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1 group">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-brand-green/20 opacity-50 blur-xl group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white bg-white shadow-xl">
              <img src={jobImg} alt="Job Board" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Module 2: Referrals */}
        <div className="mb-24 flex flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="relative flex-1 group">
            <div className="absolute inset-0 rotate-3 rounded-3xl bg-brand-blue/20 opacity-50 blur-xl group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white bg-white shadow-xl">
              <img src={referralImg} alt="Referral System" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 lg:pl-8">
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-blue/20 text-brand-blue">
              <Handshake size={32} />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-brand-dark">Referral Request System</h3>
            <p className="mb-6 text-lg leading-relaxed text-brand-dark/70 font-medium">
              Break the ice with trust. Our structured referral system allows alumni to request introductions using a standardized, respectful workflow.
            </p>
            <ul className="flex flex-col gap-3">
              {["Automated referral templates", "In-network status tracking", "Incentivized karma points for helpers"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0" size={20} />
                  <span className="font-medium text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Module 3: Search */}
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 lg:pr-8">
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green">
              <Search size={32} />
            </div>
            <h3 className="mb-4 text-3xl font-bold text-brand-dark">Profile-Based Search</h3>
            <p className="mb-6 text-lg leading-relaxed text-brand-dark/70 font-medium">
              Find exactly who you need. Our advanced search engine indexes verified profile data to help you discover mentors, co-founders, or hires.
            </p>
            <ul className="flex flex-col gap-3">
              {["Search by industry, skill, or company", "Geographic proximity mapping", "Privacy-first contact masking"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-green shrink-0" size={20} />
                  <span className="font-medium text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1 group">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-brand-green/20 opacity-50 blur-xl group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white bg-white shadow-xl">
              <img src={searchImg} alt="Search Engine" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreModules;