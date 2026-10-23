import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Plane, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Phone 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Apartments Near Jewar Airport | Luxury Flats Yamuna Expressway",
  description: "Explore luxury 3 & 4 BHK apartments near upcoming Noida International Airport (Jewar). Sector 22D low-density gated community with VIP cab site visits.",
  alternates: {
    canonical: `${siteConfig.url}/apartments-near-jewar-airport`,
  },
  keywords: [
    "apartments near jewar airport",
    "flats near noida international airport",
    "property near jewar airport yamuna expressway",
    "3 bhk flats near jewar airport",
    "4 bhk luxury apartments jewar airport corridor",
    "residential projects sector 22d yamuna expressway"
  ],
  openGraph: {
    title: "Luxury Apartments Near Jewar Airport | Northwind Estate",
    description: "Premium 3 & 4 BHK residences just 15 minutes from Noida International Airport at Jewar. Modern amenities & capital appreciation potential.",
    url: `${siteConfig.url}/apartments-near-jewar-airport`,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Apartments near Jewar Airport Northwind Estate",
      },
    ],
  },
};

const jewarAirportFaqs: FAQItem[] = [
  {
    question: "How far is Northwind Estate from the upcoming Noida International Airport (Jewar)?",
    answer: "Northwind Estate in Sector 22D is situated approximately 15 to 18 minutes driving distance from the Noida International Airport via the 6-lane Yamuna Expressway corridor."
  },
  {
    question: "Why is Sector 22D considered the best residential location near Jewar Airport?",
    answer: "Sector 22D offers the perfect balance: it is close enough to ensure a 15-minute commute for airport professionals and frequent flyers, yet located safely outside the primary flight approach funnel, protecting residents from aircraft noise."
  },
  {
    question: "What capital appreciation is expected for apartments near Jewar Airport?",
    answer: "Historically, aerotropolis regions like Delhi Aerocity, Bengaluru Devanahalli, and Hyderabad Shamshabad experienced 100% to 250% capital appreciation as airport phases became operational. Jewar Airport is slated to follow a similar growth curve."
  },
  {
    question: "What public transport connectivity is planned between Sector 22D and the Airport?",
    answer: "A dedicated Airport Metro Express link connecting Greater Noida Knowledge Park II to Jewar Airport terminal is planned with proposed stations along Yamuna Expressway, alongside feeder bus routes and the Eastern Peripheral Expressway."
  },
  {
    question: "How can I book a site visit from Delhi or Noida?",
    answer: "We arrange complimentary VIP cab pickup and drop service from anywhere in Delhi NCR directly to our Sector 22D site sales lounge. You can schedule by filling the enquiry form or calling +91 97177 00596."
  }
];

