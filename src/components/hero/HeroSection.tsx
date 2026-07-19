import React from 'react';
import { ArrowRight, Play, Shield, Award, Users, Heart } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--surface-1)] via-[var(--surface-0)] to-[var(--surface-2)]"
    >
      {/* Decorative Particle Backgrounds */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--saffron-400)]/5 rounded-full blur-3xl animate-pulse duration-[8000ms] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--forest-500)]/5 rounded-full blur-3xl animate-pulse duration-[10000ms] pointer-events-none"></div>
      
      {/* Floating Leaves & Herbs (CSS Parallax Decorator) */}
      <div className="absolute top-1/4 left-5 text-xl opacity-30 select-none animate-bounce duration-[6000ms] pointer-events-none">🌿</div>
      <div className="absolute bottom-1/4 right-8 text-2xl opacity-25 select-none animate-bounce duration-[8000ms] pointer-events-none">🍃</div>
      <div className="absolute top-1/3 right-1/4 text-lg opacity-20 select-none animate-bounce duration-[7000ms] pointer-events-none">🌱</div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Grid (7 columns) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Animated Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-2)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide shadow-sm border border-[var(--saffron-400)]/15 mb-6 bloom-reveal">
              <Award className="w-3.5 h-3.5" />
              <span>{t('hero_badge')}</span>
            </div>

            {/* Cinematic Headings */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.1] text-[var(--forest-900)] mb-4 text-balance">
              {t('hero_say_no')}{' '}
              <span className="text-red-500 line-through decoration-3 decoration-red-500 inline-block px-1 strike-reveal">
                {t('hero_diabetes')}
              </span>
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1.5 text-sm sm:text-base font-semibold text-red-500/90 mb-8 max-w-lg">
              <span>• {t('hero_medicines')}</span>
              <span>• {t('hero_insulin')}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-serif tracking-tight leading-[1.1] text-[var(--forest-900)] mb-5 text-balance">
              {t('hero_say_yes')}{' '}
              <span className="text-[var(--forest-700)] dark:text-[var(--forest-600)] inline-block bloom-reveal">
                {t('hero_health')}
              </span>
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1.5 text-sm sm:text-base font-semibold text-[var(--forest-500)] mb-8 max-w-lg">
              <span>✦ {t('hero_discipline')}</span>
              <span>✦ {t('hero_homeopathy')}</span>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-xl mb-8 leading-relaxed">
              {t('hero_tagline')} — {t('about_text_1')}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <a
                href="#booking"
                className="px-8 py-4 rounded-xl font-bold text-sm bg-[var(--saffron-500)] hover:bg-[var(--saffron-400)] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group text-center"
              >
                <span>{t('hero_cta_primary')}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#testimonials"
                className="px-8 py-4 rounded-xl font-bold text-sm border border-[var(--border)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] text-[var(--text-primary)] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Play className="w-4 h-4 text-[var(--forest-500)] shrink-0" />
                <span>{t('hero_cta_secondary')}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs font-bold text-[var(--text-secondary)] border-t border-[var(--border)] pt-8 w-full">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[var(--forest-500)]" />
                <span>{t('hero_experience')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[var(--forest-500)]" />
                <span>{t('hero_healed')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[var(--forest-500)]" />
                <span>{t('hero_certified')}</span>
              </div>
            </div>

          </div>

          {/* Right Immersive Animated Blob Canvas (5 columns) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Morphing Blob Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center shadow-2xl overflow-visible">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--forest-500)]/15 to-[var(--saffron-500)]/15 blur-xl animate-pulse duration-[4000ms]"></div>
              
              {/* Interactive Morphing CSS Circle Blob */}
              <div 
                className="w-full h-full rounded-full bg-gradient-to-br from-[var(--forest-700)] to-[var(--saffron-500)] p-1 opacity-90 animate-spin-slow"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animationDuration: '20s'
                }}
              >
                {/* White inner container */}
                <div 
                  className="w-full h-full bg-[var(--surface-0)] rounded-full flex flex-col items-center justify-center p-6 text-center select-none"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                  }}
                >
                  <span className="text-3xl sm:text-4xl text-[var(--forest-500)] mb-1">🌿</span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold font-serif text-[var(--forest-900)] tracking-wide">
                    MC
                  </h4>
                  <h5 className="text-xl sm:text-2xl font-black text-[var(--saffron-500)] tracking-widest mt-1">
                    405°
                  </h5>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mt-2">
                    Healing Concept
                  </p>
                </div>
              </div>

              {/* Float badge indicators orbiting around the blob */}
              <div className="absolute -top-4 left-1/4 w-10 h-10 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] shadow-md flex items-center justify-center animate-bounce duration-[4000ms]">
                🍎
              </div>
              <div className="absolute top-1/2 -left-6 w-10 h-10 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] shadow-md flex items-center justify-center animate-bounce duration-[5000ms]">
                🧘
              </div>
              <div className="absolute top-1/3 -right-6 w-10 h-10 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] shadow-md flex items-center justify-center animate-bounce duration-[6000ms]">
                💊
              </div>
              <div className="absolute -bottom-4 right-1/4 w-10 h-10 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] shadow-md flex items-center justify-center animate-bounce duration-[4500ms]">
                🍋
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center select-none pointer-events-none opacity-85">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Scroll</span>
        <div className="w-1.5 h-6 bg-[var(--border)] rounded-full overflow-hidden">
          <div className="w-full h-1/2 bg-[var(--forest-500)] rounded-full animate-bounce duration-[2000ms]"></div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
