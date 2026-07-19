import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

interface Article {
  id: number;
  emoji: string;
  titleKey: string;
  category: string;
  readTime: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    emoji: '🥒',
    titleKey: '5 Foods that help reverse diabetes naturally',
    category: 'Nutrition',
    readTime: '4 min'
  },
  {
    id: 2,
    emoji: '🧘',
    titleKey: 'Daily Yoga routines to improve insulin resistance',
    category: 'Discipline',
    readTime: '6 min'
  },
  {
    id: 3,
    emoji: '💊',
    titleKey: 'Constitutional Homeopathy: Myths vs Science',
    category: 'Homeopathy',
    readTime: '5 min'
  }
];

const BlogTeaser: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-0)] border-b border-[var(--border)] animate-on-scroll">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--forest-100)] text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Health Insights</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('blog_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('blog_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="group p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="w-full aspect-[16/10] bg-[var(--surface-0)] rounded-xl border border-[var(--border)] flex items-center justify-center text-5xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 shadow-inner">
                {article.emoji}
              </div>

              {/* Meta information row */}
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                <span className="text-[var(--forest-700)]">{article.category}</span>
                <span>{article.readTime} read</span>
              </div>

              {/* Title heading */}
              <h4 className="text-sm sm:text-base font-bold font-serif text-[var(--forest-900)] mb-4 leading-snug group-hover:text-[var(--forest-700)] transition-colors">
                {article.titleKey}
              </h4>

              {/* Trigger read article */}
              <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[var(--forest-500)] mt-auto pt-2">
                <span>{t('blog_read_more')}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogTeaser;
