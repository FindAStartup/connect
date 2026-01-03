import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesHero from '../components/Features/FeaturesHero';
import PlatformFeatures from '../components/Features/PlatformFeatures';
import CoreModules from '../components/Features/CoreModules';
import ComparisonTable from '../components/Features/ComparisonTable';
import FeaturesCta from '../components/Features/FeaturesCta';

const Features: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Header />
      <main className="flex-1 w-full">
        <FeaturesHero />
        <PlatformFeatures />
        <CoreModules />
        <ComparisonTable />
        <FeaturesCta />
      </main>
      <Footer />
    </div>
  );
};

export default Features;