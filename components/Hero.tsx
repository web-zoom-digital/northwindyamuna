"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, FileText, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import LeadForm from "./LeadForm";

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroImages = [
    {
      src: "/images/extracted/Banner.jpg",
      title: "Northwind Estate — Main Elevation",
      tag: "Main Elevation",
    },
    {
      src: "/images/extracted/Image-2.jpg",
      title: "Sector 22D Tower Perspective & Balconies",
      tag: "Architecture View",
    },
    {
      src: "/images/extracted/Image-3.jpg",
      title: "Low Density Enclave & Landscaped Greens",
      tag: "Community Layout",
    },
  ];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const currentHeroImage = heroImages[activeImageIndex];

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0D3829] text-white">
      {/* Full Screen Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/extracted/Banner.jpg"
          alt="Northwind Estate Sector 22D Yamuna Expressway"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Positioning & Headlines */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between"
          >
            {/* Location & Builder Badge Tag */}
            {/* <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/30 text-xs text-[#ACC78C] font-semibold shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#ACC78C]" />
                <span>Sector 22D, Yamuna Expressway, Greater Noida</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3A2B]/90 border border-[#ACC78C]/30 text-xs text-[#ACC78C] font-medium">
                <span>Near Jewar Airport Corridor</span>
              </div>
            </div> */}

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-[1.15]">
              Northwind Estate — Premium 3 &amp; 4 BHK Residences
            </h1>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-[#FFFCEC]/80 leading-relaxed max-w-2xl font-light">
              Explore <strong className="text-[#FFFCEC] font-semibold">Northwind Sector 22D Yamuna Expressway</strong> — Greater Noida&apos;s premier low-density residential enclave with contemporary architecture, expansive balconies, and lifestyle amenities.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-[#FFFCEC]">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Low-Density Gated Community
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Jewar Airport Growth Corridor
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A2B]/90 border border-[#ACC78C]/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ACC78C]" /> Modern Clubhouse &amp; Facilities
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Inquiry Price List & Availability",
                    ctaSource: "Hero Primary Inquiry Price",
                  })
                }
                className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md transition flex items-center gap-2 group cursor-pointer border border-[#ACC78C]"
              >
                <span>Inquiry Price</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() =>
                  openLeadModal({
                    title: "Schedule Site Visit",
                    ctaSource: "Hero Secondary Site Visit",
                  })
                }
                className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold border border-[#0D3829]/20 px-5 py-3.5 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0D3829]" />
                <span>Schedule Site Visit</span>
              </button>

            </div>

            {/* Extracted Hero Visual Carousel Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ACC78C]/30 shadow-xl mt-6 group bg-[#1E3A2B]">
              <div className="aspect-[16/9] relative w-full bg-[#1E3A2B] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentHeroImage.src}
                      alt={currentHeroImage.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829]/80 via-[#0D3829]/20 to-transparent pointer-events-none" />
                
                {/* Carousel Nav Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FFFCEC]/90 hover:bg-[#FFFCEC] text-[#0D3829] p-2 rounded-full shadow-md transition z-10 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FFFCEC]/90 hover:bg-[#FFFCEC] text-[#0D3829] p-2 rounded-full shadow-md transition z-10 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFCEC] z-10">
                  <span className="font-serif font-bold text-[#ACC78C]">{currentHeroImage.title}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-[#0D3829]/90 px-2.5 py-1 rounded border border-[#ACC78C]/30 text-[#FFFCEC] font-medium">
                      {currentHeroImage.tag}
                    </span>
                    <span className="text-[10px] bg-[#ACC78C] text-[#0D3829] font-bold px-2 py-1 rounded">
                      {activeImageIndex + 1} / {heroImages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnails Bar */}
              <div className="p-2.5 bg-[#1E3A2B] border-t border-[#ACC78C]/20 flex items-center gap-2 justify-center">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden border transition cursor-pointer ${
                      activeImageIndex === idx ? "border-[#ACC78C] opacity-100 ring-2 ring-[#ACC78C]/50" : "border-[#0D3829] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.tag} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Quick Lead Form Box (Desktop & Tablet) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="rounded-2xl p-6 sm:p-8 md:p-9 shadow-2xl relative border border-[#0D3829]/15 bg-[#FFFCEC] text-[#0D3829] flex flex-col justify-between h-full min-h-[580px]">
              <div>
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#0D3829]/15">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#0D3829] font-bold block mb-1">
                      Enquiry Form
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D3829]">Request Instant Callback</h3>
                    <p className="text-xs text-[#5E7168] font-light mt-0.5">Fill out details to get complete brochure & pricing</p>
                  </div>
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-9 sm:h-10 flex items-center justify-center">
                      <Image
                        src="/images/dark-logo.svg"
                        alt="Northwind Estates Logo"
                        width={160}
                        height={36}
                        className="h-8 sm:h-9 w-auto object-contain"
                      />
                    </div>
                    <span className="w-full text-center text-[8px] sm:text-[9px] font-bold tracking-[0.3em] uppercase text-[#0D3829] -mt-0.5">
                      Yamuna
                    </span>
                  </div>
                </div>

                <LeadForm
                  sourceCTA="Hero Embedded Form"
                  sourcePage="/"
                  compact={false}
                />
              </div>
              <h2 className="text-lg sm:text-xl items-center text-center justify-center font-serif font-bold text-[#0D3829] mt-4 pt-4 border-t border-[#0D3829]/10">Northwind Estate — Premium 3 &amp; 4 BHK Residences</h2>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

