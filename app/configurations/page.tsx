import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, BedDouble, Layers, CheckCircle2, ShieldCheck, Phone } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "3 & 4 BHK Luxury Configurations | Northwind Estate",
  description: "Explore spacious 3 & 4 BHK luxury residences and master layout plans at Northwind Estate, Sector 22D Yamuna Expressway near Jewar Airport.",
  alternates: {
    canonical: `${siteConfig.url}/configurations`,
  },
  openGraph: {
    title: "Residential Configurations | Northwind Estate Sector 22D",
    description: "Discover luxury 3 BHK and 4 BHK residential apartments on Yamuna Expressway featuring panoramic balconies and modern layouts.",
    url: `${siteConfig.url}/configurations`,
  },
};

export default function ConfigurationsPage() {
  const configs = [
    {
      title: "3 BHK Luxury Apartment",
      tagline: "Contemporary family living with generous proportions",
      href: "/configurations/3-bhk-luxury-apartment",
      image: "/images/configurations/3-bhk-luxury-apartment-hero.jpg",
      specs: [
        "3 Spacious Bedrooms + Grand Living & Dining",
        "Large Outdoor Sit-Out Balconies",
        "Master Bedroom with En-Suite Dressing Zone",
        "Vitrified Flooring & UPVC Toughened Balcony Glazing"
      ],
      price: "Price on Request",
      badge: "Popular Family Choice"
    },
    {
      title: "4 BHK Ultra Estate Residence",
      tagline: "Opulent executive penthouses for multi-generational families",
      href: "/configurations/4-bhk-ultra-estate-residence",
      image: "/images/configurations/4-bhk-ultra-estate-residence-hero.jpg",
      specs: [
        "4 Grand En-Suite Bedrooms with Private Bathrooms",
        "Double-Height Living Salon & Sunset Balconies",
        "Dedicated Servant / Utility Quarters",
        "Premium Italian-Style Vitrified Finishes"
      ],
      price: "Price on Request",
      badge: "Flagship Luxury"
    },
    {
      title: "Site & Master Layout Plan",
      tagline: "Low-density residential enclave with over 70% open green landscapes",
      href: "/configurations/site-master-layout-plan",
      image: "/images/configurations/3-bhk-gallery-living-room.jpg",
      specs: [
        "Centrally Positioned Resort Clubhouse & Lap Pool",
        "Wide 12M Peripheral Road Circulation",
        "Vehicle-Free Pedestrian Decks for Seniors & Kids",
        "Botanical Zen Lawns & Reflexology Tracks"
      ],
      price: "Township Master Plan",
      badge: "Architectural Master Plan"
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative pt-28 sm:pt-32 pb-16 bg-[#0D3829] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumb
            items={[{ label: "Configurations", href: "/configurations" }]}
            variant="dark"
          />

          <div className="max-w-3xl space-y-4 text-center sm:text-left mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B] border border-[#ACC78C]/40 text-xs font-semibold text-[#ACC78C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Configurations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#FFFCEC] leading-tight">
              Luxury Residences &amp; Master Layouts
            </h1>

            <p className="text-sm sm:text-base text-[#ACC78C]/90 font-light leading-relaxed">
              Explore thoughtfully planned 3 &amp; 4 BHK residences and master township layouts engineered for natural cross ventilation, privacy, and expansive green views in Sector 22D Yamuna Expressway.
            </p>
          </div>
        </div>
      </section>

      {/* Configurations Cards Grid */}
      <section className="py-16 sm:py-20 bg-[#FFFCEC] text-[#0D3829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {configs.map((item, idx) => (
              <AnimatedReveal key={item.title} direction="up" delay={idx * 0.1}>
                <div className="bg-[#F4F1DF] border border-[#0D3829]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover-card-lift">
                  <div>
                    {/* Visual Image */}
                    <div className="relative aspect-[16/10] bg-[#0D3829] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-3 left-3 bg-[#0D3829]/95 text-[#FFFCEC] border border-[#ACC78C]/40 text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h2 className="font-serif font-bold text-xl text-[#0D3829] group-hover:text-[#1E3A2B] transition">
                          {item.title}
                        </h2>
                        <p className="text-xs text-[#5E7168] font-light pt-1">
                          {item.tagline}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#0D3829]/10">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-[#2D3C25] font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D3829] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0">
                    <Link
                      href={item.href}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0D3829] hover:bg-[#1E3A2B] text-[#FFFCEC] border border-[#ACC78C]/30 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-xs group-hover:shadow-md"
                    >
                      <span>Explore Layout &amp; Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ACC78C] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection
        title="Need Help Selecting the Right Configuration?"
        subtitle="Consult with our dedicated property advisors to compare floor plans, pricing sheets, and site orientations."
      />
    </>
  );
}
