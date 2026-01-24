"use client"
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); 
  const { i18n } = useTranslation();

  const handleLanguageChange = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `i18next=${newLocale};expires=${date.toUTCString()};path=/`;

    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');

    router.push(newPathname);
    
    i18n.changeLanguage(newLocale);
  };

  return (
    <div className="flex items-center gap-1">
    <button
      onClick={() => handleLanguageChange('en')}
      className={`px-2 py-1 text-sm rounded-md transition-colors ${
        i18n.language === 'en'
          ? 'bg-indigo-600 text-white'
          : 'text-gray-500 dark:text-gray-300 hover:text-indigo-500'
      }`}
    >
      EN
    </button>
    <button
      onClick={() => handleLanguageChange('es')}
      className={`px-2 py-1 text-sm rounded-md transition-colors ${
        i18n.language === 'es'
          ? 'bg-indigo-600 text-white'
          : 'text-gray-500 dark:text-gray-300 hover:text-indigo-500'
      }`}
    >
      ES
    </button>
  </div>
  );
}
