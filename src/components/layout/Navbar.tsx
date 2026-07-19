import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import ThemeToggle from '../shared/ThemeToggle';
import LanguageToggle from '../shared/LanguageToggle';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'diabetes', 'clinics', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--surface-0)]/80 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none" onClick={closeMenu}>
            <div className="relative overflow-hidden w-12 h-12 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={import.meta.env.BASE_URL + 'Logo.png'} 
                alt="Clinic Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <h1 className="text-base lg:text-lg font-bold text-[var(--forest-700)] leading-tight tracking-tight">
                श्रीरामकृष्ण
              </h1>
              <p className="text-[10px] uppercase font-sans font-bold tracking-wider text-[var(--text-secondary)] opacity-85">
                Homeopathy
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a 
              href="#home" 
              className={`text-sm font-semibold transition-colors relative py-1 hover:text-[var(--forest-500)] ${
                activeSection === 'home' ? 'text-[var(--forest-700)] font-bold' : 'text-[var(--text-secondary)]'
              }`}
            >
              {t('nav_home')}
              {activeSection === 'home' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--forest-500)] rounded-full"></span>}
            </a>
            <a 
              href="#about" 
              className={`text-sm font-semibold transition-colors relative py-1 hover:text-[var(--forest-500)] ${
                activeSection === 'about' ? 'text-[var(--forest-700)] font-bold' : 'text-[var(--text-secondary)]'
              }`}
            >
              {t('nav_about')}
              {activeSection === 'about' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--forest-500)] rounded-full"></span>}
            </a>
            <a 
              href="#services" 
              className={`text-sm font-semibold transition-colors relative py-1 hover:text-[var(--forest-500)] ${
                activeSection === 'services' ? 'text-[var(--forest-700)] font-bold' : 'text-[var(--text-secondary)]'
              }`}
            >
              {t('nav_services')}
              {activeSection === 'services' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--forest-500)] rounded-full"></span>}
            </a>
            <a 
              href="#diabetes" 
              className={`text-sm font-semibold transition-colors relative py-1 hover:text-[var(--forest-500)] ${
                activeSection === 'diabetes' ? 'text-[var(--forest-700)] font-bold' : 'text-[var(--text-secondary)]'
              }`}
            >
              {t('nav_diabetes')}
              {activeSection === 'diabetes' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--forest-500)] rounded-full"></span>}
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-semibold transition-colors relative py-1 hover:text-[var(--forest-500)] ${
                activeSection === 'contact' ? 'text-[var(--forest-700)] font-bold' : 'text-[var(--text-secondary)]'
              }`}
            >
              {t('nav_contact')}
              {activeSection === 'contact' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--forest-500)] rounded-full"></span>}
            </a>
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#booking"
              className="flex items-center gap-2 px-5 py-2.5 bg-[var(--saffron-500)] hover:bg-[var(--saffron-400)] text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[var(--saffron-500)]/40"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav_book')}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--text-primary)] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 px-2 border-t border-[var(--border)] bg-[var(--surface-0)] rounded-2xl shadow-xl flex flex-col gap-3 animate-bloom-anim">
            <nav className="flex flex-col gap-1">
              <a 
                href="#home" 
                onClick={closeMenu}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl ${
                  activeSection === 'home' ? 'bg-[var(--forest-500)]/10 text-[var(--forest-700)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {t('nav_home')}
              </a>
              <a 
                href="#about" 
                onClick={closeMenu}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl ${
                  activeSection === 'about' ? 'bg-[var(--forest-500)]/10 text-[var(--forest-700)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {t('nav_about')}
              </a>
              <a 
                href="#services" 
                onClick={closeMenu}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl ${
                  activeSection === 'services' ? 'bg-[var(--forest-500)]/10 text-[var(--forest-700)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {t('nav_services')}
              </a>
              <a 
                href="#diabetes" 
                onClick={closeMenu}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl ${
                  activeSection === 'diabetes' ? 'bg-[var(--forest-500)]/10 text-[var(--forest-700)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {t('nav_diabetes')}
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className={`px-4 py-2.5 text-sm font-semibold rounded-xl ${
                  activeSection === 'contact' ? 'bg-[var(--forest-500)]/10 text-[var(--forest-700)]' : 'text-[var(--text-secondary)]'
                }`}
              >
                {t('nav_contact')}
              </a>
            </nav>
            <div className="px-2 pt-2 border-t border-[var(--border)]">
              <a
                href="#booking"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--saffron-500)] hover:bg-[var(--saffron-400)] text-white font-bold text-xs rounded-xl shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('nav_book')}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
