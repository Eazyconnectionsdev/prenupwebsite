export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-pearl min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-16 pb-4 lg:pt-20 lg:pb-6 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Complete Couple Pricing Card in v12 styling */}
          <div className="lg:col-span-6 rv">
            <div className="mb-4 lg:mb-5 text-left">
              <p className="label-sm text-rose font-bold !text-[15px] lg:!text-[16px] tracking-[0.22em] uppercase">
                Pricing
              </p>
            </div>
            <div className="relative bg-midnight text-white rounded-3xl p-6 lg:p-8 border border-rose/30 shadow-2xl overflow-hidden">
              {/* Most Popular Badge */}
              <div className="absolute top-5 right-6">
                <span className="bg-rose text-white text-[10px] lg:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>

              <h3 className="display text-[26px] lg:text-[32px] text-white mb-1.5 pt-1 leading-[1.18]">
                Complete Couple
              </h3>
              <p className="text-white/90 text-[13.5px] lg:text-[14.5px] leading-relaxed mb-3.5 font-normal">
                Built for couples who want clarity, independence, and peace of mind.
              </p>

              <div className="border-b border-white/10 pb-3.5 mb-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="display text-[44px] lg:text-[54px] text-rose-glow leading-none font-normal">
                    £499
                  </span>
                  <span className="text-white/80 text-[14px] lg:text-[15px] font-semibold">due today</span>
                </div>
                <p className="text-white/90 text-[13px] lg:text-[14px] font-bold mt-1.5">
                  £999 Total cost per couple
                </p>
              </div>

              {/* Checkmark list */}
              <ul className="space-y-2 lg:space-y-2.5 mb-5 text-[13px] lg:text-[14px] text-white font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-glow font-extrabold text-sm mt-0.5">✓</span>
                  <span>Agreement drafting and online workspace</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-glow font-extrabold text-sm mt-0.5">✓</span>
                  <span>Independent lawyer for each partner</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-glow font-extrabold text-sm mt-0.5">✓</span>
                  <span>Lawyers appointed from separate regulated law firms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-glow font-extrabold text-sm mt-0.5">✓</span>
                  <span>Up to 1 hour legal consultation per partner</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-glow font-extrabold text-sm mt-0.5">✓</span>
                  <span>Dedicated case manager from start to signature</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href="https://prenup-weld.vercel.app/login"
                className="btn-fill bg-rose hover:bg-rose-deep text-white w-full py-3 lg:py-3.5 rounded-full text-[12px] lg:text-[13px] font-bold tracking-wider uppercase text-center inline-flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
              >
                Start Your Agreement — £499 →
              </a>

              <p className="text-[11.5px] text-white/70 mt-2.5 leading-snug text-center font-normal">
                Independent legal advice is arranged through separate law firms and paid directly when required.
              </p>
            </div>
          </div>

          {/* Right: breakdown */}
          <div className="lg:col-span-6 rv">
            <div className="mb-3 lg:mb-4">
              <h2 className="display text-[clamp(24px,2.8vw,34px)] text-midnight leading-[1.18] pt-1">
                What you're paying for
              </h2>
            </div>

            <div className="space-y-0">
              <div className="flex items-baseline justify-between border-b border-linen py-3.5 lg:py-4">
                <div>
                  <p className="text-midnight font-semibold text-[15px] lg:text-[16px]">
                    Platform, drafting & case management
                  </p>
                  <p className="text-slate text-[13px] lg:text-[14px] font-medium mt-0.5">
                    Paid to LetsPrenup at signup
                  </p>
                </div>
                <span className="display text-[24px] lg:text-[28px] text-midnight">£499</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-linen py-3.5 lg:py-4">
                <div>
                  <p className="text-midnight font-semibold text-[15px] lg:text-[16px]">
                    Your independent solicitor
                  </p>
                  <p className="text-slate text-[13px] lg:text-[14px] font-medium mt-0.5">
                    Separate regulated firm, up to 1hr
                  </p>
                </div>
                <span className="display text-[24px] lg:text-[28px] text-midnight">£250</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-linen py-3.5 lg:py-4">
                <div>
                  <p className="text-midnight font-semibold text-[15px] lg:text-[16px]">
                    Partner's independent solicitor
                  </p>
                  <p className="text-slate text-[13px] lg:text-[14px] font-medium mt-0.5">
                    Different firm entirely, up to 1hr
                  </p>
                </div>
                <span className="display text-[24px] lg:text-[28px] text-midnight">£250</span>
              </div>

              {/* Total summary highlight */}
              <div className="flex items-center justify-between bg-white rounded-2xl p-4 lg:p-5 border border-rose/20 shadow-sm mt-5">
                <div>
                  <p className="text-midnight font-bold text-[15px] lg:text-[16px]">
                    Total Fixed Investment
                  </p>
                  <p className="text-slate text-[13px] font-medium mt-0.5">
                    Both partners fully covered & represented
                  </p>
                </div>
                <span className="display text-[28px] lg:text-[34px] text-rose font-normal">
                  £999
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
