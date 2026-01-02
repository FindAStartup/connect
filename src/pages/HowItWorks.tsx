import React from 'react';
import Header from '../components/Header';
import HowItWorksSection from '../components/HowItWorks/HowItWorksSection';
import Footer from '../components/Footer';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center bg-background">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;