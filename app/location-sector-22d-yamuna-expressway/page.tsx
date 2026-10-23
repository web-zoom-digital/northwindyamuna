import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  MapPin, 
  Navigation, 
  Plane, 
  GraduationCap, 
  Building, 
  Car, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Phone 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sector 22D Yamuna Expressway Location & Growth Corridor",
  description: "Comprehensive connectivity guide for Sector 22D Yamuna Expressway. Strategic advantages, upcoming Jewar Airport, Film City, and metro transit.",
  alternates: {
    canonical: `${siteConfig.url}/location-sector-22d-yamuna-expressway`,
  },
  keywords: [
    "sector 22d yamuna expressway",
    "property in sector 22d greater noida",
    "sector 22d location advantages",
    "yamuna expressway connectivity",
    "sector 22d master plan yeida",
    "apartments sector 22d greater noida"
  ],
  openGraph: {
    title: "Sector 22D Yamuna Expressway Location Guide | Northwind Estate",
    description: "Explore the location advantages of Sector 22D on Yamuna Expressway. Epicenter of infrastructure with signal-free transit to Jewar Airport and Delhi NCR.",
    url: `${siteConfig.url}/location-sector-22d-yamuna-expressway`,
  },
};

const locationFaqs: FAQItem[] = [
  {
    question: "Where is Sector 22D situated on Yamuna Expressway?",
    answer: "Sector 22D is located directly along the Yamuna Expressway in Greater Noida, positioned between the Pari Chowk interchange and the upcoming Noida International Airport at Jewar."
  },
  {
    question: "What makes Sector 22D different from other sectors on Yamuna Expressway?",
    answer: "Sector 22D is designated for low-density residential developments under the YEIDA Master Plan 2041, featuring wider 60-meter roads, generous green buffers, underground civic utilities, and immediate adjacency to the proposed Film City and Olympic City zones."
  },
  {
    question: "How long does it take to travel from Sector 22D to Delhi and Noida?",
    answer: "Driving time to Central Noida via Noida-Greater Noida Expressway is approximately 35–45 minutes, while South Delhi is accessible within 50–60 minutes via the Yamuna Expressway and DND Flyway."
  },
  {
    question: "What educational and healthcare institutions are near Sector 22D?",
    answer: "Leading universities such as Gautam Buddha University, Galgotias University, and Noida International University are within 10–15 minutes, alongside multi-specialty healthcare facilities in Greater Noida."
  }
];

export default function LocationSector22DPage() {
  const connectivityPillars = [
    {
      title: "Yamuna Expressway Spine",
      desc: "Direct access to the 6-lane access-controlled highway connecting Greater Noida with Agra and the National Capital Region.",
      icon: Car,
    },
    {
      title: "Noida International Airport (Jewar)",
      desc: "Just 15 minutes to passenger terminals, cargo complexes, and upcoming maintenance hubs.",
      icon: Plane,
    },
    {
      title: "Eastern Peripheral Expressway (EPE)",
      desc: "Instant bypass access to Gurugram, Faridabad, Palwal, and Ghaziabad without entering Delhi traffic.",
      icon: Navigation,
    },
    {
      title: "Academic & University Corridor",
      desc: "Proximity to world-class educational campuses including GBU, Galgotias, NIU, and Shiv Nadar University.",
      icon: GraduationCap,
    },
    {
      title: "International Film City (Sector 21)",
      desc: "Situated less than 10 minutes from the 1,000-acre media production, film studio, and entertainment hub.",
      icon: Building,
    },
    {
      title: "Proposed Airport Metro Line",
      desc: "Planned dedicated rapid transit route linking Knowledge Park II directly to Jewar Airport with sector stations.",
      icon: MapPin,
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Location & Connectivity", href: "/location-sector-22d-yamuna-expressway" },
            ]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location Intelligence &amp; Connectivity</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Sector 22D <span className="gold-gradient-text">Yamuna Expressway</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore the infrastructure catalysts, highway connections, and multimodal transit links that make Sector 22D Greater Noida's most sought-after low-density residential investment address.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Location Breakdown */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  The Epicenter of Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Why Sector 22D is the Crown Jewel of Yamuna Expressway
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  As Delhi NCR expands outward, the Yamuna Expressway corridor has emerged as northern India's premier planned growth corridor. Under the visionary master planning of YEIDA, Sector 22D has been earmarked exclusively for premium low-density residential and township developments.
                </p>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Unlike traditional sectors that suffer from traffic bottlenecks and uneven road infrastructure, Sector 22D features planned 60-meter and 45-meter arterial grid conduits, ensuring swift transit whether you are heading toward Central Delhi, Noida, or the international airport terminals.
                </p>
              </AnimatedReveal>

              {/* Visual Map Visual */}
              <AnimatedReveal direction="up" className="rounded-2xl overflow-hidden border border-[#0D3829]/15 shadow-md bg-[#F4F1DF]">
                <div className="aspect-[16/10] relative w-full bg-[#F4F1DF]">
                  <Image
                    src="/images/extracted/Sector22dyamunaexpressway.webp"
                    alt="Sector 22D Yamuna Expressway Strategic Location Map"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#0D3829]/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#0D3829]">Sector 22D Growth Corridor</span>
                  <span className="text-[#5E7168]">Greater Noida, Uttar Pradesh 203201</span>
                </div>
              </AnimatedReveal>

              {/* 6 Connectivity Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {connectivityPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <AnimatedReveal key={pillar.title} direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-xl p-5 space-y-2.5 shadow-xs">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#ACC78C]" />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-[#0D3829]">{pillar.title}</h3>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{pillar.desc}</p>
                    </AnimatedReveal>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Free Driving Map &amp; Cab
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request Sector 22D Guide
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Get detailed route blueprints, master plan layouts, and coordinate a site visit with free VIP pickup from anywhere in Delhi NCR.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Location Hub Form"
                  sourcePage="/location-sector-22d-yamuna-expressway"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Dedicated Location Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sector 22D FAQs */}
      <FAQSection faqs={locationFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Visit Northwind Estate in Sector 22D"
        subtitle="Book a private tour with our property consultants to experience the micro-market connectivity firsthand."
      />
    </>
  );
}
