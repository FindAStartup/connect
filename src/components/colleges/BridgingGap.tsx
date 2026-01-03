import React from 'react';
import studentsImg from '../../assets/ForColleges3.png'; 

const BridgingGap: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 pb-20 px-4 md:px-10 bg-brand-light">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          
          {/* Left Visual */}
          <div className="flex-1 w-full">
            <div className="w-full bg-brand-light rounded-2xl border border-gray-200 p-2 shadow-xl relative group h-full">
              <img 
                src={studentsImg} 
                alt="Students Collaborating" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-brand-dark text-3xl md:text-4xl font-black leading-tight">
              Bridging the Gap: <br/><span className="text-brand-blue">Alumni & Career</span>
            </h2>
            <p className="text-brand-dark/70 text-lg font-medium">
              Create a lifelong value loop for your students. Our platform doesn't just stop at graduation—it transforms alumni into active mentors and career gateways.
            </p>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              
              {/* Card 1 */}
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-brand-blue/30">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Mentorship Matching</h4>
                <p className="text-sm text-brand-dark/60 font-medium">AI-driven pairing of students with relevant alumni.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-brand-green/30">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Exclusive Job Boards</h4>
                <p className="text-sm text-brand-dark/60 font-medium">Opportunities curated specifically for your network.</p>
              </div>

              {/* Card 3 (New) */}
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-brand-blue/30">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Career Fair Management</h4>
                <p className="text-sm text-brand-dark/60 font-medium">Organize virtual and physical recruiting events effortlessly.</p>
              </div>

              {/* Card 4 (New) */}
              <div className="bg-brand-light p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-brand-green/30">
                <h4 className="text-brand-dark font-bold mb-1 text-lg">Alumni Donation Tracking</h4>
                <p className="text-sm text-brand-dark/60 font-medium">Seamlessly integrate fundraising into the alumni experience.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BridgingGap;