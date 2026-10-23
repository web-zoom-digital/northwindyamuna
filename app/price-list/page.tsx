import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  CreditCard, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Sparkles, 
  Building2, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Price List & Payment Plans | Northwind Estate Sector 22D",
  description: "Request official price list, payment schedules, and cost sheets for 3 & 4 BHK luxury residences at Northwind Estate Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/price-list`,
  },
  keywords: [
    "northwind estate price list",
    "yamuna expressway 3 bhk price",
    "4 bhk luxury flat cost sector 22d",
    "northwind estate payment plan",
    "cost sheet jewar airport apartments",
    "clp payment plan greater noida"
  ],
  openGraph: {
    title: "Price List & Cost Sheets | Northwind Estate Sector 22D",
    description: "Transparent pricing details and flexible payment plans for 3 & 4 BHK luxury residences on Yamuna Expressway near Jewar Airport.",
    url: `${siteConfig.url}/price-list`,
  },
};

const pricingFaqs: FAQItem[] = [
  {
    question: "How can I obtain the official price list and payment plan for Northwind Estate?",
    answer: "Official unit-level cost sheets, payment schedules, and customized financial breakdowns are shared directly upon submitting an enquiry via the price list form or calling +91 97177 00596."
  },
  {
    question: "What payment plan structures are available for buyers?",
    answer: "Flexible payment options are offered including milestone-linked Construction Linked Plans (CLP), possession-linked plans, and attractive down-payment savings, structured to align with bank loan disbursements."
  },
  {
    question: "Are home loans available from leading national banks?",
    answer: "Yes, major private and public banks (including SBI, HDFC, ICICI, and Axis Bank) provide home loan assistance with competitive interest rates and seamless pre-approval processing for qualified buyers."
  },
  {
    question: "What components are included in the overall cost sheet?",
    answer: "A standard comprehensive cost sheet includes Basic Sale Price (BSP), Preferential Location Charges (PLC if applicable), dedicated covered car parking allocation, Interest-Free Maintenance Security (IFMS), and statutory government charges (GST and stamp duty registration)."
  }
];

export default function PriceListPage() {
  const paymentMilestones = [
    { step: "01", stage: "At the Time of Booking", percentage: "10% of Total Cost" },
    { step: "02", stage: "Within 30 Days of Allotment", percentage: "10% of Total Cost" },
    { step: "03", stage: "On Completion of Raft & Foundation", percentage: "10% of Total Cost" },
    { step: "04", stage: "On Completion of Podium Slab", percentage: "10% of Total Cost" },
    { step: "05", stage: "On Completion of Super Structure Floors", percentage: "35% (Milestone-based)" },
    { step: "06", stage: "On Completion of Internal Finishing & MEP", percentage: "20% of Total Cost" },
    { step: "07", stage: "On Notice of Possession", percentage: "5% + Other Statutory Dues" },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Price List & Payment Plans", href: "/price-list" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Transparent Pricing &amp; Payment Schedules</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Price List &amp; <span className="gold-gradient-text">Payment Plans</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore transparent pricing structures, milestone payment schedules, and cost sheet breakdowns for 3 &amp; 4 BHK luxury residences at Northwind Estate, Sector 22D Yamuna Expressway.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Lead Form Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Pricing Guide */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  Financial Transparency
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  Structured Payment Options Designed for Homebuyers
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  Investing in a home at Northwind Estate is engineered to be transparent and financially flexible. With construction linked milestone options, buyers can disburse payments in sync with physical on-ground building progress, ensuring complete financial security.
                </p>
              </AnimatedReveal>

              {/* Indicative Configuration Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#0D3829] uppercase bg-[#0D3829]/10 px-2 py-0.5 rounded">3 BHK Luxury</span>
                    <span className="text-xs font-semibold text-[#0D3829]">Coming Soon</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0D3829]">3 BHK Luxury Residences</h3>
                  <p className="text-xs text-[#2D3C25] font-light">3 Bedrooms, 3 Bathrooms, Large Balconies, Vitrified Tile Finishes.</p>
                  <p className="text-sm font-bold text-[#0D3829] pt-1">Price on Request</p>
                </AnimatedReveal>

                <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[#0D3829] uppercase bg-[#0D3829]/10 px-2 py-0.5 rounded">4 BHK Ultra</span>
                    <span className="text-xs font-semibold text-[#0D3829]">Coming Soon</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0D3829]">4 BHK Ultra Estate Residences</h3>
                  <p className="text-xs text-[#2D3C25] font-light">4 En-suite Bedrooms, Double-Height Balconies, Servant Quarters.</p>
                  <p className="text-sm font-bold text-[#0D3829] pt-1">Price on Request</p>
                </AnimatedReveal>
              </div>

              {/* Typical Construction-Linked Milestone Schedule */}
              <AnimatedReveal direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-5">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#0D3829]" />
                  <span>Construction Linked Payment Plan (CLP) Overview</span>
                </h3>
                <div className="space-y-3">
                  {paymentMilestones.map((m) => (
                    <div key={m.step} className="bg-white p-3.5 rounded-xl border border-[#0D3829]/10 flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0D3829] text-[#ACC78C] font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {m.step}
                        </span>
                        <span className="font-medium text-[#0D3829]">{m.stage}</span>
                      </div>
                      <span className="font-bold text-[#0D3829] bg-[#0D3829]/10 px-2.5 py-1 rounded-md text-xs">
                        {m.percentage}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#5E7168] italic pt-1 text-center">
                  *Standard indicative payment milestone schedule. Actual schedule outlined in developer builder-buyer agreement.
                </p>
              </AnimatedReveal>

            </div>

            {/* Right Column: Lead Form Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Instant Price Sheet PDF
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Request Official Cost Sheet
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Receive complete unit cost breakdown, payment schedules, and bank pre-approval assistance via WhatsApp and Email.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Price List Page Form"
                  sourcePage="/price-list"
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Direct Finance Desk: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FAQSection faqs={pricingFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Schedule a Site Visit Before Finalizing Your Unit"
        subtitle="Experience the tower positioning, sun angles, and lush green master plan in Sector 22D."
      />
    </>
  );
}
