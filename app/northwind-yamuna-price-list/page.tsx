import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  CreditCard, 
  FileText, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Info, 
  Download 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Northwind Yamuna Price List | Request Latest Prices",
  description:
    "Request the latest verified Northwind Yamuna price list, explore available configurations and enquire about current pricing and availability.",
  alternates: {
    canonical: `${siteConfig.url}/northwind-yamuna-price-list`,
  },
  keywords: [
    "Northwind Yamuna price list",
    "Northwind Yamuna apartment price",
    "Northwind Yamuna 3 BHK price",
    "Northwind Yamuna payment plan",
    "Northwind Yamuna price and availability",
    "Sector 22D Yamuna Expressway flat price"
  ],
  openGraph: {
    title: "Northwind Yamuna Price List | Request Latest Prices",
    description:
      "Request verified pricing, cost breakdowns, and construction-linked payment schedules for Northwind Yamuna in Sector 22D.",
    url: `${siteConfig.url}/northwind-yamuna-price-list`,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Northwind Yamuna Price List and Configurations",
      },
    ],
  },
};

const priceFaqs: FAQItem[] = [
  {
    question: "Why is exact unit pricing listed as 'Price on Request'?",
    answer:
      "In accordance with developer policies and dynamic unit inventory management, exact prices vary based on floor rise, view orientation (park facing vs expressway facing), and promotional payment options. Submitting an enquiry connects you directly with the official sales team for verified price quotes.",
  },
  {
    question: "What components are included in the overall cost sheet?",
    answer:
      "A complete verified cost sheet comprises the Basic Sale Price (BSP), Preferential Location Charges (PLC, if applicable), covered car parking charges, Club Membership fees, and Interest-Free Maintenance Security (IFMS). Government statutory dues such as GST and stamp duty registration are payable as per state norms.",
  },
  {
    question: "What payment plans are offered for Northwind Yamuna?",
    answer:
      "Flexible milestone-based payment schedules are supported, primarily Construction-Linked Payment Plans (CLP) aligned with structural construction milestones, as well as possession-linked options.",
  },
  {
    question: "Are home loans available from nationalized and private banks?",
    answer:
      "Yes, leading banks including SBI, HDFC, ICICI, and Axis Bank provide home financing assistance, loan pre-approvals, and attractive interest rates for qualified applicants.",
  },
];

