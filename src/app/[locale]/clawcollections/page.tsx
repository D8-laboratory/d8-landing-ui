import Image from "next/image";
import { TranslatedText } from "../../../components/client/TranslatedText";

const ClawCollectionsPage = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
            <TranslatedText i18nKey="clawcollections.badge" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
            Claw<span className="text-indigo-600">Collections</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            <TranslatedText i18nKey="clawcollections.hero" />
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            <TranslatedText i18nKey="clawcollections.heroDescription" />
          </p>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="container mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
          <Image
            src="/img/clawcollections-dashboard.png"
            alt="ClawCollections Dashboard"
            width={1400}
            height={800}
            className="w-full"
          />
        </div>
      </section>

      {/* AI Agent per Account — Core differentiator */}
      <section className="bg-indigo-600 dark:bg-indigo-700 py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                <TranslatedText i18nKey="clawcollections.agentTitle" />
              </h2>
              <p className="text-lg md:text-xl text-indigo-100 leading-relaxed">
                <TranslatedText i18nKey="clawcollections.agentDescription" />
              </p>
              <ul className="space-y-3 text-indigo-100">
                <li className="flex items-center space-x-3">
                  <span className="text-indigo-300">✦</span>
                  <span><TranslatedText i18nKey="clawcollections.agentPoint1" /></span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-indigo-300">✦</span>
                  <span><TranslatedText i18nKey="clawcollections.agentPoint2" /></span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-indigo-300">✦</span>
                  <span><TranslatedText i18nKey="clawcollections.agentPoint3" /></span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/clawcollections-timeline.png"
                alt="360 Customer Timeline"
                width={1200}
                height={700}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            <TranslatedText i18nKey="clawcollections.featuresTitle" />
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: "📊", key: "feature1" },
            { icon: "🗂️", key: "feature2" },
            { icon: "💳", key: "feature3" },
            { icon: "🔗", key: "feature4" },
            { icon: "⚡", key: "feature5" },
            { icon: "📋", key: "feature6" },
            { icon: "📞", key: "feature7" },
            { icon: "🤖", key: "feature8" },
            { icon: "📈", key: "feature9" },
          ].map(({ icon, key }) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-600 transition-all"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                <TranslatedText i18nKey={`clawcollections.${key}Title`} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                <TranslatedText i18nKey={`clawcollections.${key}Desc`} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Builder Screenshot */}
      <section className="container mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              <TranslatedText i18nKey="clawcollections.workflowTitle" />
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <TranslatedText i18nKey="clawcollections.workflowDescription" />
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <Image
              src="/img/clawcollections-workflows.png"
              alt="Workflow Builder"
              width={1200}
              height={700}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Omnichannel Inbox + Payments */}
      <section className="bg-gray-50 dark:bg-gray-900 py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <Image
                src="/img/clawcollections-inbox.png"
                alt="Omnichannel Inbox"
                width={1200}
                height={700}
                className="w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                <TranslatedText i18nKey="clawcollections.inboxTitle" />
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <TranslatedText i18nKey="clawcollections.inboxDescription" />
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                <TranslatedText i18nKey="clawcollections.paymentsTitle" />
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <TranslatedText i18nKey="clawcollections.paymentsDescription" />
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <Image
                src="/img/clawcollections-payments.png"
                alt="Payments & Reconciliation"
                width={1200}
                height={700}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* vs Competitors */}
      <section className="container mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            <TranslatedText i18nKey="clawcollections.vsTitle" />
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* ClawCollections */}
          <div className="p-6 md:p-8 rounded-2xl bg-indigo-600 text-white shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">ClawCollections</h3>
            <div className="w-12 h-1 bg-indigo-300 mb-6"></div>
            <ul className="space-y-3 text-indigo-100">
              <li className="flex items-start space-x-2"><span className="text-green-300 mt-0.5">✓</span><span><TranslatedText i18nKey="clawcollections.vsClaw1" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-green-300 mt-0.5">✓</span><span><TranslatedText i18nKey="clawcollections.vsClaw2" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-green-300 mt-0.5">✓</span><span><TranslatedText i18nKey="clawcollections.vsClaw3" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-green-300 mt-0.5">✓</span><span><TranslatedText i18nKey="clawcollections.vsClaw4" /></span></li>
            </ul>
          </div>
          {/* vs MoonFlow */}
          <div className="p-6 md:p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">MoonFlow</h3>
            <div className="w-12 h-1 bg-gray-400 mb-6"></div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2"><span className="text-red-400 mt-0.5">✗</span><span><TranslatedText i18nKey="clawcollections.vsMoo1" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-red-400 mt-0.5">✗</span><span><TranslatedText i18nKey="clawcollections.vsMoo2" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 mt-0.5">~</span><span><TranslatedText i18nKey="clawcollections.vsMoo3" /></span></li>
            </ul>
          </div>
          {/* vs Adminfo / Solati */}
          <div className="p-6 md:p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1"><TranslatedText i18nKey="clawcollections.vsTraditional" /></h3>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2"><TranslatedText i18nKey="clawcollections.vsTraditionalSub" /></p>
            <div className="w-12 h-1 bg-gray-400 mb-6"></div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2"><span className="text-red-400 mt-0.5">✗</span><span><TranslatedText i18nKey="clawcollections.vsTrad1" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-red-400 mt-0.5">✗</span><span><TranslatedText i18nKey="clawcollections.vsTrad2" /></span></li>
              <li className="flex items-start space-x-2"><span className="text-yellow-500 mt-0.5">~</span><span><TranslatedText i18nKey="clawcollections.vsTrad3" /></span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 dark:bg-indigo-700 py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <TranslatedText i18nKey="clawcollections.ctaTitle" />
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            <TranslatedText i18nKey="clawcollections.ctaDescription" />
          </p>
          <a
            href="https://tally.so/r/ODPPB8"
            target="_blank"
            rel="noopener"
            className="px-8 md:px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg inline-block">
            <TranslatedText i18nKey="clawcollections.ctaButton" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ClawCollectionsPage;
