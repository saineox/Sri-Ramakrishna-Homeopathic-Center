import React, { useState } from 'react';
import { Leaf, Award, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

interface FoodData {
  id: string;
  emoji: string;
  enName: string;
  mrName: string;
  compound: string;
  benefit: string;
  howToUse: string;
  evidence: number; // Out of 10
  source: string;
  link: string;
}

const foodItems: FoodData[] = [
  {
    id: 'karela',
    emoji: '🥒',
    enName: 'Bitter Gourd',
    mrName: 'कारले (Karela)',
    compound: 'Charantin, Momordicin, Peptide-P',
    benefit: 'Acts similarly to insulin in facilitating glucose uptake by cells, stimulating liver glycogen synthesis, and reducing blood glucose levels.',
    howToUse: '30ml fresh organic juice with a pinch of turmeric early morning on an empty stomach.',
    evidence: 9,
    source: 'Journal of Ethnopharmacology',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21435380/'
  },
  {
    id: 'turmeric',
    emoji: '🫚',
    enName: 'Turmeric',
    mrName: 'हळद (Turmeric)',
    compound: 'Curcuminoids, Curcumin',
    benefit: 'Modulates inflammatory markers, increases cellular glucose absorption, and acts as a powerful antioxidant to reduce diabetic complications.',
    howToUse: '1/2 tsp pure turmeric powder combined with warm water or direct addition in daily meals.',
    evidence: 8.5,
    source: 'Evidence-Based Complementary Medicine',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24376449/'
  },
  {
    id: 'fenugreek',
    emoji: '🌱',
    enName: 'Fenugreek',
    mrName: 'मेथी (Fenugreek)',
    compound: '4-hydroxyisoleucine, Galactomannan',
    benefit: 'Slows down digestion and absorption of carbohydrates, improving glucose tolerance, and lowering insulin requirements.',
    howToUse: 'Soak 1 tsp of fenugreek seeds in water overnight, consume the seeds and water in the morning.',
    evidence: 8,
    source: 'Journal of Medicinal Food',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26620580/'
  },
  {
    id: 'jamun',
    emoji: '🍇',
    enName: 'Jamun Seeds',
    mrName: 'जांभूळ बी (Jamun Seeds)',
    compound: 'Jamboline, Jambosine',
    benefit: 'Prevents the conversion of starch into sugar, thereby controlling rapid post-meal glucose spikes and supporting pancreatic health.',
    howToUse: '1 tsp seed powder twice daily mixed in water 30 minutes before lunch and dinner.',
    evidence: 7.5,
    source: 'Indian Journal of Pharmacology',
    link: 'https://pubmed.ncbi.nlm.nih.gov/22416142/'
  },
  {
    id: 'cinnamon',
    emoji: '🪵',
    enName: 'Cinnamon',
    mrName: 'दालचिनी (Cinnamon)',
    compound: 'Cinnamaldehyde, Proanthocyanidins',
    benefit: 'Improves insulin receptor sensitivity, mimicking insulin actions to assist cellular glucose metabolism.',
    howToUse: 'A pinch of cinnamon powder added to green tea or warm water.',
    evidence: 7,
    source: 'Annals of Family Medicine',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24019437/'
  },
  {
    id: 'amla',
    emoji: '🟢',
    enName: 'Amla',
    mrName: 'आवळा (Amla)',
    compound: 'Ellagitannins, Vitamin C',
    benefit: 'Supplements tissue defense systems, prevents carbohydrate metabolism errors, and regulates blood sugar spikes.',
    howToUse: '1 fresh amla juice daily or 1 tsp dried amla powder with warm water.',
    evidence: 7,
    source: 'International Journal of Food Sciences',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21495900/'
  }
];

const FoodExplorer: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFood, setSelectedFood] = useState<FoodData>(foodItems[0]);

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-0)] border-b border-[var(--border)] animate-on-scroll">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--forest-100)] text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <Leaf className="w-3.5 h-3.5" />
            <span>{t('food_title')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            Scientific Wellness Diet Ingredients
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('food_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Tabs Column (4 columns) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar shrink-0">
            {foodItems.map((food) => (
              <button
                key={food.id}
                onClick={() => setSelectedFood(food)}
                className={`px-5 py-4 rounded-xl border text-left font-bold text-xs sm:text-sm transition-all flex items-center gap-3 shrink-0 ${
                  selectedFood.id === food.id
                    ? 'bg-[var(--forest-500)]/15 border-[var(--forest-500)] text-[var(--forest-700)] shadow-sm'
                    : 'bg-[var(--surface-1)] border-[var(--border)] hover:bg-[var(--surface-2)] text-[var(--text-primary)]'
                }`}
              >
                <span className="text-xl sm:text-2xl">{food.emoji}</span>
                <div className="flex flex-col">
                  <span>{food.enName}</span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-normal mt-0.5">{food.mrName}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Content Panel Column (8 columns) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-1)] shadow-md min-h-[350px] flex flex-col justify-between relative overflow-hidden animate-bloom-anim">
              
              {/* Decorative Background Icon */}
              <span className="absolute -bottom-10 -right-10 text-9xl opacity-5 pointer-events-none select-none">
                {selectedFood.emoji}
              </span>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-5 mb-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black font-serif text-[var(--forest-900)]">
                      {selectedFood.enName}
                    </h4>
                    <p className="text-xs font-bold text-[var(--forest-500)] mt-1">{selectedFood.mrName}</p>
                  </div>
                  
                  {/* Evidence Level Meter */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      {t('food_evidence_level')}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-24 h-2 bg-[var(--border)] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[var(--forest-500)] rounded-full transition-all duration-500" 
                          style={{ width: `${selectedFood.evidence * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-[var(--forest-700)]">
                        {selectedFood.evidence}/10
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Active compound */}
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[var(--saffron-500)]" />
                      Active Phytochemicals
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface-0)] border border-[var(--border)] px-3 py-2 rounded-lg inline-block">
                      {selectedFood.compound}
                    </p>
                  </div>

                  {/* Research citation source */}
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Published Literature
                    </h5>
                    <a
                      href={selectedFood.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--forest-500)] hover:text-[var(--forest-700)] border border-[var(--forest-500)]/20 px-3 py-2 rounded-lg bg-[var(--surface-0)] hover:bg-[var(--surface-2)] transition-all"
                    >
                      <span>{selectedFood.source}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Healing Mechanism */}
                <div className="mb-6">
                  <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                    How it Helps
                  </h5>
                  <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)] leading-relaxed bg-[var(--surface-0)]/60 p-4 rounded-xl border border-[var(--border)]/50">
                    {selectedFood.benefit}
                  </p>
                </div>

                {/* How to use */}
                <div>
                  <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                    {t('food_how_to_use')}
                  </h5>
                  <p className="text-xs sm:text-sm font-semibold text-[var(--forest-700)] leading-relaxed">
                    {selectedFood.howToUse}
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[9px] text-[var(--text-secondary)] font-medium mt-8 border-t border-[var(--border)]/50 pt-4 leading-normal">
                {t('food_disclaimer')}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FoodExplorer;
