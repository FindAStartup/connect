import React from 'react';
import { Play } from 'lucide-react';
import Button from '../ui/Button';
import dashboardImg from '../../assets/hero_image.png'; // Use your existing hero asset

const FeaturesHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-green shadow-sm">
              <span className="size-2 rounded-full bg-brand-green animate-pulse"></span>
              Web 3.0 Alumni Networking
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              The Future of <span className="text-brand-green">Alumni Networking</span>
            </h1>
            
            <p className="max-w-xl text-lg text-brand-dark/70 font-medium">
              Secure, verified, and decentralized. Connect with your global college community through a platform built for trust, privacy, and professional growth.
            </p>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <Button>Get Started</Button>
              <Button variant="outline" className="gap-2 bg-white">
                <Play size={18} />
                View Demo
              </Button>
            </div>
            
            <div className="mt-6 flex items-center gap-4 text-sm font-medium text-brand-dark/60">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-10 rounded-full border-2 border-brand-bg bg-gray-200"></div>
                ))}
              </div>
              <p>Trusted by 500+ Institutions</p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -right-20 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand-green/20 to-brand-blue/20 blur-[100px]"></div>
            <div className="overflow-hidden rounded-[2.5rem] border border-brand-blue/10 bg-white p-3 shadow-soft">
              <div className="aspect-[4/3] w-full rounded-[2rem] bg-gray-100 overflow-hidden relative">
                 <img src={dashboardImg} alt="Dashboard" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;