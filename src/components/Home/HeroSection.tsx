import React from 'react';
import { BadgeCheck, Users, School, Landmark, GraduationCap, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import heroImage from '../../assets/hero_image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden flex flex-col justify-center">
      
      {/* BACKGROUND BLOBS (New Design) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: TEXT --- */}
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left z-10">
            
            {/* Badge */}
            {/*<div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-green/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
                </span>
                <span className="text-brand-dark/80">Web3 Professional Network</span>
              </span>
            </div>*/}

            {/* Headline with Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-brand-dark">
              A Decentralized Professional Network Exclusively for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">Global College Community</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-dark/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Where students, alumni, and faculty connect, collaborate, and create opportunities — with complete ownership of their data. Join the future of academic networking.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Button to="/contact">Contact Us</Button>
              <Button variant="outline" to="/features">Explore Features</Button>
            </div>

            {/* Trust Indicators */}
            {/*<div className="pt-8 border-t border-brand-blue/10 mt-4">
              <p className="text-sm text-brand-dark/60 font-semibold mb-5">
                Trusted by students from top universities worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-brand-dark">
                <div className="flex items-center gap-2"><School size={28} /><span className="font-bold text-sm">MIT</span></div>
                <div className="flex items-center gap-2"><Landmark size={28} /><span className="font-bold text-sm">Stanford</span></div>
                <div className="flex items-center gap-2"><GraduationCap size={28} /><span className="font-bold text-sm">Harvard</span></div>
                <div className="flex items-center gap-2"><BookOpen size={28} /><span className="font-bold text-sm">Oxford</span></div>
              </div>
            </div>*/}
          </div>

          {/* --- RIGHT SIDE: VISUALS --- */}
          {/* Card Container with soft shadow */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-soft bg-white p-3">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              <img 
                src={heroImage} 
                alt="Digital Network" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Cards - Updated for Light Theme */}
              <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-4">
                
                {/* Security Card */}
                {/*<div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg flex items-center gap-5 border border-white/50 w-fit hover:-translate-y-1 transition-transform">
                  <div className="size-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-green-700">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-0.5">Security</p>
                    <p className="text-base font-bold text-brand-dark">100% Data Ownership</p>
                  </div>
                </div>*/}

                {/* Community Card */}
                {/*<div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg flex items-center gap-5 w-fit ml-auto border border-white/50 hover:-translate-y-1 transition-transform delay-75">
                  <div className="size-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-0.5">Community</p>
                    <p className="text-base font-bold text-brand-dark">Global Alumni Network</p>
                  </div>
                </div>*/}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;