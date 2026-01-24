import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { I18nProvider } from "@/components/I18nProvider";
import initTranslations from "@/app/i18n"; 

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const baseUrl = 'https://d8labs.ai';

  return {
    title: 'D8 Labs AI',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'es-ES': `${baseUrl}/es`,
        'en-US': `${baseUrl}/en`,
        'x-default': `${baseUrl}/es`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, [locale]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization", 
    "name": "D8 Labs AI",
    "url": `https://www.d8labs.ai/${locale}`,
    "logo": "https://www.d8labs.ai/logo.png",
    "sameAs": [
      "https://linkedin.com/company/d8labs",
      "https://twitter.com/d8labs"
    ]
  };
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <I18nProvider locale={locale} resources={resources}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <PopupWidget />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
