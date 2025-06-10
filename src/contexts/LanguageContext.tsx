
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  it: {
    // Index page translations
    heroTitle: "Virtuosity",
    heroSubtitle: "Un modello innovativo che stimola l'interazione tra comuni, aziende e cittadini per costruire insieme un futuro sostenibile.",
    heroDescription: "La piattaforma che premia i tuoi comportamenti sostenibili. Tracciamento automatico, certificati blockchain e premi reali per un futuro più verde.",
    buttonVirtusosity: "Virtusosity",
    buttonUser: "Utente",
    buttonExchange: "Exchange",
    buttonCompanies: "Aziende",
    buttonMunicipalities: "Comuni",
    // Language switcher
    switchToEnglish: "Switch to English",
    englishVersion: "English Version",
    englishComingSoon: "English translation coming soon! 🇬🇧"
  },
  en: {
    // Index page translations
    heroTitle: "Virtuosity",
    heroSubtitle: "An innovative model that stimulates interaction between municipalities, companies and citizens to build a sustainable future together.",
    heroDescription: "The platform that rewards your sustainable behaviors. Automatic tracking, blockchain certificates and real rewards for a greener future.",
    buttonVirtusosity: "Virtusosity",
    buttonUser: "User",
    buttonExchange: "Exchange",
    buttonCompanies: "Companies",
    buttonMunicipalities: "Municipalities",
    // Language switcher
    switchToEnglish: "Passa all'Italiano",
    englishVersion: "Versione Italiana",
    englishComingSoon: "Traduzione italiana già disponibile! 🇮🇹"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['it']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
