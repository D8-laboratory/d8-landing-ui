"use client"
import { ReactNode } from 'react';
import '../app/i18n'; 

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  return <>{children}</>;
}

// Hook personalizado para usar en cualquier componente
export { useTranslation } from 'react-i18next';