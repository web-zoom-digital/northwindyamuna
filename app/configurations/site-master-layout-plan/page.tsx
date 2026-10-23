import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import SiteMasterPlanClient from "./SiteMasterPlanClient";

export const metadata: Metadata = {
  title: "Site & Master Layout Plan | Northwind Estate Sector 22D",
  description: "Explore the low-density master layout plan of Northwind Estate, Sector 22D Yamuna Expressway. Over 70% open green space, central clubhouse, and wide roads.",
  alternates: {
    canonical: `${siteConfig.url}/configurations/site-master-layout-plan`,
  },
  keywords: [
    "northwind estate master plan",
    "sector 22d site layout plan",
    "yamuna expressway township plan",
    "low density master plan greater noida",
    "floor plan site layout jewar airport"
  ],
  openGraph: {
    title: "Site & Master Layout Plan | Northwind Estate",
    description: "Low-density residential township layout plan in Sector 22D Yamuna Expressway near Jewar International Airport.",
    url: `${siteConfig.url}/configurations/site-master-layout-plan`,
    images: [
      {
        url: `${siteConfig.url}/images/configurations/site-master-layout-plan-hero.jpg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate Master Layout Plan",
      },
    ],
  },
};

export default function SiteMasterPlanPage() {
  const masterPlanSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": "Northwind Estate",
    "description": "Low-density residential community in Sector 22D Yamuna Expressway offering 3 & 4 BHK residences with expansive central parklands.",
    "url": `${siteConfig.url}/configurations/site-master-layout-plan`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 22D, Yamuna Expressway",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "203201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.3245,
      "longitude": 77.5312
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(masterPlanSchema) }}
      />
      <SiteMasterPlanClient />
    </>
  );
}
