import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CollegesHero from '../components/colleges/CollegesHero';
import StatsGrid from '../components/colleges/StatsGrid';
import FeaturesGrid from '../components/colleges/FeaturesGrid';
import DeepDiveSection from '../components/colleges/DeepDiveSection';
import BridgingGap from '../components/colleges/BridgingGap';
import FinalCta from '../components/colleges/FinalCta';

const ForColleges: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <CollegesHero />
        <StatsGrid />
        <FeaturesGrid />
        <DeepDiveSection />
        <BridgingGap />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default ForColleges;