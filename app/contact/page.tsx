import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact Us & Schedule Site Visit | Northwind Estate",
  description:
    "Schedule a site visit or request pricing and floor plan brochures for Northwind Estate, Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <>
      {/* Compact Hero & Contact Form Section */}
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#0D3829] text-[#FFFCEC] subtle-grid">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/extracted/Banner.jpg"
            alt="Northwind Estate Official Banner"
            fill
            priority
            className="object-cover opacity-25 filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/85 to-[#0D3829]/95" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-6">
          <Breadcrumb items={[{ label: "Contact Us", href: "/contact" }]} variant="dark" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Compact Overview & Quick Actions */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ACC78C]/20 border border-[#ACC78C]/30 text-xs font-semibold text-[#ACC78C]">
                <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" /> Sector 22D, Yamuna Expressway
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-tight">
                Schedule Site Visit &amp; <span className="gold-gradient-text">Enquire Now</span>
              </h1>

              <p className="text-xs sm:text-sm text-[#ACC78C]/90 font-light leading-relaxed max-w-xl">
                Connect with our dedicated property advisory desk for verified price sheets, floor plan brochures, and complimentary site visit cab pickup.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition flex items-center gap-2 cursor-pointer border border-[#ACC78C]"
                >
                  <Phone className="w-4 h-4 text-[#0D3829]" />
                  <span>Call +91 97177 00596</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#1E3A2B]/80 border border-[#ACC78C]/20 p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ACC78C]">
                    <Clock className="w-3.5 h-3.5" /> Working Hours
                  </div>
                  <p className="text-[11px] text-[#FFFCEC]/80 font-light">
                    9:00 AM – 8:00 PM (7 Days Open)
                  </p>
                </div>

                <div className="bg-[#1E3A2B]/80 border border-[#ACC78C]/20 p-3.5 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ACC78C]">
                    <Building2 className="w-3.5 h-3.5" /> Location
                  </div>
                  <p className="text-[11px] text-[#FFFCEC]/80 font-light">
                    Sector 22D, Yamuna Expressway
                  </p>
                </div>
              </div>

              {/* Verified Trust Chips */}
              <div className="flex flex-wrap gap-2 text-[11px] text-[#ACC78C]/90 pt-1">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1E3A2B]/60 border border-[#ACC78C]/15">
                  <CheckCircle2 className="w-3 h-3 text-[#ACC78C]" /> Free Cab Pickup
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1E3A2B]/60 border border-[#ACC78C]/15">
                  <CheckCircle2 className="w-3 h-3 text-[#ACC78C]" /> Verified Price Sheets
                </span>
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1E3A2B]/60 border border-[#ACC78C]/15">
                  <CheckCircle2 className="w-3 h-3 text-[#ACC78C]" /> RERA Registered
                </span>
              </div>
            </div>

            {/* Right Column: Compact Lead Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#FFFCEC] text-[#0D3829] rounded-2xl p-5 sm:p-6 shadow-2xl border border-[#0D3829]/15">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0D3829]/15">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#0D3829] font-bold block">
                      Quick Enquiry
                    </span>
                    <h2 className="text-base sm:text-lg font-serif font-bold text-[#0D3829]">
                      Request Instant Callback
                    </h2>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-7 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/dark-logo.svg"
                        alt="Northwind Sector 22D Official Logo"
                        width={120}
                        height={30}
                        className="h-6.5 w-auto object-contain"
                      />
                    </div>
                    <span className="w-full text-center text-[8px] font-bold tracking-[0.25em] uppercase text-[#0D3829] -mt-0.5">
                      Yamuna
                    </span>
                  </div>
                </div>

                <LeadForm
                  sourceCTA="Contact Page Compact Form"
                  sourcePage="/contact"
                  compact={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Cards Row (Compact) */}
      <section className="py-10 sm:py-12 bg-[#F4F1DF] text-[#0D3829] border-t border-[#0D3829]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Card 1: Phone */}
            <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-xl p-4 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0D3829] uppercase tracking-wide">Phone Desk</h3>
                <a href={`tel:${siteConfig.phone}`} className="text-xs font-bold text-[#0D3829] hover:text-[#ACC78C] transition block">
                  +91 97177 00596
                </a>
              </div>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-xl p-4 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0D3829] uppercase tracking-wide">WhatsApp Desk</h3>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#25D366] hover:underline transition block">
                  Chat with Expert
                </a>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-[#FFFCEC] border border-[#0D3829]/15 rounded-xl p-4 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0D3829] text-[#ACC78C] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-[#0D3829] uppercase tracking-wide">Site Address</h3>
                <p className="text-xs text-[#2D3C25] font-medium">Sector 22D, Yamuna Expressway</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

