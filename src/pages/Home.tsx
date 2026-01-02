import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Home/HeroSection';
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;