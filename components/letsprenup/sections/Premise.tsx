"use client";

import Stats from "./Stats";

export default function Premise() {
  return (
    <section
      id="why"
      className="bg-ivory min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-16 pb-6 lg:pt-14 lg:pb-8 flex flex-col justify-center">
        {/* Top Stats Bar - Seamless integration without big gap */}
        <div className="w-full border-b border-pearl pb-4 lg:pb-6 mb-6 lg:mb-8">
          <Stats />
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Eyebrow + Subtitle */}
          <div className="lg:col-span-4 rv pt-1">
            <p className="text-rose font-bold text-[19.5px] lg:text-[22px] tracking-[0.15em] uppercase leading-[1.35] mb-4 lg:mb-5">
              Why Let&apos;sPrenup
            </p>
            <p className="text-slate text-[15.5px] lg:text-[16.5px] font-medium leading-relaxed max-w-[340px]">
              We rebuilt the prenup process from scratch because the old way was broken: too slow, too expensive, too adversarial.
            </p>
          </div>

          {/* Right Main Content Column */}
          <div className="lg:col-span-8">
            <h2 className="rv text-[clamp(19px,2.1vw,26px)] font-normal text-midnight mb-6 lg:mb-7 leading-[1.35] tracking-tight">
              A prenup isn't about distrust. It's two people choosing to be{" "}
              <span className="italic text-rose font-medium">deliberately honest</span> before they say yes.
            </h2>
            <div className="rv grid sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 lg:gap-y-5">
              <div>
                <h3 className="text-[16px] lg:text-[17.5px] font-bold text-midnight mb-1">
                  Independent by design
                </h3>
                <p className="text-slate text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal">
                  Each partner gets their own solicitor from a completely separate regulated firm. This is what courts require.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[17.5px] font-bold text-midnight mb-1">
                  No hourly surprises
                </h3>
                <p className="text-slate text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal">
                  £999 fixed, for both of you. Covers drafting, case management, and up to one hour of legal consultation each.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[17.5px] font-bold text-midnight mb-1">
                  Built for your timeline
                </h3>
                <p className="text-slate text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal">
                  Most couples complete in 7 to 14 days. No office visits needed. Work through it from your sofa.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] lg:text-[17.5px] font-bold text-midnight mb-1">
                  Legally sound
                </h3>
                <p className="text-slate text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal">
                  Full financial disclosure, independent advice, separate firms. The three things English courts look for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
