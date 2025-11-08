import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://x.com/AswanthC430689"), // ✅ REQUIRED for OG/Twitter images
  title: "Aswanth C | Portfolio",
  description: "MERN Stack Developer crafting modern web experiences.",
  icons: {
    icon: "/app/favicon.ico", // ✅ this controls the browser tab icon
  },
  openGraph: {
    title: "Aswanth C | Portfolio",
    description: "MERN Stack Developer crafting modern web experiences.",
    url: "https://aswanthgovind.site",
    siteName: "Aswanth Portfolio",
    images: [
      {
        url: "/app/og-image.png", // image in your /public folder
        width: 1200,
        height: 630,
        alt: "Aswanth Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswanth C | Portfolio",
    description: "MERN Stack Developer crafting modern web experiences.",
    images: ["/og-image.png"], // ✅ can reuse same image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-background text-foreground custom-scrollbar overflow-x-hidden ${poppins.className} antialiased`}
      >
        <Navbar />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
