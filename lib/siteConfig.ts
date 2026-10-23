// Central site configuration for Northwind Estate
export const siteConfig = {
  name: "Northwind Estate",
  altName: "Northwind Sector 22D Yamuna Expressway",
  tagline: "Premium 3 & 4 BHK Luxury Residences on Yamuna Expressway",
  description:
    "Explore Northwind Yamuna in Sector 22D, Yamuna Expressway. View available 3 & 4 BHK residences, floor plans, project details, location and pricing information. Enquire for details.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://northwindyamunaexpressway.homes",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+919717700596",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919717700596",
  whatsappMessage: "Hi, I am interested in Northwind Estate, Sector 22D Yamuna Expressway. Please share project details and pricing.",
  
  // Project Specifications verified from reference data
  location: {
    sector: "Sector 22D",
    corridor: "Yamuna Expressway",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    postalCode: "203201",
    latitude: 28.3245,
    longitude: 77.5312,
    landmark: "Adjacent to Upcoming Noida International Airport Corridor",
  },
  configurations: [
    {
      type: "3 BHK Luxury Apartment",
      bhk: "3 BHK",
      status: "Coming Soon",
      size: "Price / Area on Request",
      price: "Price on Request",
      highlights: [
        "Spacious Living & Dining with Large Balcony",
        "Master Bedroom with Attached Bath & Dressing Space",
        "Vitrified Flooring & UPVC Toughened Glass Balconies",
        "Optimized Natural Light & Cross Ventilation"
      ]
    },
    {
      type: "4 BHK Ultra Estate Residence",
      bhk: "4 BHK",
      status: "Coming Soon",
      size: "Price / Area on Request",
      price: "Price on Request",
      highlights: [
        "Expansive Double-Height Balcony Options",
        "4 Bedrooms with En-Suite Bathrooms",
        "Separate Utility & Servant Space",
        "Premium Fixtures & Anti-Skid Balcony Tiles"
      ]
    }
  ],
  rera: "RERA Details: To be updated",
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Configurations", href: "/configurations" },
    { label: "Jewar Airport", href: "/apartments-near-jewar-airport" },
    { label: "Amenities", href: "/amenities" },
    { label: "Floor Plans", href: "/floor-plans" },
    { label: "Price List", href: "/price-list" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ]
};
