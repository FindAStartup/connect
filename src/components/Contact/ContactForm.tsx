import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    agreed: false
  });

  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      setStatus('Please agree to the privacy policy.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending...');

    const form = new FormData();
    form.append('fullName', formData.fullName);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyz199sCYpdW95QmimCwXNgpIrnW3125_Y9m7UPHFn1gmpfn2W12PFduil7K_uvaMi6/exec";  
        
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setStatus('Success! Message sent.');
        setFormData({ 
          fullName: '', 
          email: '', 
          subject: 'General Inquiry', 
          message: '', 
          agreed: false 
        });
      } else {
        setStatus('Error submitting form.');
      }
    } catch (error) {
      console.error('Error!', error);
      setStatus('Error connecting to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-green/20 rounded-full blur-[80px] pointer-events-none mix-blend-multiply opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-[80px] pointer-events-none mix-blend-multiply opacity-60"></div>
      
      <div className="bg-white p-6 lg:p-10 rounded-[2rem] border border-white relative shadow-xl">
        <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
        
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-brand-dark text-sm font-bold">Full Name</span>
              <div className="relative group">
                <input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl bg-brand-bg/50 border border-transparent text-brand-dark placeholder-brand-dark/40 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green py-3 pl-4 pr-10 transition-all outline-none" 
                  placeholder="Jane Doe" 
                  type="text"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-green opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            </label>
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-brand-dark text-sm font-bold">University Email</span>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-brand-bg/50 border border-transparent text-brand-dark placeholder-brand-dark/40 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green py-3 pl-4 pr-4 transition-all outline-none" 
                placeholder="jane@university.edu" 
                type="email"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-brand-dark text-sm font-bold">Subject</span>
            <div className="relative">
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl bg-brand-bg/50 border border-transparent text-brand-dark focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green py-3 px-4 transition-all outline-none appearance-none cursor-pointer"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Partnership Proposal">Partnership Proposal</option>
                <option value="Feedback">Feedback</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark pointer-events-none">
                <ChevronDown size={20} />
              </div>
            </div>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-brand-dark text-sm font-bold">Message</span>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl bg-brand-bg/50 border border-transparent text-brand-dark placeholder-brand-dark/40 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green p-4 min-h-[160px] resize-none transition-all outline-none" 
              placeholder="Tell us more details about your inquiry..."
            ></textarea>
          </label>

          <div className="flex items-center gap-3 mb-2">
            <input 
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="rounded bg-brand-bg border-brand-blue/30 text-brand-green focus:ring-brand-green cursor-pointer size-4" 
              id="consent" 
              type="checkbox"
            />
            <label className="text-brand-dark/70 text-xs cursor-pointer select-none" htmlFor="consent">
              I agree to the processing of my personal data as described in the Privacy Policy.
            </label>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`group flex w-full items-center justify-center gap-2 rounded-full bg-brand-green py-4 px-6 text-brand-dark font-bold text-base transition-all hover:bg-brand-green/90 hover:shadow-lg active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
          </button>

          {/* Status Message Display */}
          {status && (
            <div className={`text-center text-sm font-bold mt-2 ${status.includes('Success') ? 'text-green-600' : 'text-red-500'}`}>
              {status}
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default ContactForm;