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

        {/* 3 Cards matching Agreements layout and font sizing */}
        <div className="rv lg:flex lg:gap-px bg-pearl rounded-2xl overflow-hidden border border-pearl shadow-sm">
          {/* Card 1: Operations / Case Manager */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 border-b lg:border-b-0 border-pearl flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-rose font-bold mb-4">Operations</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Case Manager
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                Your single point of contact. Keeps the timeline on track, verifies disclosures, coordinates between both law firms.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <p className="text-slate text-[13px] font-semibold">
                Assigned at signup
              </p>
            </div>
          </div>

          {/* Card 2: Independent Solicitor / Your Lawyer */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 border-b lg:border-b-0 border-pearl flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-rose font-bold mb-4">Independent Solicitor</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Your Lawyer
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                Reviews the agreement exclusively from your perspective. Protects your interests. Gives you independent, confidential advice.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <p className="text-slate text-[13px] font-semibold">
                SRA or BSB regulated
              </p>
            </div>
          </div>

          {/* Card 3: Independent Solicitor / Partner's Lawyer */}
          <div className="bg-ivory p-6 lg:p-8 lg:flex-1 flex flex-col justify-between group transition-colors duration-300 hover:bg-rose-mist/50">
            <div>
              <p className="label-sm text-rose font-bold mb-4">Independent Solicitor</p>
              <h3 className="display text-[24px] lg:text-[28px] text-midnight mb-3">
                Partner's Lawyer
              </h3>
              <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed mb-6 font-normal">
                From a completely different firm. Protects their interests independently. This separation is what courts need to see.
              </p>
            </div>
            <div className="border-t border-pearl pt-4 mt-auto">
              <p className="text-slate text-[13px] font-semibold">
                Separate firm guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
