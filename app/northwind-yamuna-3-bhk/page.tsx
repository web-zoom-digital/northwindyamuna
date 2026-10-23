import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  BedDouble, 
  CheckCircle2, 
  Maximize2, 
  Layers, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Download, 
  Calendar 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Northwind Yamuna 3 BHK Price & Floor Plan",
  description:
    "Explore Northwind Yamuna 3 BHK configuration details, verified floor plans and current pricing information, or request a price quotation.",
  alternates: {
    canonical: `${siteConfig.url}/northwind-yamuna-3-bhk`,
  },
  keywords: [
    "Northwind Yamuna 3 BHK price",
    "Northwind Yamuna 3 BHK apartment",
    "Northwind Yamuna 3 BHK floor plan",
    "Northwind Yamuna 3 BHK price list",
    "Northwind Yamuna 3 BHK availability",
    "3 BHK Yamuna Expressway Sector 22D"
  ],
  openGraph: {
    title: "Northwind Yamuna 3 BHK Price & Floor Plan",
    description:
      "Spacious 3 BHK luxury residences at Northwind Yamuna Sector 22D. Verified floor plan blueprints, specifications, and pricing enquiries.",
    url: `${siteConfig.url}/northwind-yamuna-3-bhk`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/3-bhk-luxury-apartment-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Yamuna 3 BHK Living Space",
      },
    ],
  },
};

const threeBhkFaqs: FAQItem[] = [
  {
    question: "What is the official price for a 3 BHK at Northwind Yamuna?",
    answer:
      "Pricing for 3 BHK luxury residences is available on request. Base prices depend on floor rise, view orientation, and prevailing payment schemes. Prospective buyers receive official unit cost sheets directly from authorized property consultants upon enquiry.",
  },
  {
    question: "What is the room layout of the 3 BHK Luxury Apartment?",
    answer:
      "The 3 BHK configuration features 3 well-proportioned bedrooms, an expansive living and dining hall, a modern modular-compatible kitchen with separate dry utility balcony, wide outdoor sit-out balconies, and 3 full bathrooms.",
  },
  {
    question: "Are floor plan blueprints available for download?",
    answer:
      "Yes, high-resolution vector schematic layouts and dimension sheets for the 3 BHK residences can be requested in PDF format via our lead enquiry form or downloaded from our brochure portal.",
  },
  {
    question: "What flooring and fittings are used in the 3 BHK residences?",
    answer:
      "Living, dining, and bedrooms feature premium vitrified tiles; balconies and bathrooms are equipped with anti-skid ceramic tiles; kitchen features granite counters with stainless-steel sinks; and balcony enclosures use toughened glass with UPVC joinery.",
  },
];

