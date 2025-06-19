import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DiabetesSection from './components/DiabetesSection';
import ClinicLocator from './components/ClinicLocator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <DiabetesSection />
      <ClinicLocator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;