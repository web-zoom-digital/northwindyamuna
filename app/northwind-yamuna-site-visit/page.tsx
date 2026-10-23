import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Navigation 
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Northwind Yamuna Site Visit | Request a Visit",
  description:
    "Request a Northwind Yamuna project visit. Share your preferred date and configuration to enquire about location, availability and visit arrangements.",
  alternates: {
    canonical: `${siteConfig.url}/northwind-yamuna-site-visit`,
  },
  keywords: [
    "Northwind Yamuna site visit",
    "Northwind Yamuna site visit booking",
    "Northwind Yamuna location",
    "Northwind Yamuna project visit",
    "Northwind Yamuna contact",
    "Sector 22D site visit Yamuna Expressway"
  ],
  openGraph: {
    title: "Northwind Yamuna Site Visit | Request a Visit",
    description:
      "Request a project site visit at Sector 22D Yamuna Expressway. Explore tower locations, green landscaping, and infrastructure connectivity.",
    url: `${siteConfig.url}/northwind-yamuna-site-visit`,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Northwind Yamuna Site Visit Experience",
      },
    ],
  },
};

const visitFaqs: FAQItem[] = [
  {
    question: "What happens after I submit a site visit request?",
    answer:
      "Our senior property relationship executive will call you within 15–30 minutes to verify your preferred date and time, confirm travel logistics, and share directions to the site sales office.",
  },
  {
    question: "Is the site visit confirmed immediately upon form submission?",
    answer:
      "Submitting the form captures your preferred appointment request. Our sales desk reviews on-ground availability and confirms your designated advisor slot over phone or WhatsApp.",
  },
  {
    question: "Are site visit cab arrangements provided?",
    answer:
      "Yes, complimentary VIP cab pickup and drop service can be coordinated across Delhi, Noida, Greater Noida, and Gurugram for prospective homebuyers upon prior appointment confirmation.",
  },
  {
    question: "What are the site sales lounge operational hours?",
    answer:
      "The on-site sales lounge is operational 7 days a week from 9:00 AM to 8:00 PM. Weekend visits are encouraged with prior booking for personalized consultations.",
  },
];

