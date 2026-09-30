"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Eye, X, Sparkles } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import AnimatedReveal from "./AnimatedReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { openLeadModal } = useLeadModal();

  const galleryItems = [
    {
      title: "NWE Sector 22D Yamuna Expressway Architecture",
      category: "Architecture",
      image: "/images/extracted/Sector22dyamunaexpressway.webp",
    },
    {
      title: "North Wind Sanctuary Exclusive Elevation",
      category: "Exterior",
      image: "/images/extracted/northwindanctuary.jpg",
    },
    {
      title: "Eldeco Omicron High-Rise Landmark",
      category: "Landmarks",
      image: "/images/extracted/eldecoomicron.jpg",
    },
    {
      title: "Hero Homes AQI-Controlled Luxury Living",
      category: "Residences",
      image: "/images/extracted/herohomes.webp",
    },
    {
      title: "Young Homz Master Residence Vistas",
      category: "Outdoors",
      image: "/images/extracted/banner-young-homz.jpg",
    },
    {
      title: "Northwind Official Main Elevation",
      category: "Luxury Phase",
      image: "/images/extracted/Banner.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FFFCEC] text-[#0D3829] border-t border-[#0D3829]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3829]/10 border border-[#0D3829]/20 text-xs font-semibold text-[#0D3829]">
            <Camera className="w-3.5 h-3.5 text-[#0D3829]" /> Project Visuals
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3829]">
            Explore <span className="gold-gradient-text">Northwind Estate Gallery</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7168] font-light">
            Architectural renderings, interior lifestyle vistas, and landscaped community green spaces.
          </p>
        </AnimatedReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <AnimatedReveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                onClick={() => setSelectedImage(item.image)}
                className="bg-[#FFFCEC] border border-[#0D3829]/15 hover:border-[#0D3829] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs cursor-pointer group transition-all duration-300 relative hover-card-lift h-full flex flex-col justify-between"
              >
                <div className="aspect-[4/3] relative w-full bg-[#F4F1DF] overflow-hidden hover-zoom-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0D3829]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFFCEC] border border-[#0D3829] text-[#0D3829] flex items-center justify-center shadow-md">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D3829]" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0D3829] text-[#FFFCEC] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#ACC78C]/30 uppercase tracking-wider shadow-xs truncate max-w-[85%]">
                    {item.category}
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-[#FFFCEC] border-t border-[#0D3829]/10">
                  <h3 className="text-xs sm:text-sm font-serif font-bold text-[#0D3829] group-hover:text-[#1E3A2B] transition line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Lightbox Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[110] bg-[#0D3829]/80 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-[#FFFCEC] border border-[#0D3829]/30 rounded-2xl overflow-hidden p-2 shadow-2xl cursor-default"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 bg-[#0D3829] text-[#FFFCEC] p-2 rounded-full border border-[#ACC78C]/40 hover:bg-[#1E3A2B] transition cursor-pointer"
                >
                  <X className="w-6 h-6 text-[#FFFCEC]" />
                </button>
                <div className="aspect-[16/10] relative w-full rounded-xl overflow-hidden bg-[#F4F1DF]">
                  <Image
                    src={selectedImage}
                    alt="Enlarged Northwind Estate Gallery View"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
