import React, { useState } from 'react';
import { Apple, Activity, Award, Calculator, CheckCircle2, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

const DiabetesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'diet' | 'discipline' | 'dhara'>('diet');

  const dietPoints = [
    'Traditional low-GI millet integration (Bajra, Jowar, Ragi)',
    'Herbal insulin mimics (Bitter gourd/Karela daily raw extracts)',
    'Traditional spices (Fenugreek seed infusion, pure Turmeric powder)',
    'Constitutional biological timings (Circadian ayurvedic eating windows)'
  ];

  const exercisePoints = [
    'Surya Namaskar sequences (stimulates muscle insulin receptors)',
    'Pranayama breathing protocols (Kapalbhati & Anulom Vilom)',
    'Low-intensity walking meditation (regulates cortisol stress hormones)',
    'Strength training movements (increases lean mass glucose disposal)'
  ];

  const homeopathyPoints = [
    'Constitutional diagnostic mapping (individualized base state)',
    'Syzygium jambolanum & Gymnema mother tinctures for initial sugar control',
    'Deep-acting miasmatic chronic remedy schedules',
    'Structured progressive weaning protocols from conventional insulin'
  ];

  return (
    <section 
      id="diabetes" 
      className="py-20 lg:py-28 bg-[var(--surface-2)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--saffron-100)] text-[var(--saffron-600)] dark:bg-[var(--surface-1)] dark:text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <Target className="w-3.5 h-3.5" />
            <span>Reversal Pathway</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            The 3D Diabetes Reversal Program
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium text-balance">
            Our scientifically-validated program combining specialized nutrition, active discipline, and constitutional homeopathy.
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* 3D Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Diet */}
          <div className="p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[var(--forest-100)] text-[var(--forest-500)] flex items-center justify-center text-xl mb-6 shadow-inner">
              <Apple className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black font-serif text-[var(--forest-900)] mb-3">
              Diet (आहार)
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
              Regional Indian whole foods and herbal infusions that support natural glucose management and pancreas function.
            </p>
            <ul className="flex flex-col gap-3">
              {dietPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest-500)] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Discipline */}
          <div className="p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[var(--saffron-100)] text-[var(--saffron-600)] flex items-center justify-center text-xl mb-6 shadow-inner">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black font-serif text-[var(--forest-900)] mb-3">
              Discipline (अनुशासन)
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
              Structured movement protocols designed to reduce cortisol, improve metabolic kinetics, and enhance insulin sensitivity.
            </p>
            <ul className="flex flex-col gap-3">
              {exercisePoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest-500)] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: Dhara */}
          <div className="p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-0)] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[var(--forest-100)] text-[var(--forest-500)] flex items-center justify-center text-xl mb-6 shadow-inner">
              <Calculator className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black font-serif text-[var(--forest-900)] mb-3">
              Dhara (धारा / उपचार)
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-medium">
              The continuous schedule of deep-acting constitutional homeopathic remedies custom-selected for your bodily layout.
            </p>
            <ul className="flex flex-col gap-3">
              {homeopathyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest-500)] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tabbed Interactive Core Programs Details */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-0)] shadow-md">
          {/* Tabs selector */}
          <div className="flex border-b border-[var(--border)] pb-4 mb-8">
            {(['diet', 'discipline', 'dhara'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center font-bold text-xs sm:text-sm uppercase tracking-wider py-2 border-b-2 transition-all ${
                  activeTab === tab
                    ? 'border-[var(--forest-500)] text-[var(--forest-700)]'
                    : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab === 'diet' ? 'Diet (आहार)' : tab === 'discipline' ? 'Discipline (अनुशासन)' : 'Dhara (धारा)'}
              </button>
            ))}
          </div>

          {/* Active content details */}
          <div className="flex flex-col md:flex-row gap-8 items-center animate-bloom-anim">
            {/* Left side details */}
            <div className="flex-1">
              <h5 className="text-md sm:text-lg font-extrabold font-serif text-[var(--forest-900)] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5.5 h-5.5 text-[var(--forest-500)] shrink-0" />
                <span>Program Details</span>
              </h5>
              
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium mb-6">
                {activeTab === 'diet' && 'Nutrition is our core foundation. We replace simple carbohydrate grains with fiber-rich options like Bajra and Jowar. These digest slowly, stopping blood glucose levels from spiking. Herbal extracts are scheduled before meals to support glucose metabolism.'}
                {activeTab === 'discipline' && 'Movement stimulates skeletal muscles to absorb glucose directly from the bloodstream, bypassing insulin requirements. Daily Surya Namaskar and specific pranayama breathing exercises regulate endocrine functions and support glucose tolerance.'}
                {activeTab === 'dhara' && 'Constitutional homeopathic remedies act as biological catalysts. Dr. Gavde selects deep remedies that align with your inherited factors (miasms) and organ needs. This supports healthy cellular responses and helps reduce conventional medication dependence.'}
              </p>

              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[var(--saffron-600)] hover:text-[var(--saffron-500)]"
              >
                <span>Get Customized Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right side illustration icon container */}
            <div className="w-32 h-32 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 shadow-inner">
              <span className="text-5xl select-none">
                {activeTab === 'diet' && '🥗'}
                {activeTab === 'discipline' && '🧘'}
                {activeTab === 'dhara' && '💧'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DiabetesSection;