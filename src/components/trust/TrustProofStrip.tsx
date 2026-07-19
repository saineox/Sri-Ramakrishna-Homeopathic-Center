import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import { useCountUp } from '../../hooks/useCountUp';

const TrustProofStrip: React.FC = () => {
  const { t } = useTranslation();
  
  // Create count up triggers
  const expCount = useCountUp(25, 1500);
  const patientCount = useCountUp(15000, 2000);
  const successCount = useCountUp(95, 1800);
  const ratingCount = useCountUp(49, 1200); // represents 4.9

  return (
    <section className="relative z-10 py-12 bg-[var(--surface-1)] border-y border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-stretch divide-y-0 divide-x-0 md:divide-x border-[var(--border)]/10">
          
          {/* Card 1: Experience */}
          <div 
            ref={expCount.elementRef} 
            className="flex flex-col items-center justify-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-[var(--forest-700)] flex items-center justify-center">
              <span>{expCount.count}</span>
              <span className="text-[var(--saffron-500)] ml-0.5">+</span>
            </div>
            <p className="text-xs font-bold text-[var(--text-primary)] mt-2 uppercase tracking-wide">
              {t('hero_experience')}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              {t('trust_exp_desc')}
            </p>
          </div>

          {/* Card 2: Patients Treated */}
          <div 
            ref={patientCount.elementRef} 
            className="flex flex-col items-center justify-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-[var(--forest-700)] flex items-center justify-center">
              <span>{(patientCount.count).toLocaleString()}</span>
              <span className="text-[var(--saffron-500)] ml-0.5">+</span>
            </div>
            <p className="text-xs font-bold text-[var(--text-primary)] mt-2 uppercase tracking-wide">
              {t('hero_healed')}
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              {t('trust_healed_desc')}
            </p>
          </div>

          {/* Card 3: Google Rating */}
          <div 
            ref={ratingCount.elementRef} 
            className="flex flex-col items-center justify-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-[var(--forest-700)] flex items-center justify-center">
              <span>{(ratingCount.count / 10).toFixed(1)}</span>
              <span className="text-[var(--saffron-500)] ml-0.5">/5</span>
            </div>
            <p className="text-xs font-bold text-[var(--text-primary)] mt-2 uppercase tracking-wide">
              Google Rating
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              {t('trust_rating_desc')}
            </p>
          </div>

          {/* Card 4: Success rate */}
          <div 
            ref={successCount.elementRef} 
            className="flex flex-col items-center justify-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-[var(--forest-700)] flex items-center justify-center">
              <span>{successCount.count}</span>
              <span className="text-[var(--saffron-500)] ml-0.5">%</span>
            </div>
            <p className="text-xs font-bold text-[var(--text-primary)] mt-2 uppercase tracking-wide">
              Success Rate
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              {t('trust_success_desc')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustProofStrip;
