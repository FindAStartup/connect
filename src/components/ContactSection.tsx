import React from 'react';
import { Headphones, Handshake, MapPin, Twitter, Linkedin, MessageCircle, Send, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="flex-grow flex flex-col items-center justify-center p-4 py-10 lg:p-20">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* --- LEFT COLUMN: INFO --- */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Contact Us</span>
            <h1 className="text-white text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">future</span> together.
            </h1>
            <p className="text-text-muted text-lg font-normal leading-relaxed max-w-lg">
              Have a question about the protocol? Need support? We are here to help build the future of academic networking. Our team usually responds within 24 hours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col gap-6 mt-4">
            {/* Support Card */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-dark border border-border-dark/50 hover:border-primary/50 transition-colors group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <Headphones size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Support</p>
                <p className="text-text-muted text-sm mb-1">For technical issues and general inquiries.</p>
                <a className="text-primary font-medium hover:underline" href="mailto:support@network.xyz">support@network.xyz</a>
              </div>
            </div>

            {/* Partnership Card */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-dark border border-border-dark/50 hover:border-primary/50 transition-colors group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <Handshake size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Partnerships</p>
                <p className="text-text-muted text-sm mb-1">Collaborate with the decentralized network.</p>
                <a className="text-primary font-medium hover:underline" href="mailto:partners@network.xyz">partners@network.xyz</a>
              </div>
            </div>

            {/* HQ Card */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-dark border border-border-dark/50 hover:border-primary/50 transition-colors group">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Global HQ</p>
                <p className="text-text-muted text-sm">San Francisco, CA</p>
                <p className="text-text-muted/60 text-xs uppercase tracking-wide mt-1">Decentralized / Remote First</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-2">
            {[<Twitter size={18} />, <Linkedin size={18} />, <MessageCircle size={18} />].map((icon, i) => (
              <a key={i} className="size-10 rounded-full border border-border-dark flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-background transition-all cursor-pointer">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: FORM --- */}
        <div className="w-full relative">
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
          
          <div className="bg-[#15281e] p-6 lg:p-10 rounded-3xl border border-border-dark relative shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-white text-sm font-medium">Full Name</span>
                  <div className="relative group">
                    <input className="w-full rounded-xl bg-surface-dark border-border-dark text-white placeholder-[#5a8069] focus:border-primary focus:ring-1 focus:ring-primary py-3 pl-4 pr-10 transition-all outline-none" placeholder="Jane Doe" type="text"/>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                </label>
                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-white text-sm font-medium">University Email</span>
                  <input className="w-full rounded-xl bg-surface-dark border-border-dark text-white placeholder-[#5a8069] focus:border-primary focus:ring-1 focus:ring-primary py-3 pl-4 pr-4 transition-all outline-none" placeholder="jane@university.edu" type="email"/>
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-medium">Subject</span>
                <div className="relative">
                  <select className="w-full rounded-xl bg-surface-dark border-border-dark text-white focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 transition-all outline-none appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Proposal</option>
                    <option>Feedback</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-medium">Message</span>
                <textarea className="w-full rounded-xl bg-surface-dark border-border-dark text-white placeholder-[#5a8069] focus:border-primary focus:ring-1 focus:ring-primary p-4 min-h-[160px] resize-none transition-all outline-none" placeholder="Tell us more details about your inquiry..."></textarea>
              </label>

              <div className="flex items-center gap-3 mb-2">
                <input className="rounded bg-surface-dark border-border-dark text-primary focus:ring-primary focus:ring-offset-background cursor-pointer size-4" id="consent" type="checkbox"/>
                <label className="text-text-muted text-xs cursor-pointer select-none" htmlFor="consent">
                  I agree to the processing of my personal data as described in the Privacy Policy.
                </label>
              </div>

              <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 px-6 text-[#102216] font-bold text-base transition-all hover:bg-[#1aff66] hover:shadow-[0_0_20px_rgba(19,236,91,0.3)] active:scale-[0.98]">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;