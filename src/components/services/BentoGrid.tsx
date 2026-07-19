import React from 'react';
import { Stethoscope } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import ServiceCard from './ServiceCard';

const BentoGrid: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-1)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{t('services_badge')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('services_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('services_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Asymmetric span card 1 */}
          <div className="lg:col-span-2">
            <ServiceCard id="diabetes" emoji="🍬" isSpecial={true} />
          </div>

          <ServiceCard id="skin" emoji="🩺" />
          
          <ServiceCard id="digestive" emoji="🫃" />
          <ServiceCard id="women" emoji="🚺" />
          <ServiceCard id="lungs" emoji="🫁" />

          <ServiceCard id="ent" emoji="👂" />
          <ServiceCard id="joints" emoji="🦴" />
          <ServiceCard id="mental" emoji="🧠" />

          <div className="md:col-span-2 lg:col-span-3">
            <ServiceCard id="kidney" emoji="🫘" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
