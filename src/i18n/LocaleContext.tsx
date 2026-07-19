import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from './translations';

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextProps>({
  locale: 'en',
  setLocale: () => {}
});

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Check local storage or browser settings
    const savedLocale = localStorage.getItem('srhc-locale') as Locale;
    if (savedLocale === 'en' || savedLocale === 'mr') {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language;
      if (browserLang.startsWith('mr')) {
        setLocaleState('mr');
      } else {
        setLocaleState('en');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('srhc-locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
