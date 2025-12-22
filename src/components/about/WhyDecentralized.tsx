import React from 'react';
import { ArrowRight } from 'lucide-react';
import mapImage from '../../assets/AboutImage2.png'; 

const WhyDecentralized: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Image Side */}
        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto md:h-[500px] border border-surface-border group">
          <img 
            src={mapImage} 
            alt="Global Network Map" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-white font-medium">Interconnected Trust Nodes</p>
              <p className="text-primary text-sm">Visualizing the decentralized web of trust.</p>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight">
            Why <span className="text-primary">Decentralized?</span>
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer">
              Learn about our architecture <ArrowRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDecentralized;