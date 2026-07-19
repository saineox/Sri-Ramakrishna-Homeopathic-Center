import React from 'react';
import { AlertCircle, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const NoticeBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-[var(--saffron-600)] to-[var(--saffron-500)] text-white py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Text block */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <AlertCircle className="w-6 h-6 shrink-0 animate-bounce duration-[3000ms]" />
            <p className="text-xs sm:text-sm font-semibold leading-relaxed">
              <strong className="font-extrabold uppercase tracking-wide mr-1">{t('notice_bold')}</strong>
              {t('notice_text')}
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919423838866"
              className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl bg-white text-[var(--saffron-600)] hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-1.5 focus:outline-none"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t('notice_call')}</span>
            </a>
            <a
              href="https://wa.me/919423838866"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl bg-[var(--forest-700)] hover:bg-[var(--forest-600)] text-white transition-colors shadow-sm flex items-center gap-1.5 focus:outline-none"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[var(--forest-700)]" />
              <span>{t('notice_whatsapp')}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBanner;
