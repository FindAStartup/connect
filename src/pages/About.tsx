import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import MissionBanner from '../components/about/MissionBanner';
import WhyDecentralized from '../components/about/WhyDecentralized';
import ValueProps from '../components/about/ValueProps';
import TargetAudience from '../components/about/TargetAudience';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <AboutHero />
        <MissionBanner />
        <WhyDecentralized />
        <ValueProps />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
};

export default About;