export default function JewarAirportApartmentsPage() {
  const airportAdvantages = [
    {
      title: "15-Minute Signal-Free Drive",
      desc: "Direct access via the 6-lane Yamuna Expressway ensures hassle-free transit to passenger terminals without city congestion.",
      icon: Clock,
    },
    {
      title: "Global Aviation Hub Catalyst",
      desc: "Jewar Airport is planned to be India's largest aerotropolis, bringing massive corporate offices, logistics parks, and hospitality demand.",
      icon: Plane,
    },
    {
      title: "Safe Acoustic Zone",
      desc: "Sector 22D is strategically positioned outside direct landing flight paths, providing quiet residential serenity.",
      icon: ShieldCheck,
    },
    {
      title: "High Rental & Resale Yield",
      desc: "Aviation crew, multinational executives, and logistics leaders will create strong rental demand for luxury 3 & 4 BHK residences.",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Jewar Airport Residences", href: "/apartments-near-jewar-airport" },
            ]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Plane className="w-3.5 h-3.5" />
              <span>Noida International Airport Growth Corridor</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Luxury Apartments Near <span className="gold-gradient-text">Jewar Airport</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Invest in premium 3 &amp; 4 BHK low-density residences situated just 15 minutes from upcoming Noida International Airport in Sector 22D Yamuna Expressway. Modern living engineered for lifestyle comfort and high asset appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Airport Insights */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  The Aerotropolis Advantage
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Why Living Near Jewar Airport is NCR's Most Lucrative Investment
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  The upcoming Noida International Airport at Jewar is fundamentally shifting the economic axis of the National Capital Region. Spanning over 5,000 hectares upon full expansion, the aerotropolis is engineered to handle 70+ million passengers annually and serve as northern India's premier multi-modal cargo hub.
                </p>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Real estate within a 15–20 minute radius of major international airports consistently experiences superior capital appreciation compared to interior city sectors. At <strong>Northwind Estate</strong> in Sector 22D, residents enjoy direct highway access to terminal gates while enjoying low-density green living.
                </p>
              </AnimatedReveal>

              {/* 4 Advantage Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {airportAdvantages.map((adv) => {
                  const Icon = adv.icon;
                  return (
                    <AnimatedReveal key={adv.title} direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-xl p-5 space-y-2.5 shadow-xs">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#ACC78C]" />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-[#0D3829]">{adv.title}</h3>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{adv.desc}</p>
                    </AnimatedReveal>
                  );
                })}
              </div>

              {/* Commute Distances Table */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0D3829]" />
                  <span>Commute Time Matrix from Sector 22D</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">Noida International Airport (Jewar)</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">15 Mins</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">International Film City (Sec 21)</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">8 Mins</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">Buddh International Circuit (BIC)</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">6 Mins</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">Eastern Peripheral Expressway</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">10 Mins</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">Pari Chowk, Greater Noida</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">20 Mins</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex justify-between items-center">
                    <span className="font-medium text-[#2D3C25]">South Delhi via DND Flyway</span>
                    <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2 py-0.5 rounded">50 Mins</span>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Configurations Summary Box */}
              <AnimatedReveal direction="up" className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-[#0D3829]">
                  Available Configurations Near Jewar Airport
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-[#0D3829]/15 rounded-xl p-5 space-y-3">
                    <span className="text-[10px] font-bold text-[#0D3829] uppercase bg-[#0D3829]/10 px-2 py-0.5 rounded">3 BHK Luxury</span>
                    <h4 className="font-serif font-bold text-base text-[#0D3829]">3 BHK Luxury Residences</h4>
                    <p className="text-xs text-[#2D3C25] font-light">Spacious 3 bedrooms, 3 baths, large outdoor sit-out balconies overlooking green landscaped courtyards.</p>
                    <Link href="/configurations/3-bhk-luxury-apartment" className="text-xs font-bold text-[#0D3829] hover:underline flex items-center gap-1">
                      <span>View 3 BHK Floor Plan</span> &rarr;
                    </Link>
                  </div>
                  <div className="bg-white border border-[#0D3829]/15 rounded-xl p-5 space-y-3">
                    <span className="text-[10px] font-bold text-[#0D3829] uppercase bg-[#0D3829]/10 px-2 py-0.5 rounded">4 BHK Ultra</span>
                    <h4 className="font-serif font-bold text-base text-[#0D3829]">4 BHK Ultra Estate Residences</h4>
                    <p className="text-xs text-[#2D3C25] font-light">Opulent 4 bedrooms with en-suite baths, double-height living options, and dedicated domestic staff utility space.</p>
                    <Link href="/configurations/4-bhk-ultra-estate-residence" className="text-xs font-bold text-[#0D3829] hover:underline flex items-center gap-1">
                      <span>View 4 BHK Floor Plan</span> &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>

            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> VIP Priority Desk
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Enquire Jewar Airport Residences
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Request official pricing, payment schedules, and schedule a complimentary site visit with free pickup from Delhi NCR.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Jewar Airport Hub Form"
                  sourcePage="/apartments-near-jewar-airport"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Airport Corridor Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Jewar Airport FAQs */}
      <FAQSection faqs={jewarAirportFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Experience Northwind Estate in Sector 22D"
        subtitle="Book a private VIP site visit today to experience NCR's premier low-density residential community."
      />
    </>
  );
}
