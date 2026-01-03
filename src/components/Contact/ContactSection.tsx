import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="flex-grow flex flex-col items-center justify-center p-4 py-10 lg:p-20">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;