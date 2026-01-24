import i18n from "i18next";
import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';

export default async function initTranslations(locale: string, namespaces: string[]) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    // Esto busca tus archivos en src/app/i18n/es.json, etc.
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`./i18n/${language}.json`)
    ))
    .init({
      lng: locale,
      fallbackLng: 'en',
      ns: namespaces,
      defaultNS: namespaces[0],
    });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  };
}
