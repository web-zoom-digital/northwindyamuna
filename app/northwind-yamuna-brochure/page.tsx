import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Compass, 
  MapPin 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Northwind Yamuna Brochure PDF | Request Brochure",
  description:
    "Explore the Northwind Yamuna project brochure, available floor plans and verified project details. Request the latest brochure or download it if available.",
  alternates: {
    canonical: `${siteConfig.url}/northwind-yamuna-brochure`,
  },
  keywords: [
    "Northwind Yamuna brochure download",
    "Northwind Yamuna brochure PDF",
    "Northwind Yamuna project details",
    "Northwind Yamuna floor plan brochure",
    "Northwind Estate Sector 22D brochure"
  ],
  openGraph: {
    title: "Northwind Yamuna Brochure PDF | Request Brochure",
    description:
      "Download and inspect the official Northwind Yamuna layout brochure, master plans, specifications, and connectivity guide for Sector 22D.",
    url: `${siteConfig.url}/northwind-yamuna-brochure`,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Northwind Yamuna Brochure Download Preview",
      },
    ],
  },
};

const brochureFaqs: FAQItem[] = [
  {
    question: "How will I receive the Northwind Yamuna brochure after submitting my request?",
    answer:
      "Upon submitting your details, our property desk sends the high-resolution vector PDF brochure directly to your registered WhatsApp number and Email within minutes.",
  },
  {
    question: "What information is included in the official project brochure?",
    answer:
      "The brochure features comprehensive master site layout blueprints, 3 & 4 BHK unit architectural plans, construction materials specifications, resort amenity highlights, and the Sector 22D connectivity matrix.",
  },
  {
    question: "Is there any fee or charge for downloading the brochure?",
    answer:
      "No, the digital project brochure, unit cost sheets, and site visit assistance are provided completely complimentary to prospective homebuyers and investors.",
  },
  {
    question: "Can I also request physical printed brochures during a site visit?",
    answer:
      "Yes, luxury printed copies of the master brochure and sample finishes are presented to visitors at our Sector 22D site sales lounge.",
  },
];

export default function NorthwindYamunaBrochurePage() {
  const brochureContents = [
    {
      title: "Master Site Plan & Landscape Zonation",
      desc: "Detailed aerial schematics illustrating tower spacing, 70%+ botanical greens, and vehicle-free pedestrian walkways.",
      icon: Compass,
    },
    {
      title: "3 & 4 BHK Architectural Blueprints",
      desc: "Room-by-room floor plans with carpet area guidelines, balcony dimensions, and cross-ventilation orientation.",
      icon: Layers,
    },
    {
      title: "Construction & Finishing Specifications",
      desc: "Comprehensive schedule of vitrified tiles, UPVC glazed joinery, anti-skid balcony tiling, and sanitary fittings.",
      icon: ShieldCheck,
    },
    {
      title: "Sector 22D Connectivity & Landmark Map",
      desc: "Detailed driving route map showing proximity to upcoming Jewar International Airport, Film City, and Metro corridors.",
      icon: MapPin,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Project Brochure", href: "/northwind-yamuna-brochure" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Download className="w-3.5 h-3.5 text-[#ACC78C]" />
              <span>Official Digital Project Kit</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Northwind Yamuna <span className="gold-gradient-text">Brochure PDF</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore the complete project brochure for Northwind Yamuna. Learn about the low-density master plan, verified floor layouts, and construction specifications for Sector 22D.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FFFCEC]">
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#ACC78C]" /> High-Resolution PDF Format
              </span>
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant WhatsApp &amp; Email Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Brochure Request Form */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Brochure Content Highlights & Visual Preview */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Digital Information Kit
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  What You&apos;ll Discover in the Northwind Yamuna Brochure
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Our comprehensive project brochure provides verified architectural perspectives, master site zonations, and technical details to help you make an informed property investment decision.
                </p>
              </AnimatedReveal>

              {/* Brochure Preview Visual Card */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#0D3829]/10 pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#0D3829]" />
                    <h3 className="font-serif font-bold text-base text-[#0D3829]">Brochure Document Preview</h3>
                  </div>
                  <span className="text-xs font-semibold bg-[#0D3829] text-[#FFFCEC] px-2.5 py-0.5 rounded">
                    Official Brochure
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden border border-[#0D3829]/10 p-3 flex items-center justify-center">
                    <Image
                      src="/images/floor-plans/master-site-plan.svg"
                      alt="Northwind Yamuna Master Plan Brochure Page Preview"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden border border-[#0D3829]/10 p-3 flex items-center justify-center">
                    <Image
                      src="/images/floor-plans/3bhk-luxury-floor-plan.svg"
                      alt="Northwind Yamuna 3 BHK Floor Plan Brochure Page Preview"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-[#5E7168] italic text-center">
                  *Preview snapshots from the official project portfolio. Full high-resolution booklet delivered upon enquiry.
                </p>
              </AnimatedReveal>

              {/* 4 Feature Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brochureContents.map((point) => {
                  const Icon = point.icon;
                  return (
                    <AnimatedReveal key={point.title} direction="up" className="bg-white border border-[#0D3829]/15 rounded-xl p-5 space-y-2 shadow-xs">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#ACC78C]" />
                      </div>
                      <h4 className="font-serif font-bold text-sm text-[#0D3829]">{point.title}</h4>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{point.desc}</p>
                    </AnimatedReveal>
                  );
                })}
              </div>

              {/* Contextual Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/northwind-yamuna-price-list"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Price List</span>
                  <span className="text-[11px] text-[#5E7168]">Cost sheet breakdown &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-3-bhk"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">3 BHK Details</span>
                  <span className="text-[11px] text-[#5E7168]">Floor plan specs &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-site-visit"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Book Site Visit</span>
                  <span className="text-[11px] text-[#5E7168]">Experience on-site &rarr;</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Brochure Lead Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant Brochure Download
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request Project Brochure PDF
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Provide your contact details below to receive the complete digital brochure, floor plans, and price sheets directly via WhatsApp and Email.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Northwind Yamuna Brochure Page"
                  sourcePage="/northwind-yamuna-brochure"
                  submitText="Request Brochure PDF"
                  conversionAction="brochure_request"
                  showDateField={false}
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Dedicated Brochure Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brochure FAQs */}
      <FAQSection faqs={brochureFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Ready to See the Physical Model?"
        subtitle="Book a site visit with complimentary VIP cab pickup to inspect sample layouts in person."
      />
    </>
  );
}
