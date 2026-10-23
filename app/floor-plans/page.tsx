import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Layers, 
  Maximize2, 
  Download, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  BedDouble, 
  Phone 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Floor Plans & Architectural Blueprints | Northwind Estate",
  description: "Download official 3 & 4 BHK floor plans, layout drawings, and site master plans for Northwind Estate Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/floor-plans`,
  },
  keywords: [
    "northwind estate floor plans",
    "3 bhk floor plan yamuna expressway",
    "4 bhk layout blueprint sector 22d",
    "master plan pdf download yamuna expressway",
    "architectural floor layout greater noida"
  ],
  openGraph: {
    title: "Floor Plans & Layout Blueprints | Northwind Estate",
    description: "Explore spacious 3 & 4 BHK apartment blueprints and master township layout plans on Yamuna Expressway near Jewar Airport.",
    url: `${siteConfig.url}/floor-plans`,
  },
};

const floorPlanFaqs: FAQItem[] = [
  {
    question: "Can I download high-resolution vector floor plans for 3 & 4 BHK residences?",
    answer: "Yes, complete high-resolution PDF brochures containing 3 BHK, 4 BHK, and township master layout blueprints are sent instantly via WhatsApp and Email upon submitting the layout request form."
  },
  {
    question: "Are the floor plans designed according to foundational Vastu guidelines?",
    answer: "Yes, all apartments are planned with Vastu Shastra considerations, featuring morning sun orientations, well-placed kitchen zones in southeast areas, and peaceful master bedroom suites in southwest corners."
  },
  {
    question: "What is the balcony dimension and view orientation?",
    answer: "Balconies are planned as expansive outdoor living spaces with wide sit-outs, fitted with toughened safety glass railings overlooking the central landscaped water promenades and botanical gardens."
  }
];

export default function FloorPlansHubPage() {
  const layouts = [
    {
      title: "3 BHK Luxury Apartment Blueprint",
      subtitle: "3 Bedrooms + Grand Living + Dining + Expansive Balconies",
      image: "/images/floor-plans/3bhk-luxury-floor-plan.svg",
      href: "/configurations/3-bhk-luxury-apartment",
      highlights: [
        "Master Bedroom with en-suite bath & private morning sun balcony",
        "Large living room flowing into outdoor sit-out deck",
        "Modern gourmet kitchen with dedicated utility balcony",
        "Dual-aspect cross ventilation across all living spaces"
      ]
    },
    {
      title: "4 BHK Ultra Estate Residence Blueprint",
      subtitle: "4 En-suite Bedrooms + Double-Height Balconies + Servant Quarters",
      image: "/images/floor-plans/4bhk-estate-floor-plan.svg",
      href: "/configurations/4-bhk-ultra-estate-residence",
      highlights: [
        "Palatial formal living salon & family dining lounge",
        "4 spacious ensuite bedrooms with private bathrooms",
        "Double-height wrap-around balcony with panoramic garden views",
        "Separate servant / domestic utility quarters with service entrance"
      ]
    },
    {
      title: "Site & Master Layout Plan Blueprint",
      subtitle: "Low-Density Residential Enclave with Over 70% Open Greens",
      image: "/images/floor-plans/master-site-plan.svg",
      href: "/configurations/site-master-layout-plan",
      highlights: [
        "Centrally located clubhouse pavilion and temperature-regulated pool",
        "Wide 12-meter peripheral vehicular ring road",
        "Pedestrian-only ground level ensuring safety for children & seniors",
        "Botanical parklands, Zen gardens & reflexology tracks"
      ]
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Floor Plans", href: "/floor-plans" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Blueprints &amp; Schematics</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Floor Plans &amp; <span className="gold-gradient-text">Layout Blueprints</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Examine detailed unit layouts, room dimensions, and master site schematics for Northwind Estate in Sector 22D Yamuna Expressway. Designed with zero dead space and natural cross-ventilation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Floor Plan Cards */}
            <div className="lg:col-span-7 space-y-10">
              {layouts.map((item, idx) => (
                <AnimatedReveal key={item.title} direction="up" delay={idx * 0.1}>
                  <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs hover-card-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0D3829]/10 pb-4">
                      <div>
                        <h2 className="font-serif font-bold text-xl text-[#0D3829]">{item.title}</h2>
                        <p className="text-xs text-[#5E7168] font-light pt-0.5">{item.subtitle}</p>
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D3829] hover:underline whitespace-nowrap"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Blueprint Visual Preview */}
                    <div className="relative aspect-[16/10] bg-white rounded-xl overflow-hidden border border-[#0D3829]/10 p-4 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {item.highlights.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-[#2D3C25] font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Download className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant High-Res PDF
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Download Floor Plan Booklet
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Get the complete vector PDF brochure including carpet area measurements, electrical conduits, and site layout plans.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Floor Plans Hub Page Form"
                  sourcePage="/floor-plans"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Floor Plan Enquiry Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floor Plans FAQs */}
      <FAQSection faqs={floorPlanFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Walk Through These Layouts in Person"
        subtitle="Book a site visit with complimentary VIP cab pickup to experience the spacious dimensions."
      />
    </>
  );
}
