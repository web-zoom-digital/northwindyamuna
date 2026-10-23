import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Building2, 
  MapPin, 
  Plane, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Navigation, 
  Car, 
  HelpCircle, 
  Compass, 
  FileText 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Luxury Apartments in Yamuna Expressway | Compare Projects",
  description:
    "Explore residential projects and luxury apartments in Yamuna Expressway. Compare verified configurations, project details and locations and request more information.",
  alternates: {
    canonical: `${siteConfig.url}/luxury-apartments-yamuna-expressway`,
  },
  keywords: [
    "luxury apartments in Yamuna Expressway",
    "luxury flats in Yamuna Expressway",
    "premium apartments near Jewar Airport",
    "residential projects in Sector 22D",
    "3 BHK luxury apartments Yamuna Expressway",
    "4 BHK luxury apartments Yamuna Expressway",
    "YEIDA low density apartments"
  ],
  openGraph: {
    title: "Luxury Apartments in Yamuna Expressway | Compare Projects",
    description:
      "Comprehensive buyer guide to luxury apartments and low-density residential communities on Yamuna Expressway near Jewar Airport.",
    url: `${siteConfig.url}/luxury-apartments-yamuna-expressway`,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Luxury Apartments on Yamuna Expressway",
      },
    ],
  },
};

const marketFaqs: FAQItem[] = [
  {
    question: "What differentiates luxury apartments on Yamuna Expressway from Noida or Greater Noida core?",
    answer:
      "Yamuna Expressway residential developments are planned under the YEIDA Master Plan with strict low-density regulations, wider 60-meter sector roads, expansive green buffers, and direct proximity to mega infrastructure projects such as the upcoming Noida International Airport (Jewar) and Film City.",
  },
  {
    question: "Why is Sector 22D preferred for residential luxury living?",
    answer:
      "Sector 22D is designated for low-density residential and township living. It sits outside the primary aircraft landing noise funnel of Jewar Airport while offering a direct 15–18 minute highway drive to terminals, making it an ideal residential sweet spot.",
  },
  {
    question: "What should a buyer check before purchasing an apartment on Yamuna Expressway?",
    answer:
      "Essential verification factors include YEIDA sector allotment status, RERA statutory filings, developer track record, construction milestone linked payment structures, and access to arterial roads.",
  },
  {
    question: "What configurations are typically available in luxury developments here?",
    answer:
      "Most premium gated communities focus on large-format 3 BHK and 4 BHK residences featuring wide sit-out balconies, high ceilings, en-suite bathrooms, and resort-style clubhouse amenities.",
  },
];

