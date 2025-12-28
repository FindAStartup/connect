import React from 'react';
import { School, Landmark, GraduationCap, BookOpen, ShieldCheck, Globe } from 'lucide-react';
import Button from './ui/Button';
import heroImage from '../assets/hero_image.png'; 

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden flex flex-col justify-center">
      
      {/* Background decorative glow - Green */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT SIDE --- */}
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left z-10">
            
            {/* Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Web3 Professional Network
              </span>
            </div>

            {/* Headline - Fixed White Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white">
              A Decentralized Professional Network Exclusively for the <span className="text-primary">Global College Community</span>
            </h1>

            {/* Subtext - Fixed Gray-300 */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Where students, alumni, and faculty connect, collaborate, and create opportunities — with complete ownership of their data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <Button to="/contact">Get Early Access</Button>
              <Button variant="outline" to="/howitworks">Explore Features</Button>
            </div>

            {/*<div className="pt-6 border-t border-white/10 mt-4">
              <p className="text-sm text-[#92c9a4] font-medium mb-4">
                Trusted by students from top universities worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-white">
                <div className="flex items-center gap-2"><School size={20} /><span className="font-bold text-sm">MIT</span></div>
                <div className="flex items-center gap-2"><Landmark size={20} /><span className="font-bold text-sm">Stanford</span></div>
                <div className="flex items-center gap-2"><GraduationCap size={20} /><span className="font-bold text-sm">Harvard</span></div>
                <div className="flex items-center gap-2"><BookOpen size={20} /><span className="font-bold text-sm">Oxford</span></div>
              </div>
            </div>*/}
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10"></div>
            
            <img 
              src={heroImage} 
              alt="Digital Network Visualization" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
              <div className="bg-surface/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Security</p>
                  <p className="text-sm font-bold text-white">100% Data Ownership</p>
                </div>
              </div>

              <div className="bg-surface/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-4 w-fit ml-auto hover:-translate-y-1 transition-transform">
                <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Community</p>
                  <p className="text-sm font-bold text-white">Global Alumni Network</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;