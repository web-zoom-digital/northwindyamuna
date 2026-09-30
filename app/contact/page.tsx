import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { FAQItem } from "@/components/FAQSection";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Site Visit | Northwind Estate",
  description:
    "Schedule a complimentary site visit or request pricing and floor plan brochures for Northwind Estate, Sector 22D Yamuna Expressway.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactFaqs: FAQItem[] = [
  {
    question: "How can I schedule a physical site visit to Northwind Estate Sector 22D?",
    answer: "You can submit your contact details on the enquiry form or call our sales desk directly at +91 97177 00596. Our advisory team will coordinate a convenient date and time, including complimentary pickup and drop cab arrangements."
  },
  {
    question: "Is free cab pickup available for site visits across Delhi NCR?",
    answer: "Yes, we provide complimentary VIP cab pickup and drop service from Delhi, Noida, Greater Noida, and Gurugram directly to our Sector 22D site sales office on Yamuna Expressway."
  },
  {
    question: "What are the sales office and site visit operational hours?",
    answer: "Our site sales lounge is open 7 days a week from 9:00 AM to 8:00 PM. Prior appointment is recommended for dedicated senior advisor consultations."
  },
  {
    question: "How quickly will I receive the official price list and floor plan brochure?",
    answer: "Upon submitting your enquiry, our representative will instantly share the digital floor plan PDF, master layout, and latest cost breakdown via WhatsApp and Email within 10–15 minutes."
  },
  {
    question: "Where is the exact location of Northwind Estate?",
    answer: "Northwind Estate is situated in Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh, strategically positioned adjacent to the upcoming Noida International Airport (Jewar) corridor and Eastern Peripheral Expressway."
  }
];

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Northwind Estate",
    "description":
      "Contact the authorized sales team for Northwind Estate, Sector 22D Yamuna Expressway.",
    "url": `${siteConfig.url}/contact`,
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 22D, Yamuna Expressway",
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "203201",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient contactFaqs={contactFaqs} />
    </>
  );
}