export default function NorthwindYamunaPriceListPage() {
  const verifiedConfigurations = [
    {
      type: "3 BHK Luxury Apartment",
      carpetArea: "Detailed in Developer Brochure",
      typicalLayout: "3 Bedrooms, Living & Dining, Kitchen, Utility Balcony, 3 Baths",
      pricingStatus: "Price on Request",
      bookingAmount: "₹5 Lacs (Indicative)",
      href: "/northwind-yamuna-3-bhk",
    },
    {
      type: "4 BHK Ultra Estate Residence",
      carpetArea: "Detailed in Developer Brochure",
      typicalLayout: "4 En-suite Bedrooms, Double-Height Balconies, Servant Room",
      pricingStatus: "Price on Request",
      bookingAmount: "₹10 Lacs (Indicative)",
      href: "/configurations/4-bhk-ultra-estate-residence",
    },
  ];

  const clpMilestones = [
    { stage: "Booking Amount", milestone: "At time of application", allocation: "10% of BSP" },
    { stage: "Allotment Confirmation", milestone: "Within 30 days of booking", allocation: "10% of BSP" },
    { stage: "Ground Breaking & Raft", milestone: "Completion of Raft Foundation", allocation: "10% of BSP" },
    { stage: "Podium & Basement Slab", milestone: "Completion of Podium Floor", allocation: "10% of BSP" },
    { stage: "Super Structure Slabs", milestone: "Floor-by-floor construction", allocation: "35% (Tiered)" },
    { stage: "Finishing & MEP", milestone: "Brickwork, plaster & plumbing", allocation: "20% of BSP" },
    { stage: "Offer of Possession", milestone: "Final inspection & handover", allocation: "5% + Statutory Dues" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Price List & Plans", href: "/northwind-yamuna-price-list" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Official Cost Sheets &amp; Verified Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Northwind Yamuna <span className="gold-gradient-text">Price List</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Request the latest verified cost sheets, floor-wise pricing, and milestone-linked payment structures for 3 &amp; 4 BHK residences at Sector 22D, Yamuna Expressway.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FFFCEC]">
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#ACC78C]" /> Updated: October 2026
              </span>
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ACC78C]" /> Verified Developer Quote
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Pricing Tables & Explanations */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Configuration Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Verified Pricing &amp; Apartment Configurations
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Northwind Estate in Sector 22D Yamuna Expressway offers low-density living with a limited number of units per floor. All pricing is communicated transparently without hidden surprises.
                </p>
              </AnimatedReveal>

              {/* Verified Pricing Cards */}
              <div className="space-y-4">
                {verifiedConfigurations.map((item) => (
                  <AnimatedReveal key={item.type} direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 space-y-4 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0D3829]/10 pb-3">
                      <div>
                        <h3 className="font-serif font-bold text-lg text-[#0D3829]">{item.type}</h3>
                        <p className="text-xs text-[#5E7168] font-light">{item.typicalLayout}</p>
                      </div>
                      <span className="text-sm font-bold text-[#0D3829] bg-[#0D3829]/10 px-3 py-1 rounded-md">
                        {item.pricingStatus}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#5E7168] block">Area Dimension:</span>
                        <span className="font-medium text-[#0D3829]">{item.carpetArea}</span>
                      </div>
                      <div>
                        <span className="text-[#5E7168] block">Indicative Booking Token:</span>
                        <span className="font-medium text-[#0D3829]">{item.bookingAmount}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <Link href={item.href} className="font-bold text-[#0D3829] hover:underline flex items-center gap-1">
                        <span>View Layout Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-[#5E7168] italic">*Exact cost sheet on request</span>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>

              {/* Price Breakup Explanation */}
              <AnimatedReveal direction="up" className="bg-white border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <Info className="w-5 h-5 text-[#0D3829]" />
                  <span>Understanding Your Real Estate Cost Breakup</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  <div className="border-b border-[#0D3829]/10 pb-2.5">
                    <strong className="text-[#0D3829] block font-semibold">1. Basic Sale Price (BSP):</strong>
                    Covers the primary residential super-built/carpet structure and standard developer architectural specifications.
                  </div>
                  <div className="border-b border-[#0D3829]/10 pb-2.5">
                    <strong className="text-[#0D3829] block font-semibold">2. Preferential Location Charges (PLC):</strong>
                    Applies selectively to units offering corner orientations, central garden views, or higher floor positions.
                  </div>
                  <div className="border-b border-[#0D3829]/10 pb-2.5">
                    <strong className="text-[#0D3829] block font-semibold">3. Additional Society Amenities:</strong>
                    Includes dedicated covered parking allocation, club membership rights, and one-time IFMS security.
                  </div>
                  <div>
                    <strong className="text-[#0D3829] block font-semibold">4. Statutory Government Dues:</strong>
                    GST (applicable under government norms) and stamp duty registration payable at the time of legal conveyance.
                  </div>
                </div>
              </AnimatedReveal>

              {/* Construction-Linked Milestone Table */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0D3829]" />
                  <span>Construction-Linked Payment Schedule (Indicative)</span>
                </h3>
                <div className="space-y-2.5">
                  {clpMilestones.map((m, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-[#0D3829]/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1.5">
                      <div>
                        <span className="font-bold text-[#0D3829] block">{m.stage}</span>
                        <span className="text-[#5E7168] text-[11px]">{m.milestone}</span>
                      </div>
                      <span className="font-semibold text-[#0D3829] bg-[#0D3829]/10 px-2.5 py-1 rounded text-right self-start sm:self-auto">
                        {m.allocation}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              {/* Related Links Hub */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/northwind-yamuna-3-bhk"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">3 BHK Pricing</span>
                  <span className="text-[11px] text-[#5E7168]">Dedicated layouts &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-site-visit"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Site Visit</span>
                  <span className="text-[11px] text-[#5E7168]">Schedule consultation &rarr;</span>
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

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant Price Sheet Request
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request Verified Price List
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Submit your preferences below to receive the latest unit availability and official cost breakdown directly via WhatsApp.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Northwind Yamuna Price List Page"
                  sourcePage="/northwind-yamuna-price-list"
                  submitText="Request Latest Price List"
                  conversionAction="price_list_request"
                  showDateField={false}
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Pricing Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQSection faqs={priceFaqs} />

      {/* CTA Banner */}
      <CTASection
        title="Schedule an On-Site Consultation Before Booking"
        subtitle="Experience the low-density layouts, wide 60m sector roads, and sun orientations at Sector 22D."
      />
    </>
  );
}
