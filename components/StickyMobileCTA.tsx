"use client";

import React from "react";
import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";

export default function StickyMobileCTA() {
  const { openLeadModal } = useLeadModal();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[90] w-auto max-w-[92vw]">
      <div className="bg-[#0D3829]/95 backdrop-blur-2xl border border-[#ACC78C]/35 px-5 py-3 rounded-full shadow-[0_16px_50px_rgba(13,56,41,0.6)] flex items-center justify-center gap-6 ring-1 ring-white/10">
        {/* Call Icon */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 bg-[#1E3A2B] hover:bg-[#23533E] text-[#FFFCEC] rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md border border-[#ACC78C]/30"
          aria-label="Call Sales Desk"
          title="Call Sales Desk"
        >
          <Phone className="w-5.5 h-5.5 stroke-[2.3] text-[#ACC78C]" />
        </a>

        {/* WhatsApp Icon (Center Focal Highlight) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-xl shadow-green-950/60 border border-emerald-300/50"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>

        {/* Site Visit / Schedule Icon */}
        <button
          onClick={() =>
            openLeadModal({
              title: "Schedule Site Visit",
              ctaSource: "Sticky Mobile Visit Icon",
            })
          }
          className="w-12 h-12 bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-xl shadow-[#0D3829]/60 border border-[#ACC78C] cursor-pointer"
          aria-label="Schedule Site Visit"
          title="Schedule Site Visit"
        >
          <Calendar className="w-5.5 h-5.5 stroke-[2.3] text-[#0D3829]" />
        </button>
      </div>
    </div>
  );
}




