"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, FileText, Users } from "lucide-react";

import img1 from "@/images/home/Attorney-Services-1-scaled.webp";
import img2 from "@/images/home/Background-information-scaled-1.webp";
import img3 from "@/images/home/step-3-documents-1-scaled.webp";

interface Step {
  number: string;
  img: any;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    img: img1,
    icon: FileText,
    title: "Partners fill their questionnaires",
    description:
      "Join Our Platform Invite your fiancé  Fill out your individual questionnaires on your own account",
  },
  {
    number: "2",
    img: img2,
    icon: Users,
    title: "Get Legal advise from your Lawyer ",
    description:
      "Through our platform, you’ll each connect with a separate lawyer who will provide advice on your agreement. Our fixed-fee model includes one hour of legal advice for each of you. You’ll both receive the necessary legal advice before entering into a nuptial agreement.",
  },
  {
    number: "3",
    img: img3,
    icon: CheckCircle2,
    title: "Sign your Prenup ",
    description:
      "Your lawyers will sign the agreement and provide you with a certificate of legal advice. Once you have the certificate, both of you can sign the document and complete the final step.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState<number | null>(1);

  return (
    <div className="min-h-screen bg-neutral-100 rounded-3xl shadow-xl">
      <section className="px-6 py-16 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-4xl font-semibold text-neutral-800 text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
            How Our Prenup Works
          </h1>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex items-center flex-col gap-4"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <div
                  onClick={() => setActiveStep(Number(step.number))}
                  className={cn(
                    "shrink-0 w-15 h-15 cursor-pointer rounded-full bg-neutral-200 flex items-center justify-center text-neutral-900 font-medium text-xl shadow-lg",
                    activeStep === Number(step.number)
                      ? "bg-primary text-white shadow-primary/20"
                      : ""
                  )}
                >
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-1">
                    <h3
                      className={cn(
                        "text-black font-medium text-lg leading-tight",
                        activeStep === Number(step.number)
                          ? "text-primary"
                          : "text-gray-500"
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image and Content*/}

          {steps[activeStep ? activeStep - 1 : 0] && (
            <>
              <div className="w-full h-auto px-16">
                <img
                  src={steps[activeStep ? activeStep - 1 : 0].img.src}
                  alt="step img"
                  className="w-full h-[700px]"
                />
              </div>

              <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                <p>{steps[activeStep ? activeStep - 1 : 0].description}</p>
              </div>
            </>
          )}

          <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <button
              // size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary font-medium px-6 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer duration-300"
            >
              Explore the questionnaire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
