"use client"
import { useTranslation } from "@/components/I18nProvider";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded-md transition-colors ${
          i18n.language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-500 dark:text-gray-300 hover:text-indigo-500'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('es')}
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