export default function NorthwindYamunaThreeBhkPage() {
  const verifiedSpecs = [
    { label: "Configuration Type", value: "3 BHK Luxury Apartment" },
    { label: "Balconies", value: "Wide Sit-Out Balconies with Toughened Glass" },
    { label: "Flooring", value: "Premium Vitrified Tiles (Living / Bedrooms)" },
    { label: "Bathrooms", value: "3 Full Bathrooms with Branded CP Fittings" },
    { label: "Kitchen Counter", value: "Granite Counter with Stainless Sink & Utility" },
    { label: "Ventilation", value: "Dual-Aspect Cross-Ventilation Planning" },
    { label: "Current Price", value: "Price on Request (Official Quote)" },
    { label: "Availability Status", value: "Coming Soon / Enquire for Priority" },
  ];

  const roomHighlights = [
    {
      title: "Expansive Living & Dining Salon",
      description: "Generous open-plan hall connected seamlessly to wide outdoor balconies with floor-to-ceiling glass doors.",
    },
    {
      title: "Master Bedroom Suite",
      description: "Private sanctuary with attached en-suite bath, designated dressing alcove, and morning sun orientation.",
    },
    {
      title: "Family & Guest Bedrooms",
      description: "Two additional well-ventilated bedrooms with direct access to bathrooms and ample wardrobe recesses.",
    },
    {
      title: "Gourmet Kitchen with Utility",
      description: "Ergonomic layout with granite platform, electrical appliance conduits, and dedicated exterior utility zone.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[
              { label: "Configurations", href: "/configurations" },
              { label: "3 BHK Price & Details", href: "/northwind-yamuna-3-bhk" },
            ]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <BedDouble className="w-3.5 h-3.5 text-[#ACC78C]" />
              <span>3 BHK Luxury Residences</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Northwind Yamuna <span className="gold-gradient-text">3 BHK Price &amp; Layout</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore authentic layout blueprints, verified architectural specifications, and request official price sheets for 3 BHK luxury residences in Sector 22D Yamuna Expressway.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FFFCEC]">
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Verified Architecture
              </span>
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Zero Dead Space Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: 3 BHK Specifications & Layout */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Configuration Blueprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Thoughtfully Planned 3 Bedroom Living
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  The 3 BHK residences at Northwind Estate are designed for modern nuclear and growing families seeking privacy, natural daylight, and cross ventilation. Each home is positioned within low-density towers, ensuring minimal common wall sharing and expansive balcony views overlooking lush central greens.
                </p>
              </AnimatedReveal>

              {/* 3 BHK Floor Plan Schematic Visual */}
              <AnimatedReveal direction="up" className="bg-white border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#0D3829]/10 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#0D3829] uppercase tracking-wider block">Schematic Plan</span>
                    <h3 className="font-serif font-bold text-lg text-[#0D3829]">3 BHK Layout Blueprint</h3>
                  </div>
                  <span className="text-xs font-semibold bg-[#0D3829] text-[#FFFCEC] px-3 py-1 rounded-full">
                    Vector Reference
                  </span>
                </div>

                <div className="relative aspect-[16/10] bg-[#F4F1DF] rounded-xl overflow-hidden border border-[#0D3829]/10 flex items-center justify-center p-4">
                  <Image
                    src="/images/floor-plans/3bhk-luxury-floor-plan.svg"
                    alt="Northwind Yamuna 3 BHK Floor Plan Schematic Blueprint"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-[11px] text-[#5E7168] italic text-center">
                  *Illustrative architectural layout. Exact unit carpet area measurements provided in developer cost sheet upon RERA filing.
                </p>
              </AnimatedReveal>

              {/* Verified Specifications Table */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#0D3829]" />
                  <span>3 BHK Architectural Specifications</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {verifiedSpecs.map((spec) => (
                    <div key={spec.label} className="border-b border-[#0D3829]/10 pb-2">
                      <span className="text-[#5E7168] block text-xs">{spec.label}</span>
                      <span className="font-semibold text-[#0D3829] pt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              {/* Room Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roomHighlights.map((room) => (
                  <AnimatedReveal key={room.title} direction="up" className="bg-white border border-[#0D3829]/15 rounded-xl p-5 space-y-2 shadow-xs">
                    <h4 className="font-serif font-bold text-sm text-[#0D3829]">{room.title}</h4>
                    <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{room.description}</p>
                  </AnimatedReveal>
                ))}
              </div>

              {/* Contextual Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/northwind-yamuna-price-list"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Full Price List</span>
                  <span className="text-[11px] text-[#5E7168]">Cost sheet breakdown &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-brochure"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Brochure PDF</span>
                  <span className="text-[11px] text-[#5E7168]">Download details &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-site-visit"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Site Visit</span>
                  <span className="text-[11px] text-[#5E7168]">Book private tour &rarr;</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> 3 BHK Priority Desk
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request 3 BHK Price &amp; Layout
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Submit your query to receive the 3 BHK high-resolution floor plan blueprint, cost breakdown, and site visit cab assistance.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Northwind Yamuna 3 BHK Page"
                  sourcePage="/northwind-yamuna-3-bhk"
                  defaultConfig="3 BHK Luxury Apartment"
                  submitText="Request 3 BHK Details"
                  conversionAction="3bhk_inquiry"
                  showDateField={false}
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Consultation: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 BHK FAQs */}
      <FAQSection faqs={threeBhkFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Explore Other Configurations at Northwind Estate"
        subtitle="Looking for larger executive suites? Compare with our 4 BHK Ultra Estate Residences."
      />
    </>
  );
}
