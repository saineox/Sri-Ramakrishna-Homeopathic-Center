import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const CertificationsStrip: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--surface-2)] border-y border-[var(--border)] py-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          
          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-102">
            <div className="w-10 h-10 rounded-lg bg-[var(--forest-100)] flex items-center justify-center text-[var(--forest-500)] shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--forest-700)]">AYUSH Certified</p>
              <p className="text-[10px] text-[var(--text-secondary)]">{t('trust_certified_desc')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-102">
            <div className="w-10 h-10 rounded-lg bg-[var(--saffron-100)] flex items-center justify-center text-[var(--saffron-600)] shadow-inner">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--saffron-600)]">M.D. Homeopathy</p>
              <p className="text-[10px] text-[var(--text-secondary)]">University Post Graduate Degree</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-102">
            <div className="w-10 h-10 rounded-lg bg-[var(--forest-100)] flex items-center justify-center text-[var(--forest-500)] shadow-inner">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--forest-700)]">Registered Practitioner</p>
              <p className="text-[10px] text-[var(--text-secondary)]">State Council Validated</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificationsStrip;
