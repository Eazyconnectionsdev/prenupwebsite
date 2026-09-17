"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-pearl/80 shadow-sm"
            : "bg-midnight/90 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 transition-colors duration-300 group">
            <svg
              className={`w-[28px] h-[28px] transition-colors duration-300 ${
                scrolled ? "text-rose" : "text-rose-glow"
              }`}
              viewBox="0 0 28 28"
              fill="none"
            >
              <circle cx="11.5" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <circle
                cx="16.5"
                cy="14"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.6"
              />
            </svg>
            <span
              className={`text-[14px] font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${
                scrolled ? "text-midnight" : "text-white"
              }`}
            >
              LetsPrenup
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#process"
              className={`text-[13px] font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-midnight/80 hover:text-rose"
                  : "text-white/90 hover:text-rose-glow"
              }`}
            >
              Process
            </a>
            <a
              href="#agreements"
              className={`text-[13px] font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-midnight/80 hover:text-rose"
                  : "text-white/90 hover:text-rose-glow"
              }`}
            >
              Agreements
            </a>
            <a
              href="#pricing"
              className={`text-[13px] font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-midnight/80 hover:text-rose"
                  : "text-white/90 hover:text-rose-glow"
              }`}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className={`text-[13px] font-semibold transition-colors duration-300 ${
                scrolled
                  ? "text-midnight/80 hover:text-rose"
                  : "text-white/90 hover:text-rose-glow"
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons: Log In & Sign Up */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className={`text-[13px] font-semibold tracking-wide transition-all duration-200 px-3.5 py-2 rounded-lg cursor-pointer ${
                scrolled
                  ? "text-midnight hover:text-rose hover:bg-black/5"
                  : "text-white hover:text-rose-glow hover:bg-white/10"
              }`}
            >
              Log In
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-semibold tracking-wider uppercase transition-all duration-300 bg-[#8B3A4A] text-white hover:bg-[#6E2D3B] shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`lg:hidden transition-colors duration-300 p-1.5 rounded-lg ${
              scrolled ? "text-midnight hover:text-rose hover:bg-black/5" : "text-white hover:text-rose-glow hover:bg-white/10"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-white text-midnight z-[60] p-7 flex flex-col shadow-2xl border-l border-pearl transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#8B3A4A]" viewBox="0 0 28 28" fill="none">
              <circle cx="11.5" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="16.5" cy="14" r="6.5" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
            </svg>
            <span className="text-[13px] font-bold tracking-wider uppercase text-[#0D1B2A]">
              LetsPrenup
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <a
            href="#process"
            onClick={() => setDrawerOpen(false)}
            className="text-[#0D1B2A]/80 hover:text-[#8B3A4A] text-base font-semibold py-1 transition-colors"
          >
            Process
          </a>
          <a
            href="#agreements"
            onClick={() => setDrawerOpen(false)}
            className="text-[#0D1B2A]/80 hover:text-[#8B3A4A] text-base font-semibold py-1 transition-colors"
          >
            Agreements
          </a>
          <a
            href="#pricing"
            onClick={() => setDrawerOpen(false)}
            className="text-[#0D1B2A]/80 hover:text-[#8B3A4A] text-base font-semibold py-1 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setDrawerOpen(false)}
            className="text-[#0D1B2A]/80 hover:text-[#8B3A4A] text-base font-semibold py-1 transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Auth Actions */}
        <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-gray-100">
          <Link
            href="/login"
            onClick={() => setDrawerOpen(false)}
            className="w-full py-2.5 border border-gray-200 text-[#0D1B2A] font-semibold rounded-xl text-sm hover:bg-gray-50 transition-all text-center"
          >
            Log In
          </Link>
          <Link
            href="/register"
            onClick={() => setDrawerOpen(false)}
            className="w-full bg-[#8B3A4A] text-white py-3 rounded-xl text-center text-sm font-semibold tracking-wider uppercase shadow-md hover:bg-[#6E2D3B] transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
