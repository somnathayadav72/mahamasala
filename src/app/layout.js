import { Fraunces, Manrope } from "next/font/google";
import { site, getSiteUrl } from "@/config/site";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: "%s | Satyasee" },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Food & Beverage",
  keywords: ["Satyasee", "Indian spices", "masala", "turmeric", "chilli", "coriander", "garam masala", "biryani masala"],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: { type: "website", locale: "en_IN", url: "/", siteName: site.name, title: site.title, description: site.description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Satyasee spice range" }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/twitter-image"] },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: site.colors.primary, width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    email: site.email,
    telephone: site.phone,
    address: { "@type": "PostalAddress", streetAddress: "Mahalaxmi masale", addressLocality: "Vita", addressRegion: "Maharashtra", addressCountry: "IN" },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
