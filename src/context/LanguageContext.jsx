import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const COOKIE_KEY = 'locale';
const COOKIE_EXPIRES_DAYS = 365;

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('ko');

  // Sync from cookie on mount
  useEffect(() => {
    const savedLang = getCookie(COOKIE_KEY);
    if (savedLang && translations[savedLang]) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang) => {
    if (!translations[newLang]) return;
    setCookie(COOKIE_KEY, newLang, COOKIE_EXPIRES_DAYS);
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'ko' ? 'en' : 'ko');
  };

  const t = (key, params = {}) => {
    let str = translations[lang]?.[key] ?? key;
    
    // Simple interpolation for %{key}%
    Object.entries(params).forEach(([k, v]) => {
      str = str.replace(new RegExp(`%{${k}}%`, 'g'), v);
    });
    
    return str;
  };

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);