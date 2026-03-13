import { TranslatedText } from "@/components/client/TranslatedText";

const lifecycleSteps = [
  {
    icon: (
      // Headset / Collections
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    labelKey: "vision.step1",
    active: true,
  },
  {
    icon: (
      // Search / Prospecting
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
    labelKey: "vision.step2",
  },
  {
    icon: (
      // Document / Sales
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    labelKey: "vision.step3",
  },
  {
    icon: (
      // Phone / Onboarding Calls
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
      </svg>
    ),
    labelKey: "vision.step4",
  },
  {
    icon: (
      // Clock / Follow-ups
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    labelKey: "vision.step5",
  },
  {
    icon: (
      // Refresh / Re-purchase
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    labelKey: "vision.step6",
  },
];

export const LifecycleVision = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-500">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block px-5 py-1.5 mb-8 text-sm font-medium text-white border border-white/40 rounded-full bg-white/10">
          <TranslatedText i18nKey="vision.badge" />
        </span>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white lg:text-5xl leading-tight mb-5">
          <TranslatedText i18nKey="vision.title" />
        </h2>

        {/* Subtitles */}
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-2">
          <TranslatedText i18nKey="vision.subtitle" />
        </p>
        <p className="text-base text-white/60 max-w-xl mx-auto mb-14">
          <TranslatedText i18nKey="vision.subtitle2" />
        </p>

        {/* Center — Customer */}
        <div className="flex flex-col items-center mb-14">
          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm tracking-wide">
            <TranslatedText i18nKey="vision.centerLabel" />
          </span>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {lifecycleSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-20">
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.active
                      ? "bg-white text-indigo-600 border-white shadow-xl"
                      : "bg-white/10 text-white border-white/30"
                  }`}
                >
                  {step.icon}
                </div>
                {step.active && (
                  <span className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <span className={`text-xs font-semibold text-center leading-tight ${step.active ? "text-white" : "text-white/70"}`}>
                <TranslatedText i18nKey={step.labelKey} />
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="https://tally.so/r/ODPPB8"
            target="_blank"
            rel="noopener"
            className="inline-block px-8 py-4 text-lg font-semibold text-indigo-700 bg-white rounded-lg shadow-lg hover:bg-indigo-50 transition-colors">
            <TranslatedText i18nKey="vision.cta" />
          </a>
        </div>

      </div>
    </section>
  );
};
