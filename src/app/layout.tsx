import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/site";
import { seo } from "@/content/seo";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono-code", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: seo.url }],
  creator: profile.name,
  publisher: profile.name,
  keywords: seo.keywords,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    firstName: "Shazad",
    lastName: "Arshad",
    username: "shazadarshad",
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste the code from Google Search Console / Bing Webmaster Tools here.
  verification: {
    // google: "your-google-site-verification-code",
    // other: { "msvalidate.01": "your-bing-code" },
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
