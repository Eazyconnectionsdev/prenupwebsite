export default function Agreements() {
  return (
    <section
      id="agreements"
      className="bg-ivory min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-16 pb-4 lg:pt-20 lg:pb-6 flex flex-col justify-center">
        <div className="rv mb-8 lg:mb-10">
          <p className="label-sm text-rose font-bold mb-3 !text-[15px] lg:!text-[16px] tracking-[0.22em]">
            Agreements
          </p>
          <h2 className="display text-[clamp(26px,3.1vw,40px)] text-midnight leading-[1.18] pt-1">
            Three agreements. One platform. Your choice.
          </h2>
        </div>

        {/* 3-Column Clean Card Layout matching 'Your Team' Design */}
        <div className="rv lg:flex lg:gap-px bg-pearl rounded-2xl overflow-hidden border border-pearl shadow-sm">
          {/* Column 1: Prenuptial Agreement */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 border-b lg:border-b-0 border-pearl flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-rose font-bold mb-4">Most Popular</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Prenuptial Agreement
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For couples getting married who want clarity and protection before their wedding. This is the agreement most of our couples choose.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose hover:text-rose-deep transition-colors group/link"
              >
                Begin Prenup
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Postnuptial Agreement */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 border-b lg:border-b-0 border-pearl flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-slate font-semibold mb-4">Postnuptial</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Postnuptial Agreement
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For married couples structuring their assets and commitments. Same process, same price.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose hover:text-rose-deep transition-colors group/link"
              >
                Begin Postnup
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Cohabitation Agreement */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-slate font-semibold mb-4">Cohabitation</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Cohabitation Agreement
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For unmarried couples living together or buying property. Protect what you're building.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose hover:text-rose-deep transition-colors group/link"
              >
                Begin Agreement
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
