export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Select Service & Invite",
      desc: "Pick your agreement type. Send your partner a secure invite. The entire setup takes under three minutes. No payment, no commitment yet.",
    },
    {
      num: "2",
      title: "Share Your Details",
      desc: "Guided questionnaires walk you through financial disclosure. No spreadsheets, no jargon. Both partners complete independently.",
    },
    {
      num: "3",
      title: "Independent Legal Advice",
      desc: "Each partner is matched with their own solicitor from a separate regulated firm. Up to one hour consultation included. This is what makes it enforceable.",
    },
    {
      num: "4",
      title: "Sign & Complete",
      desc: "Review your final agreement together. Sign digitally. Download the completed document. Your agreement, done properly.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-midnight text-white min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-16 pb-4 lg:pt-20 lg:pb-6 flex flex-col justify-center">
        {/* Header */}
        <div className="rv grid lg:grid-cols-12 gap-4 lg:gap-8 mb-6 lg:mb-8 items-end">
          <div className="lg:col-span-7">
            <p className="label-sm text-rose-glow font-bold mb-4 lg:mb-5 !text-[15px] lg:!text-[16px] tracking-[0.22em]">
              Process
            </p>
            <h2 className="display text-[clamp(26px,2.9vw,40px)] text-white leading-[1.18] pt-1">
              Four Simple Steps & One signed agreement
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-white/90 text-[17px] lg:text-[20px] font-medium leading-relaxed">
              Completely Online, No office visits
            </p>
          </div>
        </div>

        {/* 4 Steps */}
        <div className="space-y-0">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`rv grid lg:grid-cols-12 gap-4 lg:gap-8 items-center border-t border-white/15 py-4 lg:py-5 group transition-colors duration-300 hover:bg-white/[0.02] ${
                idx === steps.length - 1 ? "border-b border-b-white/15" : ""
              }`}
            >
              <div className="lg:col-span-1">
                <span className="display text-[30px] lg:text-[42px] text-rose-glow font-normal leading-none">
                  {step.num}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-[17px] lg:text-[19px] font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-white/85 text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
