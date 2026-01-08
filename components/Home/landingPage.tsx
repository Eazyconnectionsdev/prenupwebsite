"use client";

import  { useState } from "react";
import HowItWorksPage from "@/components/Home/howItWorks"
import WhyUs from "@/components/whyUs"
import PricingSection from "@/components/pricing"

const LandingPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <section className=" overflow-hidden">
        <div className="relative  px-4 pb-10 mt-16 md:mt-20 md:px-0 lg:pb-0 ">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#b5b6e4] to-white -z-10" />
          <div className="absolute inset-0 opacity-40 grid_layout -z-10" />
          <div className="mx-auto pt-20 md:pb-32 xxl:py-24">
            <div className="mb-5 flex w-full flex-col md:gap-2 items-center text-center text-[33px] font-extrabold md:font-bold md:text-6xl">
              <div className="flex gap-2 md:gap-2 lg:flex-row lg:gap-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  The Premier
                </span>
                <span className="">Platform</span>
              </div>
              <div>
                <span className="">for Couples </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Agreement
                </span>
              </div>
            </div>
            <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-gray-700 font-medium text-[10px] md:text-[15px]">
              <span>Accurate Contacts​</span>|<span>AI Personality Intel​</span>
              |<span>Hyper Personalized Email</span>
            </div>

            <div className="mt-3 flex w-full flex-col items-center justify-center gap-3 p-4 mx-auto">
              <div className="relative flex h-[45px] w-[100%] items-center justify-between rounded-[30px] border bg-white py-1  shadow-md md:h-[50px] md:w-[80%] md:pl-3 md:pr-[3px] md:py-1 lg:w-[440px]">
                <input
                  type="text"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border_input text_purple h-full w-full rounded-[30px] bg-inherit p-[6px] text-xs font-light outline-none placeholder:text-[13px] md:placeholder:text-xs placeholder:font-light md:text-base md:placeholder:text-[14px]"
                />
                <button className="w-[130px] h-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-[10px] md:text-[13px] font-medium text-white bg-[#7B68EE] hover:bg-[#7B68EE]/[0.9] md:w-[200px] md:text-sm lg:w-[246px]">
                  Try Now
                </button>
              </div>
              <div className="flex gap-2 text-[8px] md:text-[12px] xxl:text-[13px] text-neutral-900">
                <span>GDPR Aligned</span>|<span>No Credit Card Required</span>|
                <span>Quick setup</span>|<span>CCPA Aligned</span>
              </div>
            </div>
            <section className="mx-auto w-[450px] md:w-[1200px]  mt-24">
              <HowItWorksPage />
            </section>
          </div>
          {/* why us */}

          <WhyUs />

          {/* Pricing */}

          <PricingSection />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
