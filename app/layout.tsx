import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { LeadModalProvider } from "@/components/LeadModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadModal from "@/components/LeadModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D3829",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Northwind Yamuna Expressway | 3 & 4 BHK Homes in Sector 22D",
    template: "%s | Northwind Yamuna Expressway",
  },
  description: siteConfig.description,
  keywords: [
    "Northwind Estate",
    "Northwind Yamuna Expressway",
    "Northwind Sector 22D",
    "3 BHK Yamuna Expressway",
    "4 BHK Yamuna Expressway",
    "apartments near Jewar Airport",
    "flats near Noida International Airport",
    "property in Sector 22D Greater Noida",
    "luxury apartments Greater Noida",
    "low density society Yamuna Expressway",
    "YEIDA approved residential projects"
  ],
  authors: [{ name: "Northwind Estate Sales" }],
  creator: "Northwind Estate",
  verification: {
    google: "4eY-n4zh2jdSvJyme1vf5fS-S1FjrDJbJaC3eT59Nnc",
    other: {
      "msvalidate.01": [process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "c74384930d634dbca233f86b7617ff14"],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Northwind Estate | Premium 3 & 4 BHK Residences Yamuna Expressway",
    description: siteConfig.description,
    siteName: "Northwind Estate",
    images: [
      {
        url: `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
        width: 1200,
        height: 675,
        alt: "Northwind Estate Yamuna Expressway Tower Elevation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Estate | Premium 3 & 4 BHK Residences Yamuna Expressway",
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo-s.webp", type: "image/webp" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Schema markup (RealEstateAgent & WebSite) with GEO Coordinates
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Northwind Estate",
    "alternateName": "Northwind Sector 22D Yamuna Expressway",
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo-s.webp`,
    "image": `${siteConfig.url}/images/hero/northwind-yamuna-expressway-hero.svg`,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
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
      "latitude": siteConfig.location.latitude,
      "longitude": siteConfig.location.longitude
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Yamuna Expressway, Greater Noida, Uttar Pradesh"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Northwind Estate",
    "url": siteConfig.url,
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="4eY-n4zh2jdSvJyme1vf5fS-S1FjrDJbJaC3eT59Nnc" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo-s.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFCEC] text-[#0D3829] selection:bg-[#ACC78C] selection:text-[#0D3829]">
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6WKW8J0CFX"
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6WKW8J0CFX');
            `,
          }}
        />

        <LeadModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCTA />
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}
