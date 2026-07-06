import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import JsonLd from "./components/JsonLd";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://aswanthgovind.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Title ── */
  title: {
    default: "Aswanth C | Full Stack Developer — MERN Stack Portfolio",
    template: "%s | Aswanth C",
  },

  /* ── Description (max 160 chars, keyword-rich) ── */
  description:
    "Aswanth C is a Full Stack MERN Developer from Kerala, India. Specializing in React.js, Node.js, Express.js, MongoDB, and Next.js. View projects, experience, and open to new opportunities.",

  /* ── Keywords (supplementary signal) ── */
  keywords: [
    "Aswanth C",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Kerala Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Web Developer India",
    "Software Engineer",
  ],

  /* ── Canonical URL ── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Authors ── */
  authors: [{ name: "Aswanth C", url: SITE_URL }],
  creator: "Aswanth C",
  publisher: "Aswanth C",

  /* ── Favicon / Icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Aswanth C Portfolio",
    title: "Aswanth C | Full Stack MERN Developer",
    description:
      "Portfolio of Aswanth C — Full Stack Developer skilled in React, Node.js, MongoDB, and Next.js. Building modern, scalable web applications.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aswanth C — Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    firstName: "Aswanth",
    lastName: "C",
    username: "AswanthC430689",
    gender: "male",
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    site: "@AswanthC430689",
    creator: "@AswanthC430689",
    title: "Aswanth C | Full Stack MERN Developer",
    description:
      "Portfolio of Aswanth C — Full Stack Developer skilled in React, Node.js, MongoDB, and Next.js.",
    images: [
      {
        url: "/og-image.png",
        alt: "Aswanth C — Full Stack Developer Portfolio",
      },
    ],
  },

  /* ── Robots ── */
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

  /* ── Verification placeholders ── */
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },

  /* ── App manifest / theme ── */
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
    >
      <head>
        {/* Structured data — injected into <head> for Google rich results */}
        <JsonLd />
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#0c0a09" />
        {/* Viewport — critical for mobile-first indexing */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`bg-background text-foreground custom-scrollbar overflow-x-hidden ${poppins.className} antialiased`}
      >
        {/* Skip to main content — accessibility + SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#49b4bb] focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
