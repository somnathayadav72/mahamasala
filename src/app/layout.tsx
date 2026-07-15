import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Satyasee - Rooted in India",
    template: "%s - Satyasee",
  },
  description:
    "Authentic Indian spices, freshly ground for vibrant flavours in every meal.",
  // Icons: file-based via app/favicon.ico, app/icon.svg, app/apple-icon.png
  applicationName: "Satyasee",
};

export const viewport: Viewport = {
  themeColor: "#e8734a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
