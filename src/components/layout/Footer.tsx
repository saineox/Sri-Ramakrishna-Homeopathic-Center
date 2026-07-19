import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--surface-1)] border-t border-[var(--border)] pt-16 pb-24 lg:pb-12 text-[var(--text-primary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Clinic Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--surface-0)] border border-[var(--border)] flex items-center justify-center p-1.5 shadow-sm">
                <img src={import.meta.env.BASE_URL + 'Logo.png'} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-md font-bold text-[var(--forest-700)]">
                श्रीरामकृष्ण होमिओपैथिक सेंटर
              </h3>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/919423838866"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25d366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current" />
              </a>
              <a
                href="tel:+919423838866"
                className="w-9 h-9 rounded-lg bg-[var(--forest-500)]/10 text-[var(--forest-700)] flex items-center justify-center hover:bg-[var(--forest-500)] hover:text-white transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-5">
              {t('footer_quick_links')}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#home" className="text-xs font-semibold hover:text-[var(--forest-500)] transition-colors">
                  {t('nav_home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-xs font-semibold hover:text-[var(--forest-500)] transition-colors">
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs font-semibold hover:text-[var(--forest-500)] transition-colors">
                  {t('nav_services')}
                </a>
              </li>
              <li>
                <a href="#diabetes" className="text-xs font-semibold hover:text-[var(--forest-500)] transition-colors">
                  {t('nav_diabetes')}
                </a>
              </li>
              <li>
                <a href="#clinics" className="text-xs font-semibold hover:text-[var(--forest-500)] transition-colors">
                  {t('nav_clinics')}
                </a>
              </li>
            </ul>
          </div>

          {/* Specialties Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-5">
              {t('footer_specialties')}
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[var(--text-secondary)]">
              <li>मधुमेह नियंत्रण (Diabetes Care)</li>
              <li>त्वचा रोग (Skin Disorders)</li>
              <li>पोटाचे विकार (Digestive Health)</li>
              <li>कान, नाक व घसा (ENT Care)</li>
              <li>सांध्यांचे विकार (Joints Pain)</li>
            </ul>
          </div>

          {/* Support Info Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              {t('footer_contact_support')}
            </h4>
            
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-[var(--forest-500)] shrink-0" />
              <div>
                <p className="text-xs font-bold">{t('notice_call')}</p>
                <p className="text-xs text-[var(--text-secondary)]">+91-9423-838866</p>
                <p className="text-xs text-[var(--text-secondary)]">+91-7720-838866</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[var(--forest-500)] shrink-0" />
              <div>
                <p className="text-xs font-bold">{t('clinic_address_label')}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  ओम गणेशा सकुल, गडहिंगलज
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Area */}
        <div className="border-t border-[var(--border)] pt-8 pb-4 text-center">
          <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-4">
            {t('footer_disclaimer')}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-secondary)] pt-4 border-t border-[var(--border)]/50">
            <p>
              &copy; {new Date().getFullYear()} श्रीरामकृष्ण होमिओपैथिक सेंटर. {t('footer_rights')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[var(--text-primary)]">{t('footer_privacy')}</a>
              <a href="#" className="hover:text-[var(--text-primary)]">{t('footer_terms')}</a>
            </div>
            {/* Scroll-to-top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] text-[var(--text-primary)] transition-all shadow-sm focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
