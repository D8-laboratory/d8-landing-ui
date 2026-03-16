import { TranslatedText } from "../../../components/client/TranslatedText";

const DEMO_URL = "https://tally.so/r/ODPPB8";

const DemoButton = ({ className = "" }: { className?: string }) => (
  <a
    href={DEMO_URL}
    target="_blank"
    rel="noopener"
    className={`inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg ${className}`}
  >
    <TranslatedText i18nKey="services.ctaButton" />
  </a>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
            <TranslatedText i18nKey="services.badge" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
            <TranslatedText i18nKey="services.heroLine1" />{" "}
            <span className="text-indigo-600">
              <TranslatedText i18nKey="services.heroLine2" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <TranslatedText i18nKey="services.heroSub" />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <DemoButton />
            <a
              href="#how"
              className="inline-block px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-bold text-lg hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              <TranslatedText i18nKey="services.heroLearn" />
            </a>
          </div>
        </div>
      </section>

      {/* ── STAT BAR ─────────────────────────────────── */}
      <section className="bg-indigo-600 dark:bg-indigo-700 py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { stat: "services.stat1Val", label: "services.stat1Label" },
              { stat: "services.stat2Val", label: "services.stat2Label" },
              { stat: "services.stat3Val", label: "services.stat3Label" },
              { stat: "services.stat4Val", label: "services.stat4Label" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div className="text-4xl md:text-5xl font-extrabold">
                  <TranslatedText i18nKey={stat} />
                </div>
                <div className="text-indigo-200 mt-1 text-sm md:text-base">
                  <TranslatedText i18nKey={label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section id="how" className="container mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            <TranslatedText i18nKey="services.howTitle" />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            <TranslatedText i18nKey="services.howSub" />
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "01", key: "step1" },
            { step: "02", key: "step2" },
            { step: "03", key: "step3" },
          ].map(({ step, key }) => (
            <div key={key} className="relative p-8 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:shadow-lg transition-all">
              <div className="text-6xl font-extrabold text-indigo-100 dark:text-indigo-900 absolute top-6 right-6 select-none">
                {step}
              </div>
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  <TranslatedText i18nKey={`services.${key}Title`} />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <TranslatedText i18nKey={`services.${key}Desc`} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TWO SERVICE MODES ────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              <TranslatedText i18nKey="services.modesTitle" />
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mode A: funds to client account */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-700 shadow-lg space-y-4">
              <div className="text-4xl">🏦</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                <TranslatedText i18nKey="services.modeATitle" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <TranslatedText i18nKey="services.modeADesc" />
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center space-x-2"><span className="text-indigo-500">✓</span><span><TranslatedText i18nKey="services.modeAPoint1" /></span></li>
                <li className="flex items-center space-x-2"><span className="text-indigo-500">✓</span><span><TranslatedText i18nKey="services.modeAPoint2" /></span></li>
                <li className="flex items-center space-x-2"><span className="text-indigo-500">✓</span><span><TranslatedText i18nKey="services.modeAPoint3" /></span></li>
              </ul>
            </div>

            {/* Mode B: funds to D8 Labs account */}
            <div className="p-8 rounded-2xl bg-indigo-600 text-white shadow-xl space-y-4">
              <div className="text-4xl">⚡</div>
              <h3 className="text-2xl font-bold">
                <TranslatedText i18nKey="services.modeBTitle" />
              </h3>
              <p className="text-indigo-100 leading-relaxed">
                <TranslatedText i18nKey="services.modeBDesc" />
              </p>
              <ul className="space-y-2 text-indigo-100">
                <li className="flex items-center space-x-2"><span className="text-green-300">✓</span><span><TranslatedText i18nKey="services.modeBPoint1" /></span></li>
                <li className="flex items-center space-x-2"><span className="text-green-300">✓</span><span><TranslatedText i18nKey="services.modeBPoint2" /></span></li>
                <li className="flex items-center space-x-2"><span className="text-green-300">✓</span><span><TranslatedText i18nKey="services.modeBPoint3" /></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AI BPO ───────────────────────────────── */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              <TranslatedText i18nKey="services.whyTitle" />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <TranslatedText i18nKey="services.whyDesc" />
            </p>
            <ul className="space-y-4">
              {["why1", "why2", "why3", "why4"].map((key) => (
                <li key={key} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mt-0.5">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <TranslatedText i18nKey={`services.${key}`} />
                  </span>
                </li>
              ))}
            </ul>
            <DemoButton className="mt-4" />
          </div>

          {/* Visual: BPO vs D8 comparison table */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 py-3">
              <span></span>
              <span className="text-center"><TranslatedText i18nKey="services.colTraditional" /></span>
              <span className="text-center text-indigo-600 dark:text-indigo-400">D8 Labs</span>
            </div>
            {["row1", "row2", "row3", "row4", "row5"].map((row) => (
              <div key={row} className="grid grid-cols-3 px-4 py-4 border-t border-gray-100 dark:border-gray-700 items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  <TranslatedText i18nKey={`services.${row}Label`} />
                </span>
                <span className="text-center text-sm text-gray-500 dark:text-gray-500">
                  <TranslatedText i18nKey={`services.${row}Trad`} />
                </span>
                <span className="text-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  <TranslatedText i18nKey={`services.${row}D8`} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="bg-indigo-600 dark:bg-indigo-700 py-20">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            <TranslatedText i18nKey="services.finalCtaTitle" />
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            <TranslatedText i18nKey="services.finalCtaSub" />
          </p>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener"
            className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <TranslatedText i18nKey="services.ctaButton" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
