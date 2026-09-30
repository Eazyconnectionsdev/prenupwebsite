import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden bg-midnight text-white"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
          alt="UK Wedding Dinner Celebration Table"
          className="w-full h-full object-cover"
          id="cta-img"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/90 to-midnight pointer-events-none"></div>
      </div>

      {/* Top CTA Content Area */}
      <div className="relative z-10 max-w-[850px] mx-auto px-6 text-center w-full pt-14 lg:pt-16 pb-4 my-auto flex flex-col items-center justify-center">
        <h2 className="rv display text-[clamp(28px,3.6vw,46px)] text-white leading-[1.18] mb-3 pt-1">
          Your marriage deserves a{" "}
          <span className="display-italic text-rose-glow">clear start</span>.
        </h2>
        <p className="rv text-white/90 text-[14.5px] lg:text-[16px] mb-5 max-w-lg mx-auto font-normal leading-relaxed">
          Fixed £999. Two independent firms. Done in days. Start in under five minutes.
        </p>
        <div className="rv">
          <a
            href="#pricing"
            className="btn-fill bg-rose hover:bg-rose-deep text-white px-8 py-3 lg:py-3.5 rounded-full text-[12px] lg:text-[13px] font-bold tracking-wider uppercase inline-flex items-center gap-2.5 shadow-xl transition-all duration-300"
          >
            Begin Your Agreement
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-midnight/70 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-5 lg:pt-6 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-4 border-b border-white/10">
            {/* Brand / Tagline */}
            <div className="col-span-2 lg:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-2.5">
                <svg className="w-5 h-5 text-rose-glow" viewBox="0 0 28 28" fill="none">
                  <circle cx="11.5" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.1" />
                  <circle
                    cx="16.5"
                    cy="14"
                    r="6.5"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    opacity="0.5"
                  />
                </svg>
                <span className="text-[13px] font-bold tracking-[0.16em] uppercase text-white">
                  LetsPrenup
                </span>
              </Link>
              <p className="text-white/80 text-[13px] leading-relaxed max-w-xs font-normal">
                Modern prenuptial agreements for UK couples. Transparent pricing, independent legal advice, fully online.
              </p>
            </div>

            {/* Navigate */}
            <div className="col-span-1 lg:col-span-2 lg:col-start-7">
              <p className="label-sm text-rose-glow font-bold mb-2.5 text-[11px] tracking-widest uppercase">
                NAVIGATE
              </p>
              <nav className="flex flex-col gap-1.5">
                <a
                  href="#process"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Process
                </a>
                <a
                  href="#agreements"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Agreements
                </a>
                <a
                  href="#pricing"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  FAQ
                </a>
              </nav>
            </div>

            {/* Legal */}
            <div className="col-span-1 lg:col-span-2">
              <p className="label-sm text-rose-glow font-bold mb-2.5 text-[11px] tracking-widest uppercase">
                LEGAL
              </p>
              <nav className="flex flex-col gap-1.5">
                <a
                  href="#"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Cookie Policy
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="col-span-2 lg:col-span-2">
              <p className="label-sm text-rose-glow font-bold mb-2.5 text-[11px] tracking-widest uppercase">
                CONTACT
              </p>
              <nav className="flex flex-col gap-1.5">
                <a
                  href="mailto:hello@letsprenup.co.uk"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  hello@letsprenup.co.uk
                </a>
                <a
                  href="#"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-[13px] text-white/90 hover:text-rose-glow transition-colors font-medium"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-3 pb-1 flex flex-col md:flex-row justify-between items-center gap-2 text-[11.5px] text-white/70 font-medium">
            <p>&copy; 2026 LetsPrenup Ltd. All rights reserved.</p>
            <p>
              Independent legal advice provided by panel solicitors regulated by the SRA & BSB.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
