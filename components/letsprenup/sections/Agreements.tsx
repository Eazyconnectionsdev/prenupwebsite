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

        {/* 3 Distinct Modern Cards with Clear Separation */}
        <div className="rv grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {/* Column 1: Prenuptial Agreement (Featured Dark Midnight Blue with Rose-Mist Pink Hover) */}
          <div className="relative bg-midnight text-white p-7 lg:p-8 rounded-2xl border border-rose/30 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:bg-rose-mist/60 hover:text-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <div className="mb-3.5">
                <span className="bg-rose text-white text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full shadow-md inline-block">
                  Most Popular
                </span>
              </div>
              <h3 className="display text-[24px] lg:text-[28px] text-white group-hover:text-midnight transition-colors duration-300 mb-3">
                Prenuptial Agreement
              </h3>
              <p className="text-white/85 group-hover:text-slate transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For couples getting married who want clarity and protection before their wedding. This is the agreement most of our couples choose.
              </p>
            </div>
            <div className="border-t border-white/15 group-hover:border-rose/20 transition-colors duration-300 pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose-glow group-hover:text-rose transition-colors duration-300 group/link"
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

          {/* Column 2: Postnuptial Agreement (Soft Pink with Dark Midnight Blue Hover) */}
          <div className="relative bg-rose-mist/60 text-midnight p-7 lg:p-8 rounded-2xl border border-rose/20 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:bg-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <p className="label-sm text-rose group-hover:text-rose-glow transition-colors duration-300 font-bold mb-4 uppercase tracking-widest text-[11px]">
                Postnuptial
              </p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight group-hover:text-white transition-colors duration-300 mb-3">
                Postnuptial Agreement
              </h3>
              <p className="text-slate group-hover:text-white/85 transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For married couples structuring their assets and commitments. Same process, same price.
              </p>
            </div>
            <div className="border-t border-rose/15 group-hover:border-white/15 transition-colors duration-300 pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose group-hover:text-rose-glow transition-colors duration-300 group/link"
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

          {/* Column 3: Cohabitation Agreement (Soft Pink with Dark Midnight Blue Hover) */}
          <div className="relative bg-rose-mist/60 text-midnight p-7 lg:p-8 rounded-2xl border border-rose/20 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:bg-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <p className="label-sm text-slate group-hover:text-rose-glow transition-colors duration-300 font-semibold mb-4 uppercase tracking-widest text-[11px]">
                Cohabitation
              </p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight group-hover:text-white transition-colors duration-300 mb-3">
                Cohabitation Agreement
              </h3>
              <p className="text-slate group-hover:text-white/85 transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                For unmarried couples living together or buying property. Protect what you're building.
              </p>
            </div>
            <div className="border-t border-rose/15 group-hover:border-white/15 transition-colors duration-300 pt-4 mt-auto">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] uppercase text-rose group-hover:text-rose-glow transition-colors duration-300 group/link"
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
