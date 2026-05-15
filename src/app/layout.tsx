import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pragyan — Wisdom. Action. Growth. | A 360° brand & marketing agency",
  description: "Pragyan is a 360° brand and marketing agency. We know the appetite, taste, and impact ideas can have when you have a point of view.",
  metadataBase: new URL("https://pragyaan.in"),
  openGraph: {
    type: "website",
    siteName: "Pragyan",
    title: "Pragyan — Wisdom. Action. Growth.",
    description: "A 360° brand and marketing agency. It starts with a point of view.",
    url: "https://pragyaan.in/",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragyan — Wisdom. Action. Growth.",
    description: "A 360° brand and marketing agency. It starts with a point of view.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/assets/img/icons.svg",
    apple: "/assets/img/icons.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${plusJakartaSans.variable} antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#010101" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://pragyaan.in/#org",
                  "name": "Pragyan",
                  "alternateName": "Pragyaan",
                  "url": "https://pragyaan.in/",
                  "logo": "https://pragyaan.in/assets/img/Pragyan-01.png",
                  "description": "A 360° brand and marketing agency. Wisdom. Action. Growth.",
                  "slogan": "Wisdom. Action. Growth.",
                  "areaServed": "IN",
                  "sameAs": [
                    "https://www.linkedin.com/company/pragyan/",
                    "https://www.instagram.com/pragyan/"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "new business",
                    "email": "connect@mypragyan.com",
                    "availableLanguage": ["en", "hi"]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pragyaan.in/#site",
                  "url": "https://pragyaan.in/",
                  "name": "Pragyan",
                  "publisher": { "@id": "https://pragyaan.in/#org" },
                  "inLanguage": "en-IN"
                },
                {
                  "@type": "ProfessionalService",
                  "name": "Pragyan",
                  "image": "https://pragyaan.in/assets/img/Pragyan-01.png",
                  "url": "https://pragyaan.in/",
                  "priceRange": "₹₹",
                  "areaServed": "IN",
                  "knowsAbout": ["Brand Strategy", "Identity Design", "Content Marketing", "Digital Marketing", "Social Media", "Personal Branding", "OOH Advertising"]
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <a href="#main" className="absolute -left-[9999px] top-0 p-3 bg-yellow text-black font-semibold text-sm rounded-br-md z-[100] focus:left-0 transition-all">Skip to content</a>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
