import React from 'react';
import { GraduationCap } from 'lucide-react';
// Use another image for the "Students collaborating" visual
import studentsImg from '../../assets/ForColleges3.png'; 

const BridgingGap: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 pb-20 px-4 md:px-10">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          
          {/* Left Visual */}
          <div className="flex-1 w-full">
            <div className="w-full bg-surface-dark rounded-xl border border-border-dark p-2 shadow-2xl relative group">
              <img 
                src={studentsImg} 
                alt="Students Collaborating" 
                className="w-full rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" 
              />
              
              {/* Floating Card Mockup */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-border-dark p-6 rounded-2xl shadow-xl max-w-[280px] hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Graduation Verified</p>
                    <p className="text-xs text-gray-400">Class of 2024</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Credential ID: #8829-AF22-9901</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Bridging the Gap: <br/><span className="text-primary">Alumni & Career</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Create a lifelong value loop for your students. Our platform doesn't just stop at graduation—it transforms alumni into active mentors and career gateways.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-surface-dark p-4 rounded-xl border border-surface-border">
                <h4 className="text-white font-bold mb-1">Mentorship Matching</h4>
                <p className="text-sm text-gray-400">AI-driven pairing of students with relevant alumni.</p>
              </div>
              <div className="bg-surface-dark p-4 rounded-xl border border-surface-border">
                <h4 className="text-white font-bold mb-1">Exclusive Job Boards</h4>
                <p className="text-sm text-gray-400">Opportunities curated specifically for your network.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BridgingGap;