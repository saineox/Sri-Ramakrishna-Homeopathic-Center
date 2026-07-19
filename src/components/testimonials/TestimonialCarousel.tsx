import React, { useRef } from 'react';
import { MessageSquare, Star, Quote } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  condition: string;
  duration: string;
  textKey: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    initials: 'RG',
    name: 'Ramesh Gawade',
    condition: 'मधुमेह (Diabetes Reversal)',
    duration: '9',
    textKey: 'timeline_m9_desc', // Reuse description or write fallback
    rating: 5
  },
  {
    id: 2,
    initials: 'SP',
    name: 'Sunita Patil',
    condition: 'त्वचा रोग (Eczema)',
    duration: '6',
    textKey: 'specialties.skin.desc',
    rating: 5
  },
  {
    id: 3,
    initials: 'AK',
    name: 'Anil Kulkarni',
    condition: 'पोटाचे विकार (IBS)',
    duration: '4',
    textKey: 'specialties.digestive.desc',
    rating: 5
  },
  {
    id: 4,
    initials: 'MK',
    name: 'Meena Kamble',
    condition: 'सांध्यांचे विकार (Arthritis)',
    duration: '8',
    textKey: 'specialties.joints.desc',
    rating: 4
  }
];

const TestimonialCarousel: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-[var(--surface-0)] border-b border-[var(--border)] overflow-hidden animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--forest-100)] text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('test_title')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('test_subtitle')}
          </h3>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Scroll snap carousel layout wrapper */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-2 custom-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="min-w-[290px] sm:min-w-[360px] md:min-w-[400px] max-w-[450px] shrink-0 snap-center p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Quote mark decorator */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[var(--forest-500)]/10" />

              {/* Avatar header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--forest-700)] to-[var(--saffron-500)] text-white flex items-center justify-center font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                    {item.name}
                  </h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-[var(--forest-500)]/10 text-[var(--forest-700)] text-[9px] font-black uppercase tracking-wider mt-0.5">
                    {t('test_verified')}
                  </span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 text-[var(--saffron-500)] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < item.rating ? 'fill-[var(--saffron-500)]' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Condition treated & duration */}
              <div className="flex flex-col gap-1 text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">
                <span>{t('test_condition')} {item.condition}</span>
                <span>{t('test_duration')} {item.duration} {t('test_months')}</span>
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed italic font-medium">
                &ldquo;{t(item.textKey)}&rdquo;
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;
