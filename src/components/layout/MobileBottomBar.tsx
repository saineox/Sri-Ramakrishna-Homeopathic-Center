import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const MobileBottomBar: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--surface-0)]/90 backdrop-blur-md border-t border-[var(--border)] px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 animate-bloom-anim">
      {/* Phone CTA */}
      <a
        href="tel:+919423838866"
        className="flex-1 flex flex-col items-center justify-center py-2 bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--forest-700)] rounded-xl border border-[var(--border)] transition-colors focus:outline-none"
      >
        <Phone className="w-4 h-4 mb-0.5 text-[var(--forest-500)]" />
        <span className="text-[10px] font-bold uppercase tracking-wider">{t('bottom_call')}</span>
      </a>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919423838866?text=Hello%20Dr.%20Gavde%2C%20I%20would%20like%20to%20request%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25d366] rounded-xl border border-[#25D366]/25 transition-colors focus:outline-none"
      >
        <MessageCircle className="w-4 h-4 mb-0.5 fill-[#25d366]" />
        <span className="text-[10px] font-bold uppercase tracking-wider">{t('bottom_whatsapp')}</span>
      </a>

      {/* Direct Booking Link CTA */}
      <a
        href="#booking"
        className="flex-[1.5] flex items-center justify-center gap-1.5 py-3.5 bg-[var(--saffron-500)] hover:bg-[var(--saffron-400)] text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95 focus:outline-none"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-xs uppercase tracking-wider">{t('bottom_book')}</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
