import React from 'react';
import { GraduationCap } from 'lucide-react';
import studentsImg from '../../assets/ForColleges3.png'; 

const BridgingGap: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 pb-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          
          {/* Left Visual */}
          <div className="flex-1 w-full">
            <div className="w-full bg-white rounded-2xl border border-gray-200 p-2 shadow-xl relative group">
              <img 
                src={studentsImg} 
                alt="Students Collaborating" 
                className="w-full rounded-xl" 
              />
              
              {/* Floating Card Mockup */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl max-w-[280px] hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-brand-dark font-bold text-sm">Graduation Verified</p>
                    <p className="text-xs text-brand-dark/60 font-medium">Class of 2024</p>
                  </div>
                </div>
                <p className="text-xs text-brand-dark/40 font-mono">Credential ID: #8829-AF22-9901</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-brand-dark text-3xl md:text-4xl font-black leading-tight">
              Bridging the Gap: <br/><span class="text-brand-blue">Alumni & Career</span>
            </h2>
            <p className="text-brand-dark/70 text-lg font-medium">
              Create a lifelong value loop for your students. Our platform doesn't just stop at graduation—it transforms alumni into active mentors and career gateways.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Mentorship Matching</h4>
                <p className="text-sm text-brand-dark/60 font-medium">AI-driven pairing of students with relevant alumni.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Exclusive Job Boards</h4>
                <p className="text-sm text-brand-dark/60 font-medium">Opportunities curated specifically for your network.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BridgingGap;