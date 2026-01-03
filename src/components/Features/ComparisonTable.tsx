import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="bg-white py-20 border-y border-brand-blue/10">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-brand-dark">Why Upgrade?</h2>
          <p className="mt-4 text-brand-dark/60 font-medium text-lg">See how Connect compares to traditional alumni directories.</p>
        </div>
        
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
          {/* Header */}
          <div className="grid grid-cols-3 bg-brand-bg p-5 border-b border-gray-100">
            <div className="font-bold text-brand-dark/60">Feature</div>
            <div className="text-center font-bold text-brand-dark/60">Traditional Sites</div>
            {/* CHANGED: text-brand-green -> text-brand-blue */}
            <div className="text-center font-bold text-brand-blue">Connect</div>
          </div>
          
          {/* Rows */}
          {[
            { feature: "Identity Verification", old: false, new: true },
            { feature: "Cross-College Networking", old: false, new: true },
            { feature: "Data Ownership", old: "Platform Owned", new: "User Owned", text: true },
            { feature: "Professional Referrals", old: "Manual / None", new: "Automated", text: true },
          ].map((row, idx) => (
            <div key={idx} className={`grid grid-cols-3 p-5 items-center border-b border-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-bg/30'} last:border-0`}>
              <div className="font-bold text-brand-dark">{row.feature}</div>
              
              <div className="flex justify-center text-gray-400 font-medium text-sm">
                {row.text ? row.old : <XCircle className="text-red-300" />}
              </div>
              
              {/* CHANGED: text-brand-green -> text-brand-blue */}
              <div className="flex justify-center text-brand-blue font-bold text-sm">
                {row.text ? row.new : <CheckCircle2 />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;