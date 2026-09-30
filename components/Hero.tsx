"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, FileText, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import LeadForm from "./LeadForm";
import TiltCard from "./TiltCard";

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  // 3-second Auto Slide Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, heroImages.length]);

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
          className="object-fit opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10 sm:space-y-14">
        
        {/* ROW 1: Centered Top Header, Text & Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 flex flex-col items-center"
        >
          

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold tracking-tight text-[#FFFCEC] leading-[1.15] max-w-3xl">
            Northwind Estate — Premium 3 &amp; 4 BHK Residences
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#FFFCEC]/85 leading-relaxed max-w-2xl font-light">
            Explore <strong className="text-[#FFFCEC] font-semibold">Northwind Sector 22D Yamuna Expressway</strong> — Greater Noida&apos;s premier low-density residential enclave with contemporary architecture, expansive balconies, and lifestyle amenities.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-0.5 text-xs text-[#FFFCEC]">
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
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() =>
                openLeadModal({
                  title: "Inquiry Price List & Availability",
                  ctaSource: "Hero Primary Inquiry Price",
                })
              }
              className="bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md transition flex items-center gap-2 group cursor-pointer border border-[#ACC78C]"
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
              className="bg-[#FFFCEC] hover:bg-[#F4F1DF] text-[#0D3829] font-semibold border border-[#0D3829]/20 px-6 py-3.5 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#0D3829]" />
              <span>Schedule Site Visit</span>
            </button>
          </div>
        </motion.div>

        {/* ROW 2: Side-by-Side 2nd Row (Circular Showcase on Left, Enquiry Form on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (Col 7): Animated Circular Architectural Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 flex flex-col items-center justify-center"
          >
            <div 
              className="relative py-2 flex flex-col items-center justify-center w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Ambient Glow */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] rounded-full bg-[#ACC78C]/20 blur-3xl pointer-events-none -z-10" />

              {/* Outer Rotating Ornamental Dashed Ring */}
              <div className="relative w-[260px] h-[260px] xs:w-[290px] xs:h-[290px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
                
                {/* Clockwise Dashed Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-1/2 border-2 border-dashed border-[#ACC78C]/40 pointer-events-none"
                />

                {/* Counter-Clockwise Accent Dots Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 sm:-inset-3 rounded-1/2 border border-dotted border-[#FFFCEC]/25 pointer-events-none"
                />

                {/* Main Circular Portal Viewport */}
                <div className="relative w-[235px] h-[235px] xs:w-[260px] xs:h-[260px] sm:w-[330px] sm:h-[330px] md:w-[385px] md:h-[385px] rounded-full overflow-hidden border-4 border-[#FFFCEC]/35 shadow-[0_15px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(172,199,140,0.25)] bg-[#1E3A2B] group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ scale: 1.15, opacity: 0, rotate: -2 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.92, opacity: 0, rotate: 2 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={currentHeroImage.src}
                        alt={currentHeroImage.title}
                        fill
                        priority
                        className="object-fit"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Dark Radial & Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3829] via-[#0D3829]/30 to-transparent pointer-events-none" />

                  {/* Circular Nav Arrows */}
                  

                  {/* Bottom Text in Circular Arc */}
                  
                </div>

                {/* Floating Micro Badge 1 (Top Left) */}
                

                {/* Floating Micro Badge 2 (Top Right with Live 3s Status) */}
               
              </div>

              {/* Circular Interactive Thumbnails Row */}
              <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5 sm:gap-3 z-10">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-10 h-10 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer shadow-md ${
                      activeImageIndex === idx
                        ? "border-[#ACC78C] scale-110 ring-2 sm:ring-4 ring-[#ACC78C]/40 shadow-[0_0_12px_rgba(172,199,140,0.5)]"
                        : "border-[#FFFCEC]/30 opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image src={img.src} alt={img.tag} fill className="object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Column (Col 5): Hero Quick Lead Form Box (Small & Compact) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 flex flex-col justify-center max-w-md mx-auto w-full"
          >
            <div className="rounded-2xl p-5 sm:p-6 shadow-2xl relative border border-[#0D3829]/15 bg-[#FFFCEC] text-[#0D3829]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0D3829]/15">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#0D3829] font-bold block">
                    Quick Enquiry
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0D3829]">Request Instant Callback</h3>
                  <p className="text-[11px] text-[#5E7168] font-light">Get complete brochure &amp; verified price list</p>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="h-7 sm:h-8 flex items-center justify-center">
                    <Image
                      src="/images/dark-logo.svg"
                      alt="Northwind Estates Logo"
                      width={120}
                      height={28}
                      className="h-6 sm:h-7 w-auto object-contain"
                    />
                  </div>
                  <span className="w-full text-center text-[7px] sm:text-[8px] font-bold tracking-[0.25em] uppercase text-[#0D3829] -mt-0.5">
                    Yamuna
                  </span>
                </div>
              </div>

              <LeadForm
                sourceCTA="Hero Embedded Form"
                sourcePage="/"
                compact={true}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

