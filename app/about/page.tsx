import React from "react";
import Metadata from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import ConfigurationCards from "@/components/ConfigurationCards";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Compass, Sparkles, Building2, Trees } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "About Northwind Estate | Sector 22D Yamuna Expressway",
  description:
    "Learn about Northwind Estate in Sector 22D, Yamuna Expressway. Discover the architecture, low-density master plan, and 3 & 4 BHK luxury residences.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* About Page Full-Screen Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#0D3829] text-white subtle-grid">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Sector22dyamunaexpressway.webp"
            alt="Northwind Estate Sector 22D Architectural Vision"
            fill
            priority
            className="object-cover opacity-30 filter blur-[1px] scale-105"
          />
        </div>

        {/* Ambient Lighting */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "About Overview", href: "/about" }]} variant="dark" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
                <Building2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Architectural Excellence &amp; Master Plan
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FFFCEC] leading-tight">
                About <span className="gold-gradient-text">Northwind Estate</span>
              </h1>
              <p className="text-sm sm:text-base text-[#FFFCEC]/80 font-light leading-relaxed max-w-2xl">
                Northwind Estate is a landmark residential development in Sector 22D, Yamuna Expressway, Greater Noida. Rooted in low-density architectural planning, deep balconies, and biophilic open space design near Jewar International Airport.
              </p>

              {/* Quick Specs Chips */}
              <div className="flex flex-wrap gap-2 pt-2 text-xs text-[#FFFCEC]">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <Trees className="w-3.5 h-3.5 text-[#ACC78C]" /> Low-Density Master Layout
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <Compass className="w-3.5 h-3.5 text-[#ACC78C]" /> 3 &amp; 4 BHK Luxury Residences
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Yamuna Expressway Corridor
                </span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-[#ACC78C]/30 bg-[#1E3A2B]/90 backdrop-blur-md p-3 shadow-2xl space-y-3 hover-card-lift">
                <div className="aspect-[4/3] relative w-full rounded-xl overflow-hidden bg-[#0D3829]">
                  <Image
                    src="/images/extracted/northwindanctuary.jpg"
                    alt="North Wind Sanctuary Architectural Perspective"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#ACC78C] font-serif font-bold">
                    North Wind Sanctuary Elevation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Architectural Vision Section */}
      <section className="py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-[#0D3829] uppercase tracking-widest block">
                Design Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                Low-Density Architecture &amp; Ventilation Planning
              </h2>
              <p className="text-xs sm:text-sm text-[#2D3C25] leading-relaxed font-light">
                The development places emphasis on generous tower spacing to maximize privacy and natural sunlight. Every home features deep balconies, UPVC clear toughened glass sliding doors, and optimal cross-ventilation.
              </p>

              {/* Verified Specifications Summary */}
              <div className="space-y-3 pt-3">
                <h3 className="text-sm font-serif font-bold text-[#0D3829] uppercase tracking-wider">
                  Verified Construction Specifications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2D3C25]">
                  <li className="bg-[#F4F1DF] p-3 rounded-lg border border-[#0D3829]/15 flex items-start gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] block">Living &amp; Bedrooms</strong>
                      Vitrified tile flooring with Putty/OBD finish.
                    </div>
                  </li>
                  <li className="bg-[#F4F1DF] p-3 rounded-lg border border-[#0D3829]/15 flex items-start gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] block">Balcony &amp; Railing</strong>
                      Anti-skid tiles with MS Railing and UPVC frame doors.
                    </div>
                  </li>
                  <li className="bg-[#F4F1DF] p-3 rounded-lg border border-[#0D3829]/15 flex items-start gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] block">Kitchen Counter</strong>
                      Granite stone counter slab with Stainless Steel Sink.
                    </div>
                  </li>
                  <li className="bg-[#F4F1DF] p-3 rounded-lg border border-[#0D3829]/15 flex items-start gap-2 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3829] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0D3829] block">Bathrooms</strong>
                      Anti-skid tiles, 7-ft dado tiles, Gypsum grid false ceiling.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-xl bg-[#F4F1DF]">
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src="/images/project/low-density-gated-community.svg"
                    alt="Low Density Master Plan Northwind Estate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ProjectOverview />
      <Highlights />
      <ConfigurationCards />
      <FAQSection />
      <CTASection
        title="Schedule a Site Tour of Northwind Estate"
        subtitle="Speak with our property experts for current layout plans, cost sheets, and site visit arrangements."
      />
    </>
  );
}
