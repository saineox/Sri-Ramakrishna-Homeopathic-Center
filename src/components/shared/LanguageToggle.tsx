import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';

const LanguageToggle: React.FC = () => {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      onClick={toggleLocale}
      className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-[var(--border)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--text-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--forest-500)] flex items-center gap-1.5"
      aria-label={`Switch to ${locale === 'en' ? 'Marathi' : 'English'}`}
    >
      <span className="font-sans text-xs">EN</span>
      <span className="text-[var(--border)] font-normal">|</span>
      <span className="font-serif text-[11px] leading-none">मरा</span>
    </button>
  );
};

export default LanguageToggle;
