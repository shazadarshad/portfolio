import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono-code", subsets: ["latin"], display: "swap" });

const description =
  "Shazad Arshad — a software developer from Colombo, Sri Lanka building web apps with JavaScript, Python, and Next.js. Explore my projects, skills, and certifications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shazadarshad.com"),
  title: "Shazad Arshad | Software Developer Portfolio",
  description,
  authors: [{ name: "Shazad Arshad" }],
  keywords: [
    "Shazad Arshad",
    "software developer",
    "web developer",
    "portfolio",
    "JavaScript",
    "Python",
    "Next.js",
    "Sri Lanka",
    "Colombo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Shazad Arshad",
    title: "Shazad Arshad | Software Developer Portfolio",
    description,
    images: [{ url: "/profile.png", width: 1254, height: 1254, alt: "Shazad Arshad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shazad Arshad | Software Developer Portfolio",
    description:
      "A software developer from Colombo, Sri Lanka building web apps with JavaScript, Python, and Next.js.",
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
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
