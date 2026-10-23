import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import ConfigurationCards from "@/components/ConfigurationCards";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import Gallery from "@/components/Gallery";
import WhyConsiderSection from "@/components/WhyConsiderSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Northwind Yamuna Expressway | 3 & 4 BHK Homes in Sector 22D",
  description:
    "Explore Northwind Yamuna in Sector 22D, Yamuna Expressway. View available 3 & 4 BHK residences, floor plans, project details, location and pricing information. Enquire for details.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Northwind Yamuna Expressway | 3 & 4 BHK Homes in Sector 22D",
    description:
      "Explore Northwind Yamuna in Sector 22D, Yamuna Expressway. View available 3 & 4 BHK residences, floor plans, project details, location and pricing information. Enquire for details.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Northwind Yamuna Expressway Homes in Sector 22D",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Yamuna Expressway | 3 & 4 BHK Homes in Sector 22D",
    description:
      "Explore Northwind Yamuna in Sector 22D, Yamuna Expressway. View available 3 & 4 BHK residences, floor plans, project details, location and pricing information. Enquire for details.",
    images: [`${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProjectOverview />
      <Highlights />
      <ConfigurationCards />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlanSection />
      <Gallery />
      <WhyConsiderSection />
      <BlogSection />
      <FAQSection />
      <CTASection
        title="Explore Northwind Estate in Sector 22D"
        subtitle="Book a private site visit today to experience NCR's premier low-density residential community."
      />
    </>
  );
}
