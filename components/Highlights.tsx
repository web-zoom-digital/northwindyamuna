"use client";

import React from "react";
import { Plane, MapPin, ShieldCheck, Trees, Dumbbell, Zap, ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export default function Highlights() {
  const { openLeadModal } = useLeadModal();

  const highlightCards = [
    {
      icon: MapPin,
      title: "Prime Sector 22D Location",
      desc: "Direct access to Yamuna Expressway with connectivity to Greater Noida, Noida, Delhi, and Agra.",
      tag: "Strategic Location"
    },
    {
      icon: Plane,
      title: "Jewar Airport Proximity",
      desc: "Close proximity to upcoming Noida International Airport, positioning Sector 22D as a major appreciation corridor.",
      tag: "High Growth"
    },
    {
      icon: Trees,
      title: "Low-Density Society",
      desc: "Thoughtfully planned layout ensuring maximum open green spaces, privacy, and serene living environment.",
      tag: "Green Living"
    },
    {
      icon: Dumbbell,
      title: "Resort-Style Amenities",
      desc: "Equipped with modern clubhouse, swimming pool, state-of-the-art gymnasium, and landscaped Zen gardens.",
      tag: "Lifestyle Hub"
    },
    {
      icon: ShieldCheck,
      title: "24x7 Multi-Tier Security",
      desc: "Gated entry points, CCTV surveillance, professional security personnel, and 100% power backup.",
      tag: "Security"
    },
    {
      icon: Zap,
      title: "Future-Ready Infrastructure",
      desc: "Benefiting from planned metro expansion, industrial logistics parks, and top educational hubs.",
      tag: "Infrastructure"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-[#F4F1DF] text-[#0D3829] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
            Project Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Why Northwind Estate Stands Apart
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Designed for long-term appreciation, modern family comfort, and seamless connectivity on Yamuna Expressway.
          </p>
        </AnimatedReveal>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {highlightCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <AnimatedReveal key={idx} direction="up" delay={idx * 0.05}>
                <div
                  className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 transition-all duration-300 group flex flex-col justify-between h-full hover-card-lift shadow-xs"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-[#0D3829] bg-[#0D3829]/10 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#0D3829]/15 truncate">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-serif font-bold text-[#0D3829] mb-1.5 group-hover:text-[#1E3A2B] transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#2D3C25] leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Bottom Banner Trigger */}
        <AnimatedReveal direction="up" delay={0.3} className="mt-12">
          <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h4 className="text-lg font-serif font-bold text-[#0D3829]">Interested in Sector 22D Investment Opportunities?</h4>
              <p className="text-xs text-[#5E7168] mt-1 font-light">
                Speak with our real-estate consultants to get verified unit availability and site visit cab booking.
              </p>
            </div>
            <button
              onClick={() =>
                openLeadModal({
                  title: "Talk to Property Consultant",
                  ctaSource: "Highlights Banner CTA",
                })
              }
              className="w-full sm:w-auto bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider whitespace-nowrap shadow-xs transition flex items-center justify-center gap-2 cursor-pointer border border-[#ACC78C]/30"
            >
              <span>Talk to Consultant</span>
              <ArrowRight className="w-4 h-4 text-[#ACC78C]" />
            </button>
          </div>
        </AnimatedReveal>

      </div>
    </section>
  );
}

