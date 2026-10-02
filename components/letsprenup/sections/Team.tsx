export default function Team() {
  return (
    <section
      id="team"
      className="bg-ivory min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-14 pb-4 lg:pt-16 lg:pb-6 flex flex-col justify-center">
        {/* Header matching Agreements section */}
        <div className="rv mb-8 lg:mb-10">
          <p className="label-sm text-rose font-bold mb-3 !text-[15px] lg:!text-[16px] tracking-[0.22em]">
            Your Team
          </p>
          <h2 className="display text-[clamp(26px,3.1vw,40px)] text-midnight leading-[1.18] pt-1">
            Three professionals. One goal: protect both of you.
          </h2>
        </div>

        {/* 3 Distinct Modern Cards matching Agreements section UI */}
        <div className="rv grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {/* Card 1: Operations / Case Manager (Soft Pink with Dark Midnight Blue Hover) */}
          <div className="relative bg-rose-mist/60 text-midnight p-7 lg:p-8 rounded-2xl border border-rose/20 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:bg-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <p className="label-sm text-rose group-hover:text-rose-glow transition-colors duration-300 font-bold mb-4 uppercase tracking-widest text-[11px]">
                Operations
              </p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight group-hover:text-white transition-colors duration-300 mb-3">
                Case Manager
              </h3>
              <p className="text-slate group-hover:text-white/85 transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                Your single point of contact. Keeps the timeline on track, verifies disclosures, coordinates between both law firms.
              </p>
            </div>
            <div className="border-t border-rose/15 group-hover:border-white/15 transition-colors duration-300 pt-4 mt-auto">
              <p className="text-slate group-hover:text-rose-glow transition-colors duration-300 text-[13px] font-semibold tracking-wide">
                Assigned at signup
              </p>
            </div>
          </div>

          {/* Card 2: Independent Solicitor / Your Lawyer (Soft Pink with Dark Midnight Blue Hover) */}
          <div className="relative bg-rose-mist/60 text-midnight p-7 lg:p-8 rounded-2xl border border-rose/20 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:bg-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <p className="label-sm text-rose group-hover:text-rose-glow transition-colors duration-300 font-bold mb-4 uppercase tracking-widest text-[11px]">
                Independent Solicitor
              </p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight group-hover:text-white transition-colors duration-300 mb-3">
                Your Lawyer
              </h3>
              <p className="text-slate group-hover:text-white/85 transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                Reviews the agreement exclusively from your perspective. Protects your interests. Gives you independent, confidential advice.
              </p>
            </div>
            <div className="border-t border-rose/15 group-hover:border-white/15 transition-colors duration-300 pt-4 mt-auto">
              <p className="text-slate group-hover:text-rose-glow transition-colors duration-300 text-[13px] font-semibold tracking-wide">
                SRA or BSB regulated
              </p>
            </div>
          </div>

          {/* Card 3: Independent Solicitor / Partner's Lawyer (Soft Pink with Dark Midnight Blue Hover) */}
          <div className="relative bg-rose-mist/60 text-midnight p-7 lg:p-8 rounded-2xl border border-rose/20 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:bg-midnight hover:shadow-2xl hover:-translate-y-1 hover:border-rose/40 overflow-hidden cursor-pointer">
            <div>
              <p className="label-sm text-slate group-hover:text-rose-glow transition-colors duration-300 font-semibold mb-4 uppercase tracking-widest text-[11px]">
                Independent Solicitor
              </p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight group-hover:text-white transition-colors duration-300 mb-3">
                Partner's Lawyer
              </h3>
              <p className="text-slate group-hover:text-white/85 transition-colors duration-300 text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                From a completely different firm. Protects their interests independently. This separation is what courts need to see.
              </p>
            </div>
            <div className="border-t border-rose/15 group-hover:border-white/15 transition-colors duration-300 pt-4 mt-auto">
              <p className="text-slate group-hover:text-rose-glow transition-colors duration-300 text-[13px] font-semibold tracking-wide">
                Separate firm guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
