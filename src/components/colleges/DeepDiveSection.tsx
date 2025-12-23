import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
// Placeholder for the chart image
import dashboardImg from '../../assets/ForColleges2.png'; 

const DeepDiveSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 md:px-10">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center rounded-3xl bg-surface-dark p-8 md:p-12 border border-surface-border">
          
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Deep Analytics for <br/><span class="text-primary">Data-Driven Decisions</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Stop guessing about student success. Our comprehensive dashboard gives administrators a granular view of network health, engagement trends, and employment outcomes.
            </p>
            
            <ul className="flex flex-col gap-4 mt-2">
              {["Track career placement rates in real-time.", "Identify at-risk students through engagement drop-offs.", "Measure alumni mentorship effectiveness."].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-primary mt-1 shrink-0" size={20} />
                  <p className="text-white">{item}</p>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="self-start mt-4 border-primary text-primary hover:bg-primary hover:text-background">
              See Sample Report
            </Button>
          </div>

          <div className="flex-1 w-full">
            <div className="w-full bg-background rounded-xl border border-border-dark p-2 shadow-2xl">
              <img src={dashboardImg} alt="Analytics Dashboard" className="w-full rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;