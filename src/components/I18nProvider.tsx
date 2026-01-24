'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance } from 'i18next';
import { ReactNode } from 'react';

export function I18nProvider({ 
  children, 
  locale, 
  resources 
}: { 
  children: ReactNode, 
  locale: string, 
  resources: any 
}) {
  const i18n = createInstance();

  // Inicialización rápida para el cliente usando los recursos ya cargados
  i18n.init({
    lng: locale,
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'fr'],
    defaultNS: locale,
    ns: [locale],
  });

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}