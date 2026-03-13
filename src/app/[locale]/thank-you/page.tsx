import Link from "next/link";
import { TranslatedText } from "../../../components/client/TranslatedText";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-8">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            <TranslatedText i18nKey="thankYou.title" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            <TranslatedText i18nKey="thankYou.description" />
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <TranslatedText i18nKey="thankYou.followUp" />
          </p>
        </div>

        {/* CTA back home */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            <TranslatedText i18nKey="thankYou.backHome" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
