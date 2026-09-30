"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";

export default function WhyConsiderSection() {
  const { openLeadModal } = useLeadModal();

  const reasons = [
    {
      title: "Strategic Capital Growth Corridor",
      desc: "Yamuna Expressway Sector 22D is benefiting from infrastructure projects including Noida International Airport, Film City, and industrial parks."
    },
    {
      title: "Low-Density Living Concept",
      desc: "Fewer residential units per acre compared to congested city centers, ensuring peaceful open-air living and green views."
    },
    {
      title: "Refined Modern Specifications",
      desc: "Vitrified flooring in living zones, anti-skid balcony tiles, granite kitchen counters with stainless steel sinks, and UPVC toughened glass frames."
    },
    {
      title: "Transparent & Direct Process",
      desc: "Clear documentation, verified layout blueprints, structured price sheets, and professional property consultant guidance at every stage."
    }
  ];

  return (
    <section className="py-20 bg-[#F4F1DF] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Informed Decision Making
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829] leading-tight">
              Why Consider Northwind Estate?
            </h2>
            <p className="text-xs sm:text-sm text-[#5E7168] leading-relaxed font-light">
              Investing in residential real estate requires balancing long-term appreciation, structural quality, and lifestyle convenience. Sector 22D Yamuna Expressway delivers all three.
            </p>

            <div className="pt-2">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Private Site Tour",
                    ctaSource: "Why Consider CTA",
                  })
                }
                className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-[#FFFCEC] p-6 rounded-2xl border border-[#0D3829]/15 transition space-y-2.5 shadow-xs hover-card-lift"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="text-base font-serif font-bold text-[#0D3829]">{r.title}</h3>
                <p className="text-xs text-[#2D3C25] leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

