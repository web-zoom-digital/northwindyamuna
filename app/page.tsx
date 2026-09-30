import React from "react";
import Hero from "@/components/Hero";
import ProjectOverview from "@/components/ProjectOverview";
import Highlights from "@/components/Highlights";
import ConfigurationCards from "@/components/ConfigurationCards";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import Gallery from "@/components/Gallery";
import WhyConsiderSection from "@/components/WhyConsiderSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectOverview />
      <Highlights />
      <ConfigurationCards />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlanSection />
      <Gallery />
      <WhyConsiderSection />
      <FAQSection />
      <CTASection
        title="Explore Northwind Estate in Sector 22D"
        subtitle="Book a private site visit today to experience NCR's premier low-density residential community."
      />
    </>
  );
}
