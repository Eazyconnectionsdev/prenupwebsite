"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/letsprenup/faq";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-ivory min-h-screen lg:h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="max-w-[960px] mx-auto px-6 lg:px-16 w-full pt-14 pb-4 lg:pt-16 lg:pb-6 flex flex-col justify-center">
        {/* Header matching other sections */}
        <div className="rv mb-8 lg:mb-10">
          <p className="label-sm text-rose font-bold mb-3 !text-[15px] lg:!text-[16px] tracking-[0.22em] uppercase">
            FAQ
          </p>
          <h2 className="display text-[clamp(26px,3.1vw,40px)] text-midnight leading-[1.18] pt-1">
            Common questions.
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-row border-t border-pearl py-4 lg:py-4.5 ${
                idx === faqs.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                onClick={() => toggle(idx)}
                className="flex items-start justify-between gap-6 cursor-pointer group"
              >
                <h3 className="text-[17px] lg:text-[19px] font-semibold text-midnight group-hover:text-rose transition-colors">
                  {faq.q}
                </h3>
                <span className="text-rose flex-shrink-0 mt-1">
                  {openIdx === idx ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </div>
              {openIdx === idx && (
                <div className="mt-3 pt-1">
                  <p className="text-slate text-[14.5px] lg:text-[15.5px] leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
