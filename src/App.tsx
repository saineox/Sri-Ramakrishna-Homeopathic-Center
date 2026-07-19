import React from 'react';
import { LocaleProvider } from './i18n/LocaleContext';
import { ThemeProvider } from './theme/ThemeContext';
import SkipToContent from './components/shared/SkipToContent';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/hero/HeroSection';
import TrustProofStrip from './components/trust/TrustProofStrip';
import DoctorStory from './components/about/DoctorStory';
import BentoGrid from './components/services/BentoGrid';
import FoodExplorer from './components/food-science/FoodExplorer';
import DiabetesSection from './components/DiabetesSection';
import PatientTimeline from './components/timeline/PatientTimeline';
import TestimonialCarousel from './components/testimonials/TestimonialCarousel';
import BookingSection from './components/booking/BookingSection';
import ClinicLocation from './components/clinic/ClinicLocation';
import NoticeBanner from './components/notice/NoticeBanner';
import ContactSection from './components/contact/ContactSection';
import BlogTeaser from './components/blog/BlogTeaser';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';
import MobileBottomBar from './components/layout/MobileBottomBar';

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <div className="min-h-screen bg-[var(--surface-0)] text-[var(--text-primary)] relative select-none">
          <SkipToContent />
          <Navbar />
          
          <main id="main-content" className="outline-none">
            <HeroSection />
            <TrustProofStrip />
            <DoctorStory />
            <BentoGrid />
            <FoodExplorer />
            <DiabetesSection />
            <PatientTimeline />
            <TestimonialCarousel />
            <BookingSection />
            <ClinicLocation />
            <NoticeBanner />
            <ContactSection />
            <BlogTeaser />
          </main>
          
          <Footer />
          <FloatingWhatsApp />
          <MobileBottomBar />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;