import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import dashboardImg from '../../assets/ForColleges2.png'; 

const DeepDiveSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-10 bg-brand-light">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center rounded-[2.5rem] bg-brand-light p-8 md:p-12 border border-brand-blue/10 shadow-soft">
          
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-brand-dark text-3xl md:text-4xl font-black leading-tight">
              Deep Analytics for <br/><span class="text-brand-green">Data-Driven Decisions</span>
            </h2>
            <p className="text-brand-dark/70 text-lg font-medium">
              Stop guessing about student success. Our comprehensive dashboard gives administrators a granular view of network health, engagement trends, and employment outcomes.
            </p>
            
            <ul className="flex flex-col gap-4 mt-2">
              {["Track career placement rates in real-time.", "Identify at-risk students through engagement drop-offs.", "Measure alumni mentorship effectiveness."].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-brand-green/10 rounded-full">
                    <Check className="text-brand-green shrink-0" size={16} />
                  </div>
                  <p className="text-brand-dark font-medium">{item}</p>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="self-start mt-4 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-light">
              See Sample Report
            </Button>
          </div>

          <div className="flex-1 w-full">
            <div className="w-full bg-[#F5F7FA] rounded-2xl border border-gray-200 p-3 shadow-inner">
              <img 
                src={dashboardImg} 
                alt="Analytics Dashboard" 
                className="w-full rounded-xl shadow-sm" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;