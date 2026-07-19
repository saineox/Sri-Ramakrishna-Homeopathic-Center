import React from 'react';
import { CalendarRange, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

interface MilestoneData {
  month: string;
  titleKey: string;
  descKey: string;
  hba1c: string;
  insulin: string;
  weight: string;
  icon: React.ReactNode;
}

const PatientTimeline: React.FC = () => {
  const { t } = useTranslation();

  const milestones: MilestoneData[] = [
    {
      month: '0',
      titleKey: 'timeline_m0',
      descKey: 'timeline_m0_desc',
      hba1c: '9.2%',
      insulin: '30 Units',
      weight: '92 kg',
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      month: '3',
      titleKey: 'timeline_m3',
      descKey: 'timeline_m3_desc',
      hba1c: '7.8%',
      insulin: '20 Units',
      weight: '86 kg',
      icon: <Activity className="w-5 h-5" />
    },
    {
      month: '6',
      titleKey: 'timeline_m6',
      descKey: 'timeline_m6_desc',
      hba1c: '6.5%',
      insulin: '10 Units',
      weight: '80 kg',
      icon: <Activity className="w-5 h-5" />
    },
    {
      month: '9',
      titleKey: 'timeline_m9',
      descKey: 'timeline_m9_desc',
      hba1c: '5.9%',
      insulin: '0 Units',
      weight: '76 kg',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-1)] border-b border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-2)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <CalendarRange className="w-3.5 h-3.5" />
            <span>Success Pathway</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('timeline_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('timeline_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical axis line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--border)] transform -translate-x-1/2 rounded-full overflow-hidden">
            {/* Animated drawing line indicator */}
            <div className="w-full bg-[var(--forest-500)] animate-timeline-line"></div>
          </div>

          <div className="flex flex-col gap-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.month}
                  className={`flex flex-col md:flex-row items-stretch relative w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } animate-on-scroll`}
                >
                  {/* Central Node Circle */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-10 h-10 rounded-full border-4 border-[var(--surface-1)] bg-[var(--forest-700)] text-white flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                    {item.icon}
                  </div>

                  {/* Empty Spacer Column for layout */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Active Card Content Column */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-0)] shadow-md relative hover:shadow-lg transition-shadow duration-300">
                      
                      {/* Triangle Pointer */}
                      <div className={`absolute top-8 w-3 h-3 bg-[var(--surface-0)] border-t border-l border-[var(--border)] transform rotate-45 hidden md:block ${
                        isEven ? 'right-full translate-x-1.5' : 'left-full -translate-x-1.5 rotate-[225deg]'
                      }`}></div>

                      {/* Header */}
                      <span className="px-2.5 py-1 rounded bg-[var(--forest-500)]/10 text-[var(--forest-700)] text-[10px] font-black uppercase tracking-wider">
                        Month {item.month}
                      </span>
                      
                      <h4 className="text-md sm:text-lg font-bold font-serif text-[var(--forest-900)] mt-3 leading-snug">
                        {t(item.titleKey)}
                      </h4>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed font-medium">
                        {t(item.descKey)}
                      </p>

                      {/* Metric Grid */}
                      <div className="grid grid-cols-3 gap-3 mt-6 border-t border-[var(--border)] pt-4 text-center">
                        <div className="bg-[var(--surface-1)] p-2 rounded-xl border border-[var(--border)]">
                          <p className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">HbA1c</p>
                          <p className="text-xs sm:text-sm font-black text-red-500 mt-0.5">{item.hba1c}</p>
                        </div>
                        <div className="bg-[var(--surface-1)] p-2 rounded-xl border border-[var(--border)]">
                          <p className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">Insulin</p>
                          <p className="text-xs sm:text-sm font-black text-[var(--forest-700)] mt-0.5">{item.insulin}</p>
                        </div>
                        <div className="bg-[var(--surface-1)] p-2 rounded-xl border border-[var(--border)]">
                          <p className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">Weight</p>
                          <p className="text-xs sm:text-sm font-black text-[var(--text-primary)] mt-0.5">{item.weight}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PatientTimeline;
