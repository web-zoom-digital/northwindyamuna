"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Trees, Building, ArrowRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export default function ProjectOverview() {
  const { openLeadModal } = useLeadModal();

  return (
    <section id="overview" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-y border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <AnimatedReveal direction="right" className="order-1 lg:order-1 lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-md bg-[#F4F1DF]">
              <div className="aspect-[4/3] relative w-full bg-[#F4F1DF]">
                <Image
                  src="/images/extracted/northwindanctuary.jpg"
                  alt="Northwind Estate Low Density Community Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Badge Card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#FFFCEC] border border-[#0D3829]/20 rounded-xl p-4 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0D3829] block">Low Density Master Plan</span>
                <span className="text-[11px] text-[#5E7168]">Sector 22D Yamuna Expressway</span>
              </div>
            </div>
          </AnimatedReveal>

          {/* Text Content Column */}
          <AnimatedReveal direction="left" delay={0.2} className="order-2 lg:order-2 lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
              Project Overview
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829] leading-tight">
              Thoughtfully Planned Residential Enclave
            </h2>

            <p className="text-sm sm:text-base text-[#2D3C25] leading-relaxed font-light">
              Explore <strong className="text-[#0D3829]">Northwind Estate</strong>, the residential development in Sector 22D, Yamuna Expressway, Greater Noida. Crafted to offer a balanced lifestyle blending contemporary architecture, spacious unit planning, and future-ready infrastructure.
            </p>

            <p className="text-sm text-[#2D3C25] leading-relaxed font-light">
              Featuring contemporary 3 BHK and 4 BHK residences with expansive balconies and wide window openings for natural daylighting and cross-ventilation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F4F1DF] p-4 rounded-xl border border-[#0D3829]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center mb-2">
                  <Building className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-bold text-[#0D3829]">Modern Architecture</h4>
                <p className="text-xs text-[#5E7168] mt-1 font-light">
                  Vitrified tile flooring, UPVC glass balcony frames, and stylish bath fittings.
                </p>
              </div>

              <div className="bg-[#F4F1DF] p-4 rounded-xl border border-[#0D3829]/15">
                <div className="w-8 h-8 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-serif font-bold text-[#0D3829]">Gated Security</h4>
                <p className="text-xs text-[#5E7168] mt-1 font-light">
                  Multi-tier security, 24x7 monitoring, and 100% power backup systems.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Get Project Details & Brochure",
                    ctaSource: "Project Overview CTA",
                  })
                }
                className="bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition flex items-center gap-2 group shadow-xs cursor-pointer"
              >
                <span>Get Complete Project Details</span>
                <ArrowRight className="w-4 h-4 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </AnimatedReveal>

        </div>
      </div>
    </section>
  );
}