export default function NorthwindYamunaSiteVisitPage() {
  const visitExperiencePoints = [
    {
      title: "Guided Master Plan Walkthrough",
      desc: "Review high-resolution architectural layout models, tower orientation, cross-breeze conduits, and sun path analysis.",
      icon: Compass,
    },
    {
      title: "Micro-Market Connectivity Tour",
      desc: "Inspect Sector 22D 60-meter arterial roads and direct highway proximity to upcoming Jewar International Airport.",
      icon: Navigation,
    },
    {
      title: "Transparent Cost & Layout Review",
      desc: "Discuss unit availability, floor-rise options, payment plans, and official bank loan pre-approvals face-to-face.",
      icon: CheckCircle2,
    },
    {
      title: "Complimentary Travel Coordination",
      desc: "Hassle-free VIP cab pickup arranged from your home or office across Delhi NCR with professional chauffeurs.",
      icon: Car,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Site Visit Request", href: "/northwind-yamuna-site-visit" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Calendar className="w-3.5 h-3.5 text-[#ACC78C]" />
              <span>Project Experience &amp; Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Northwind Yamuna <span className="gold-gradient-text">Site Visit</span>
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Experience the low-density master plan, central parkland courtyards, and strategic connectivity of Sector 22D firsthand. Request your private site tour today.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#FFFCEC]">
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ACC78C]" /> 9:00 AM – 8:00 PM (All 7 Days)
              </span>
              <span className="bg-[#1E3A2B] px-3 py-1.5 rounded-lg border border-[#ACC78C]/30 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" /> Sector 22D, Yamuna Expressway
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Visit Form */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: What to Expect & Location Details */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedReveal direction="up" className="space-y-4">
                <span className="text-xs font-semibold tracking-wider text-[#0D3829] uppercase block">
                  On-Site Experience
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D3829]">
                  What to Expect During Your Project Site Visit
                </h2>
                <p className="text-sm text-[#2D3C25] font-light leading-relaxed">
                  A site visit is the most reliable way to evaluate real estate quality. At Northwind Estate, our dedicated relationship managers provide factual, zero-pressure guidance to help you assess whether this community aligns with your family&apos;s lifestyle and financial goals.
                </p>
              </AnimatedReveal>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visitExperiencePoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <AnimatedReveal key={point.title} direction="up" className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-xl p-5 space-y-2.5 shadow-xs">
                      <div className="w-9 h-9 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#ACC78C]" />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-[#0D3829]">{point.title}</h3>
                      <p className="text-xs text-[#2D3C25] font-light leading-relaxed">{point.desc}</p>
                    </AnimatedReveal>
                  );
                })}
              </div>

              {/* Location Directions Card */}
              <AnimatedReveal direction="up" className="bg-white border border-[#0D3829]/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-serif font-bold text-lg text-[#0D3829] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0D3829]" />
                  <span>Site Office Address &amp; Travel Directions</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#2D3C25] font-light leading-relaxed">
                  <p>
                    <strong className="text-[#0D3829] font-semibold">Location Address:</strong> Sector 22D, Yamuna Expressway Industrial Development Area, Greater Noida, Uttar Pradesh 203201.
                  </p>
                  <p>
                    <strong className="text-[#0D3829] font-semibold">Driving Route from Delhi / Noida:</strong> Take the Noida-Greater Noida Expressway to Pari Chowk, then enter the Yamuna Expressway and continue south toward Sector 22D (approx. 20 minutes from Pari Chowk).
                  </p>
                  <p>
                    <strong className="text-[#0D3829] font-semibold">Public Transit Note:</strong> Nearest operating metro terminal is Greater Noida Knowledge Park II / Depot Station. Feeder cab service is available upon booking.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                  <a
                    href="https://maps.google.com/?q=Sector+22D+Yamuna+Expressway+Greater+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0D3829] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-1.5 text-[#0D3829] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Site Sales Office</span>
                  </a>
                </div>
              </AnimatedReveal>

              {/* Related Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/northwind-yamuna-price-list"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Price List</span>
                  <span className="text-[11px] text-[#5E7168]">Cost sheets &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-3-bhk"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">3 BHK Layout</span>
                  <span className="text-[11px] text-[#5E7168]">Floor plans &rarr;</span>
                </Link>
                <Link
                  href="/northwind-yamuna-brochure"
                  className="bg-white p-4 rounded-xl border border-[#0D3829]/15 hover:border-[#0D3829] transition text-center space-y-1"
                >
                  <span className="text-xs font-bold text-[#0D3829] block">Project Brochure</span>
                  <span className="text-[11px] text-[#5E7168]">Download PDF &rarr;</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Site Visit Request Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F4F1DF] border border-[#0D3829]/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="space-y-2 border-b border-[#0D3829]/15 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3829] text-xs font-semibold text-[#FFFCEC]">
                    <Sparkles className="w-3.5 h-3.5 text-[#ACC78C]" /> Appointment Request
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D3829]">
                    Book a Project Site Visit
                  </h3>
                  <p className="text-xs text-[#5E7168] font-light leading-relaxed">
                    Select your preferred visit date and configuration. Our team will contact you to confirm time slot and arrange cab assistance if needed.
                  </p>
                </div>

                <LeadForm
                  sourceCTA="Northwind Yamuna Site Visit Page"
                  sourcePage="/northwind-yamuna-site-visit"
                  submitText="Request Site Visit"
                  conversionAction="site_visit_request"
                  showDateField={true}
                  dateRequired={true}
                />

                <div className="pt-4 border-t border-[#0D3829]/10 text-center text-xs text-[#5E7168]">
                  <p className="flex items-center justify-center gap-1.5 text-[#0D3829] font-bold">
                    <Phone className="w-3.5 h-3.5 text-[#0D3829]" /> Dedicated Helpline: +91 97177 00596
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visit FAQs */}
      <FAQSection faqs={visitFaqs} />

      {/* Global CTA */}
      <CTASection
        title="Can&apos;t Visit This Week? Request Digital Brochures"
        subtitle="Get instant access to digital floor plan PDFs, pricing sheets, and construction video updates."
      />
    </>
  );
}
