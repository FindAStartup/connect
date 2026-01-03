import React from 'react';
import Header from '../components/Header';
import HowItWorksHero from "../components/HowItWorks/HowItWorksHero"
import ProcessTimeline from "../components/HowItWorks/ProcessTimeline"
import ProcessCta from "../components/HowItWorks/ProcessCta"
import Footer from '../components/Footer';

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full bg-brand-bg">
        <HowItWorksHero />
        <ProcessTimeline />
        <ProcessCta />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;