"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const features = [
    "Customized Prenuptial Agreement",
    "Multiple Revisions to Perfect Your Document",
    "Customer Support",
    "AI Clause Creation",
    "Explain Sections with AI",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Pricing
        </h2>
        <h2 className="text-4xl md:text-3xl font-medium text-gray-900 mt-5">
          One-Time Investment, Endless Peace of Mind
        </h2>

        <p className="mt-2 text-gray-500 text-lg">No hidden fees.</p>
      </div>

      <div className="flex justify-center px-6">
        <div
          className="
            w-full max-w-xl p-10 rounded-3xl 
            bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900
            shadow-xl border border-white/10
            text-white
          "
        >
          {/* Title */}
          <h3 className="text-3xl font-semibold">Essential</h3>
          <p className="mt-1 text-gray-300 text-base">
            A cost-effective solution tailored to meet essential requirements.
          </p>

          {/* Price */}
          <div className="mt-6 mb-4">
            <p className="text-6xl font-bold">$250</p>
            <p className="text-gray-300 text-base">USD · One-Time Fee</p>
          </div>

          {/* Features */}
          <ul className="space-y-4 mt-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-200 text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="#"
            className="
              block w-full mt-10 py-4 rounded-xl
              bg-gradient-to-r from-indigo-500 to-blue-400
              text-center text-white text-2xl font-medium
              hover:opacity-90 transition
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
