import React from 'react';
import { Headphones, Handshake, MapPin, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-brand-blue font-bold uppercase tracking-wider text-sm">Contact Us</span>
        <h1 className="text-brand-dark text-5xl lg:text-6xl font-black leading-tight tracking-tight">
          Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">future</span> together.
        </h1>
        <p className="text-brand-dark/70 text-lg font-medium leading-relaxed max-w-lg">
          Have a question about the protocol? Need support? We are here to help build the future of academic networking. Our team usually responds within 24 hours.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-6 mt-4">
        {/* Support Card */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-green/30 hover:shadow-soft transition-all group">
          <div className="size-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
            <Headphones size={24} />
          </div>
          <div>
            <p className="text-brand-dark font-bold text-lg">Support</p>
            <p className="text-brand-dark/60 text-sm mb-1">For technical issues and general inquiries.</p>
            <a className="text-brand-blue font-bold hover:underline" href="mailto:support@network.xyz">+91 9188604975</a>
          </div>
        </div>

        {/* Partnership Card */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-green/30 hover:shadow-soft transition-all group">
          <div className="size-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
            <Handshake size={24} />
          </div>
          <div>
            <p className="text-brand-dark font-bold text-lg">Partnerships</p>
            <p className="text-brand-dark/60 text-sm mb-1">Collaborate with the decentralized network.</p>
            <a className="text-brand-blue font-bold hover:underline" href="mailto:partners@network.xyz">hello@priminent.com</a>
          </div>
        </div>

        {/* Address Card */}
        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-green/30 hover:shadow-soft transition-all group">
          <div className="size-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-brand-dark font-bold text-lg">Address</p>
            <p className="text-brand-dark/60 text-sm leading-relaxed mt-1">
              Jos Annexe building<br />
              X79P+H8W, Mahatma Gandhi Rd<br />
              Ernakulam South, Ernakulam, Kerala 682011
            </p>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="flex gap-4 mt-2">
        {[<Twitter size={18} />, <Linkedin size={18} />, <MessageCircle size={18} />].map((icon, i) => (
          <a key={i} className="size-10 rounded-full border border-brand-dark/10 bg-white flex items-center justify-center text-brand-dark hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all cursor-pointer shadow-sm">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;