export default function LuxuryApartmentsYamunaExpresswayPage() {
  const buyerChecklist = [
    "Verify developer authority approvals and RERA documentation status",
    "Inspect actual road width (YEIDA sector standards feature 45m and 60m roads)",
    "Evaluate tower spacing and green coverage ratio (prefer low-density communities)",
    "Assess transit time to Jewar Airport without being directly under flight funnels",
    "Choose milestone-linked Construction Linked Plans (CLP) for financial security",
    "Check multi-tier gated security, dedicated parking, and 100% power backup systems",
  ];

  const featuredOfferings = [
    {
      title: "Northwind Estate — 3 BHK Luxury Residences",
      location: "Sector 22D, Yamuna Expressway",
      highlight: "Low-Density Living with Panoramic Balconies",
      details: "Spacious 3 bedrooms, 3 bathrooms, modern gourmet kitchen, wide outdoor sit-out balconies overlooking botanical gardens.",
      price: "Price on Request",
      href: "/northwind-yamuna-3-bhk",
    },
    {
      title: "Northwind Estate — 4 BHK Ultra Estate Residences",
      location: "Sector 22D, Yamuna Expressway",
      highlight: "Flagship Luxury Penthouse Living",
      details: "4 en-suite bedrooms, double-height ceiling options, separate servant / utility space, and wrap-around sunset views.",
      price: "Price on Request",
      href: "/configurations/4-bhk-ultra-estate-residence",
    },
  ];

  const corridorCatalysts = [
    {
      title: "Noida International Airport (Jewar)",
      desc: "15–18 minutes drive via 6-lane Yamuna Expressway. Slated to become northern India's premier multi-runway aviation and logistics hub.",
      icon: Plane,
    },
    {
      title: "International Film City (Sector 21)",
      desc: "Located less than 10 minutes away, bringing creative media hubs, production studios, and commercial entertainment zones.",
      icon: Building2,
    },
    {
      title: "Eastern Peripheral Expressway (EPE)",
      desc: "Interchange located near Sector 22D providing signal-free bypass transit to Gurugram, Faridabad, Ghaziabad, and Sonipat.",
      icon: Navigation,
    },
    {
      title: "Academic & Institutional Hubs",
      desc: "Direct proximity to Gautam Buddha University, Galgotias University, and Noida International University campuses.",
      icon: Compass,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Corridor Guide", href: "/luxury-apartments-yamuna-expressway" },
            ]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Corridor Market Guide &amp; Analysis</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Luxury Apartments in <span className="gold-gradient-text">Yamuna Expressway</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore residential projects, low-density gated communities, and luxury 3 &amp; 4 BHK residences in Sector 22D along the high-growth Jewar Airport corridor.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FFFCEC]">
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" /> Sector 22D Hub
              </span>
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-[#ACC78C]" /> 15 Min to Jewar Airport
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Editorial Guide & Project Showcase */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Regional Transformation
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Why Yamuna Expressway is NCR&apos;s Fastest-Growing Luxury Corridor
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  The Yamuna Expressway is undergoing one of northern India&apos;s most significant planned infrastructure expansions. Anchored by the upcoming Noida International Airport at Jewar, the corridor has transitioned from purely speculative land investments into a premier residential destination for end-users seeking low-density living, cleaner Air Quality Index (AQI), and world-class road planning.
                </p>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Unlike crowded urban centers where high-rise towers are clustered tightly together, developments in <strong>Sector 22D</strong> are characterized by wide tower spacing, extensive central landscaped courtyards, and superior vehicular circulation.
                </p>
              </AnimatedReveal>

              {/* Verified Offerings Cards */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-[#0D3829]">
                  Featured Verified Residences in Sector 22D
                </h3>
                {featuredOfferings.map((project, idx) => (
                  <AnimatedReveal key={idx} direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 space-y-3 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#0D3829]/10 pb-3">
                      <div>
                        <h4 className="font-serif font-bold text-lg text-[#0D3829]">{project.title}</h4>
                        <span className="text-xs text-[#5E7168] flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0D3829]" /> {project.location}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#0D3829] bg-[#0D3829]/10 px-2.5 py-1 rounded self-start sm:self-auto">
                        {project.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#0D3829] font-semibold">{project.highlight}</p>
                    <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{project.details}</p>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <Link href={project.href} className="font-bold text-[#0D3829] hover:underline flex items-center gap-1">
                        <span>View Verified Floor Plan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/northwind-yamuna-price-list" className="text-[#5E7168] hover:underline">
                        Request Price Sheet &rarr;
                      </Link>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>

              {/* Corridor Catalysts Grid */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-[#0D3829]">
                  Key Infrastructure Catalysts Shaping Sector 22D
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {corridorCatalysts.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <AnimatedReveal key={idx} direction="up" className="bg-white border border-[#0D3829]/15 rounded-xl p-5 space-y-2 shadow-xs">
                        <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#ACC78C]" />
                        </div>
                        <h4 className="font-serif font-bold text-sm text-[#0D3829]">{cat.title}</h4>
                        <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{cat.desc}</p>
                      </AnimatedReveal>
                    );
                  })}
                </div>
              </div>

              {/* Homebuyer Checklist Box */}
              <AnimatedReveal direction="up" className="bg-white border-l-4 border-[#0D3829] rounded-r-2xl p-6 sm:p-8 space-y-4 shadow-sm border border-[#0D3829]/15">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0D3829]" />
                  <span>Buyer Checklist: Comparing Luxury Flats on Yamuna Expressway</span>
                </h3>
                <ul className="space-y-2.5">
                  {buyerChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D3C25] font-light">
                      <span className="w-5 h-5 rounded-full bg-[#0D3829]/10 text-[#0D3829] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>

              {/* Contextual Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/northwind-yamuna-price-list"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Price List</span>
                  <span className="text-[11px] text-[#5E7168]">Cost sheets &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-site-visit"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Book Site Visit</span>
                  <span className="text-[11px] text-[#5E7168]">Free cab pickup &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-brochure"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Brochure PDF</span>
                  <span className="text-[11px] text-[#5E7168]">Download details &rarr;</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Comparison & Consultation Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Luxury Buyer Consultation
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Compare Luxury Apartments
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Consult with senior real estate advisors to compare verified floor plans, payment schemes, and unit availability in Sector 22D.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Luxury Apartments Corridor Page"
                  sourcePage="/luxury-apartments-yamuna-expressway"
                  submitText="Request Corridor Comparison"
                  conversionAction="general_lead"
                  showDateField={false}
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Corridor Advisory Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Market FAQs */}
      <FAQSection faqs={marketFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Experience Sector 22D in Person"
        subtitle="Schedule a private consultation and site visit to evaluate NCR&apos;s premier low-density residential community."
      />
    </>
  );
}
