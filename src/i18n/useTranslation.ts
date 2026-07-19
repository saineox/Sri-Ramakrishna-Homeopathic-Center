import { useContext } from 'react';
import { LocaleContext } from './LocaleContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const t = (key: string): string => {
    const keys = key.split('.');
    let translation: any = translations[locale];

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English if key missing
        let enFallback: any = translations['en'];
        for (const fallbackK of keys) {
          if (enFallback && typeof enFallback === 'object' && fallbackK in enFallback) {
            enFallback = enFallback[fallbackK];
          } else {
            return key;
          }
        }
        return enFallback;
      }
    }

    return typeof translation === 'string' ? translation : key;
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'mr' : 'en');
  };

  return { t, locale, setLocale, toggleLocale };
};
