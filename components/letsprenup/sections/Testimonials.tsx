"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/letsprenup/testimonials";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextQuote = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevQuote = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch swipe support for smooth mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextQuote();
    } else if (diff < -50) {
      prevQuote();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-midnight text-white py-28 lg:py-40 select-none">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="rv mb-6 flex items-center justify-between">
          <p className="label-sm text-rose-glow font-semibold tracking-widest uppercase">
            What Couples Say
          </p>

          {/* Navigation Arrows for effortless quote switching */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevQuote}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextQuote}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-600 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {testimonials.map((q, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-12 gap-8 items-end py-12">
                  <div className="lg:col-span-9">
                    <blockquote className="display-italic text-[clamp(28px,4.5vw,56px)] text-white leading-[1.18] transition-opacity duration-300">
                      "{q.quote.replace(/^["']|["']$/g, "")}"
                    </blockquote>
                  </div>
                  <div className="lg:col-span-3 lg:text-right">
                    <p className="text-white text-[17px] font-bold tracking-wide">{q.names}</p>
                    <p className="text-rose-glow text-[14px] font-semibold mt-1">{q.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators with enlarged, easy click targets */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="py-3 px-1.5 flex items-center cursor-pointer group focus:outline-none"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    activeIdx === i
                      ? "w-10 bg-rose shadow-sm shadow-rose/50"
                      : "w-5 bg-white/30 group-hover:bg-white/60 group-hover:w-7"
                  }`}
                />
              </button>
            ))}
            <span className="text-[12px] text-white/50 font-mono ml-3">
              {activeIdx + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

