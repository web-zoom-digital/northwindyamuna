"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { useLeadModal } from "./LeadModalContext";

export default function Footer() {
  const { openLeadModal } = useLeadModal();

  return (
    <footer className="bg-[#0D3829] border-t border-[#ACC78C]/20 text-[#FFFCEC]/80 text-xs pt-14 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 pb-12 border-b border-[#ACC78C]/15">
          {/* Brand Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center sm:items-start w-fit">
              <div className="relative h-9 sm:h-10 flex items-center justify-center">
                <Image
                  src="/images/light-logo.svg"
                  alt="Northwind Estates Logo"
                  width={190}
                  height={42}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
              <span className="w-full text-center text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#ACC78C] pt-0.5">
                Yamuna
              </span>
            </div>

            <p className="text-[#FFFCEC]/80 text-xs leading-relaxed font-light">
              Premium 3 &amp; 4 BHK luxury residences on Yamuna Expressway, Greater Noida. Low-density gated residential community adjacent to the upcoming Noida International Airport corridor.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-semibold text-[#ACC78C] bg-[#1E3A2B] border border-[#ACC78C]/30 px-3 py-1 rounded-full shadow-xs">
                {siteConfig.rera}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#ACC78C] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#ACC78C] transition text-[#FFFCEC]/80 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ACC78C] transition text-[#FFFCEC]/80 font-medium">
                  About Project
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#ACC78C] transition text-[#FFFCEC]/80 font-medium">
                  Resort Amenities
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#ACC78C] transition text-[#FFFCEC]/80 font-medium">
                  Journal &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ACC78C] transition text-[#FFFCEC]/80 font-medium">
                  Contact &amp; Site Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Configurations */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#ACC78C] uppercase tracking-wider">
              Configurations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/configurations"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>All Configurations</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/configurations/3-bhk-luxury-apartment"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>3 BHK Luxury Apartment</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/configurations/4-bhk-ultra-estate-residence"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>4 BHK Ultra Estate Residence</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/configurations/site-master-layout-plan"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Site &amp; Master Layout</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Keyword Hubs & Growth Corridor */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#ACC78C] uppercase tracking-wider">
              Growth Corridor
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/northwind-yamuna-price-list"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Verified Price List</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/northwind-yamuna-site-visit"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Book Site Visit</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/northwind-yamuna-3-bhk"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>3 BHK Price &amp; Layout</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/northwind-yamuna-brochure"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Brochure Download</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-apartments-yamuna-expressway"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Yamuna Luxury Flats</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/apartments-near-jewar-airport"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Jewar Airport Residences</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/location-sector-22d-yamuna-expressway"
                  className="hover:text-[#ACC78C] transition flex items-center gap-1 text-[#FFFCEC]/80 font-medium"
                >
                  <span>Sector 22D Location Guide</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ACC78C]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-sm font-bold text-[#ACC78C] uppercase tracking-wider">
              Sales Enquiry
            </h4>
            <p className="text-xs text-[#FFFCEC]/80 font-light">
              For instant site visit cab booking, verified price sheets, and floor plan brochures:
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Speak to Sales Consultant",
                    ctaSource: "Footer Phone Enquiry",
                  })
                }
                className="flex items-center gap-2 text-[#FFFCEC] font-bold hover:text-[#ACC78C] transition cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#ACC78C]" />
                <span>+91 97177 00596</span>
              </button>
              <button
                onClick={() =>
                  openLeadModal({
                    title: "Request Callback",
                    ctaSource: "Footer Callback Button",
                  })
                }
                className="w-full bg-[#ACC78C] hover:bg-[#9BB77A] text-[#0D3829] font-bold py-2.5 px-3 rounded-lg text-xs transition shadow-xs cursor-pointer border border-[#ACC78C]"
              >
                Request Immediate Callback
              </button>
            </div>
          </div>
        </div>

        {/* Direct Keyword Landing Hubs */}
        <div className="py-4 border-b border-[#ACC78C]/15 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-[#FFFCEC]/70">
          <span className="text-[#ACC78C] font-semibold uppercase tracking-wider text-[10px]">Popular Searches:</span>
          <Link href="/northwind-yamuna-price-list" className="hover:text-[#ACC78C] underline decoration-[#ACC78C]/30 underline-offset-2">Northwind Yamuna Price List</Link>
          <span className="text-[#ACC78C]/30 hidden sm:inline">•</span>
          <Link href="/northwind-yamuna-site-visit" className="hover:text-[#ACC78C] underline decoration-[#ACC78C]/30 underline-offset-2">Northwind Yamuna Site Visit</Link>
          <span className="text-[#ACC78C]/30 hidden sm:inline">•</span>
          <Link href="/northwind-yamuna-3-bhk" className="hover:text-[#ACC78C] underline decoration-[#ACC78C]/30 underline-offset-2">Northwind Yamuna 3 BHK Price</Link>
          <span className="text-[#ACC78C]/30 hidden sm:inline">•</span>
          <Link href="/northwind-yamuna-brochure" className="hover:text-[#ACC78C] underline decoration-[#ACC78C]/30 underline-offset-2">Northwind Yamuna Brochure Download</Link>
          <span className="text-[#ACC78C]/30 hidden sm:inline">•</span>
          <Link href="/luxury-apartments-yamuna-expressway" className="hover:text-[#ACC78C] underline decoration-[#ACC78C]/30 underline-offset-2">Luxury Apartments Yamuna Expressway</Link>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FFFCEC]/60 font-medium">
          <p>© {new Date().getFullYear()} Northwind Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#ACC78C] transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#ACC78C] transition">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-[#ACC78C] transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
