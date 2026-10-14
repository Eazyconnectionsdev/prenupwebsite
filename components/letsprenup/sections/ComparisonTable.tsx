import { Check } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="bg-pearl min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden border-t border-linen/60"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full pt-16 pb-4 lg:pt-20 lg:pb-6 flex flex-col justify-center">
        <div className="rv max-w-2xl mb-8 lg:mb-10">
          <p className="label-sm text-rose font-bold mb-3 !text-[15px] lg:!text-[16px] tracking-[0.22em] uppercase">
            Comparison
          </p>
          <h3 className="display text-[clamp(26px,3.1vw,40px)] text-midnight mb-2 leading-[1.18] pt-1">
            How We Compare
          </h3>
          <p className="text-slate text-[15px] lg:text-[16.5px] font-medium leading-relaxed">
            See how Let&apos;sPrenup stacks up against traditional law firms and budget providers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-linen bg-ivory shadow-sm">
          <table className="w-full text-left text-[14.5px] lg:text-[15px] border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-linen text-[12px] uppercase tracking-wider text-slate bg-pearl/60">
                <th className="py-4 lg:py-5 px-6 font-semibold">Feature</th>
                <th className="py-4 lg:py-5 px-6 font-semibold">Traditional Firms</th>
                <th className="py-4 lg:py-5 px-6 font-semibold">Fixed Fee Providers</th>
                <th className="py-4 lg:py-5 px-6 font-semibold bg-midnight text-white tracking-widest">
                  Let&apos;sPrenup
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-linen">
              <tr className="hover:bg-pearl/40 transition-colors">
                <td className="py-4 lg:py-5 px-6 font-semibold text-midnight">Typical Cost</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">£2,000 – £5,000+</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">£700 – £1,500+</td>
                <td className="py-4 lg:py-5 px-6 bg-rose-mist/60 text-rose-deep font-semibold border-l border-rose/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-rose stroke-[3]" />
                    £999 Fixed Fee
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-pearl/40 transition-colors">
                <td className="py-4 lg:py-5 px-6 font-semibold text-midnight">Covers Both Partners</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Usually Separate Engagements</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Depends on Provider</td>
                <td className="py-4 lg:py-5 px-6 bg-rose-mist/60 text-rose-deep font-semibold border-l border-rose/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-rose stroke-[3]" />
                    Included
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-pearl/40 transition-colors">
                <td className="py-4 lg:py-5 px-6 font-semibold text-midnight">Independent Legal Advice</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Included</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Sometimes Included</td>
                <td className="py-4 lg:py-5 px-6 bg-rose-mist/60 text-rose-deep font-semibold border-l border-rose/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-rose stroke-[3]" />
                    Included
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-pearl/40 transition-colors">
                <td className="py-4 lg:py-5 px-6 font-semibold text-midnight">
                  Separate Law Firms for Each Partner
                </td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Not Always</td>
                <td className="py-4 lg:py-5 px-6 text-slate font-medium">Not Always</td>
                <td className="py-4 lg:py-5 px-6 bg-rose-mist/60 text-rose-deep font-semibold border-l border-rose/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-rose stroke-[3]" />
                    Always Included
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
