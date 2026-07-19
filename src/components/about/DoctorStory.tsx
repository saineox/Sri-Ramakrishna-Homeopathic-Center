import React from 'react';
import { Award, BookOpen, Clock } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const DoctorStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-[var(--surface-0)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--forest-100)] text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('about_title')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('about_subtitle')}
          </h3>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clip-path Image container (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer frame glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[var(--forest-500)]/10 to-[var(--saffron-500)]/10 blur-md group-hover:scale-105 transition-transform duration-300"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface-1)] shadow-xl aspect-[3/4] flex items-center justify-center">
                {/* Fallback generated kind doctor profile inside the frame */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-900)]/45 to-transparent z-10"></div>
                
                {/* Doctor placeholder graphic or actual image */}
                <div className="w-full h-full bg-[var(--surface-3)] flex items-center justify-center relative">
                  <div className="text-center p-8 z-20 absolute bottom-4 left-0 right-0 text-white">
                    <p className="text-lg font-bold font-serif">Dr. Nandkumar Gavde</p>
                    <p className="text-[10px] uppercase tracking-widest font-sans opacity-90 mt-1">M.D. (Homeopathy)</p>
                  </div>
                  {/* Subtle vector botanical outline */}
                  <span className="text-8xl select-none opacity-10 filter blur-[1px]">👨‍⚕️</span>
                </div>
              </div>

              {/* Floating dynamic badges */}
              <div className="absolute -bottom-6 -right-6 px-4 py-3 rounded-2xl bg-[var(--surface-0)] border border-[var(--border)] shadow-xl flex items-center gap-3 animate-bounce duration-[6000ms]">
                <div className="w-9 h-9 rounded-xl bg-[var(--saffron-100)] flex items-center justify-center text-[var(--saffron-600)]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Experience</p>
                  <p className="text-xs font-black text-[var(--text-primary)]">25+ Years Clinical</p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 px-4 py-3 rounded-2xl bg-[var(--surface-0)] border border-[var(--border)] shadow-xl flex items-center gap-3 animate-bounce duration-[8000ms]">
                <div className="w-9 h-9 rounded-xl bg-[var(--forest-100)] flex items-center justify-center text-[var(--forest-500)]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Availability</p>
                  <p className="text-xs font-black text-[var(--text-primary)]">By Appointment</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Details & Philosophy (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-[var(--forest-700)]">
              Rediscovering True Healing Primitives
            </h4>
            
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-medium">
              {t('about_text_1')}
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-medium">
              {t('about_text_2')}
            </p>

            {/* Philosophy quote strip */}
            <div className="relative mt-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--forest-50)] to-[var(--saffron-100)]/30 border-l-4 border-[var(--forest-500)] shadow-inner">
              {/* Devanagari calligraphy philosophy quote */}
              <p className="text-lg sm:text-xl font-bold text-[var(--forest-800)] leading-relaxed font-serif text-balance">
                &ldquo;{t('about_quote')}&rdquo;
              </p>
              <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mt-3 text-right">
                — {t('about_quote_author')}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorStory;
