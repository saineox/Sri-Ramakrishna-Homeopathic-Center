import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';

interface ServiceCardProps {
  id: string;
  emoji: string;
  isSpecial?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, emoji, isSpecial = false }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
        isSpecial
          ? 'bg-gradient-to-br from-[var(--saffron-100)] to-[var(--surface-0)] border-[var(--saffron-400)]/40 shadow-lg hover:shadow-xl dark:from-[var(--surface-1)] dark:border-[var(--saffron-500)]/50'
          : 'bg-[var(--surface-1)] border-[var(--border)] hover:bg-[var(--surface-2)] shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        {/* Animated icon container */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner mb-6 transition-transform duration-300 hover:scale-110 ${
          isSpecial ? 'bg-[var(--saffron-500)] text-white' : 'bg-[var(--surface-0)]'
        }`}>
          <span>{emoji}</span>
        </div>

        {/* Heading */}
        <h4 className="text-md sm:text-lg font-bold font-serif text-[var(--forest-900)] mb-3 leading-snug">
          {t(`specialties.${id}.title`)}
        </h4>

        {/* Paragraph */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
          {t(`specialties.${id}.desc`)}
        </p>
      </div>

      {/* Footer link */}
      <div className="mt-6 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[var(--forest-500)] group-hover:text-[var(--forest-700)]">
        <span>{t('services_learn_more')}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </div>

      {isSpecial && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-[var(--saffron-500)] text-white text-[9px] font-black uppercase tracking-wider">
          Flagship
        </span>
      )}
    </div>
  );
};

export default ServiceCard;
