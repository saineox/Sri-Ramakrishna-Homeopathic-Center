import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';

const ClinicLocation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="clinics" 
      className="py-20 lg:py-28 bg-[var(--surface-0)] border-b border-[var(--border)] animate-on-scroll"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--forest-100)] text-[var(--forest-700)] text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Us</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-[var(--forest-900)] mt-4 tracking-tight">
            {t('clinic_title')}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed font-medium">
            {t('clinic_subtitle')}
          </p>
          <div className="w-12 h-1 bg-[var(--saffron-500)] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Column 1: Details Intake Box (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface-1)] shadow-sm">
            <div>
              <h4 className="text-lg font-black font-serif text-[var(--forest-900)] mb-6">
                {t('clinic_name')}
              </h4>

              <div className="flex flex-col gap-6">
                
                {/* Address block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] text-[var(--forest-500)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      {t('clinic_address_label')}
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                      {t('clinic_address_val')}
                    </p>
                  </div>
                </div>

                {/* Hours block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] text-[var(--forest-500)] flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      {t('clinic_hours_label')}
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                      {t('clinic_hours_val')}
                    </p>
                  </div>
                </div>

                {/* Primary numbers block */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[var(--surface-0)] border border-[var(--border)] text-[var(--forest-500)] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Phones
                    </h5>
                    <p className="text-xs sm:text-sm font-black text-[var(--forest-700)]">
                      +91-9423-838866 / 7720-838866
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Google Directions trigger button */}
            <a
              href="https://maps.google.com/?q=Tilak+Path,+Gadhinglaj,+Kolhapur,+Maharashtra+416502"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl border border-[var(--forest-500)]/20 hover:border-[var(--forest-500)] bg-[var(--surface-0)] hover:bg-[var(--surface-2)] text-[var(--forest-700)] font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 focus:outline-none"
            >
              <Navigation className="w-4.5 h-4.5" />
              <span>{t('clinic_directions')}</span>
            </a>

          </div>

          {/* Column 2: Maps iFrame frame (7 columns) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface-1)] shadow-md min-h-[350px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8329683935293!2d74.34842571481062!3d16.223847788785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0f3c5aa065363%3A0xe979cb7f24021272!2sTilak%20Path%2C%20Gadhinglaj%2C%20Maharashtra%20416502!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Maps Embed"
              className="absolute inset-0 w-full h-full object-cover grayscale dark:invert dark:opacity-85"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClinicLocation;
