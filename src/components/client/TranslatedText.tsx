"use client"
import { useTranslation } from "@/components/I18nProvider";

interface TranslatedTextProps {
  i18nKey: string;
  fallback?: string;
  values?: Record<string, any>;
}

export function TranslatedText({ i18nKey, fallback, values }: TranslatedTextProps) {
  const { t } = useTranslation();
  return <>{t(i18nKey, { defaultValue: fallback, ...values })}</>;
}