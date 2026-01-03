import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/Contact/ContactSection'; 
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Header />
      <main className="flex-1 w-full">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;