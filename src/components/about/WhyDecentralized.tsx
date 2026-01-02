import React from 'react';
import { ArrowRight } from 'lucide-react';
import mapImage from '../../assets/AboutImage2.png'; 

const WhyDecentralized: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Image Side */}
        <div className="order-2 md:order-1 relative rounded-[2rem] overflow-hidden aspect-video md:aspect-auto md:h-[500px] border border-brand-blue/10 shadow-soft group bg-white p-2">
          <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
            <img 
                src={mapImage} 
                alt="Global Network Map" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg">
                <p className="text-brand-dark font-bold">Interconnected Trust Nodes</p>
                <p className="text-brand-blue text-sm font-medium">Visualizing the decentralized web of trust.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-brand-dark text-3xl md:text-4xl font-black leading-tight">
            Why <span className="text-brand-green">Decentralized?</span>
          </h2>
          <div className="space-y-4 text-brand-dark/70 text-lg leading-relaxed font-medium">
            <p>
              Traditional academic networks turn your achievements into their product. We believe your reputation belongs to you.
            </p>
            <p>
              We are moving away from centralized data monopolies towards user-owned professional identities. In our ecosystem, you own your data, your connections, and your reputation.
            </p>
            <p>
              By leveraging blockchain technology, we ensure that every credential is verifiable, immutable, and portable across any institution or employer boundary.
            </p>
          </div>
          <div className="pt-4">
            <a className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all cursor-pointer">
              Learn about our architecture <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDecentralized;