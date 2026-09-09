import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Banjara",
    "PB Venture",
    "Sonari",
    "Jamshedpur",
    "Indian restaurant",
    "Pure veg",
    "royal dining",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/sat-7809.jpg",
        width: 2400,
        height: 1600,
        alt: "Dining room at Banjara, a PB Venture outlet in Sonari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.outletName,
  image: "/images/sat-7809.jpg",
  servesCuisine: "Indian",
  parentOrganization: {
    "@type": "Organization",
    name: site.legalName,
    legalName: site.legalName,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 18-19-20 G, Ground Floor, Bindal Mall, Marine Drive Road",
    addressLocality: "Sonari",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  telephone: "+917545800700",
  openingHours: "Mo-Su 12:00-23:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-brown">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
