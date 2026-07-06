"use client";
import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";

// Hoisted outside component — no re-creation on each render
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experiance" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const activeSection = useActiveSection();

  const activeLabel =
    navLinks.find((l) => l.href.replace("#", "") === activeSection)?.name ?? "";

  return (
    /* Mobile-only top bar — always visible, shows active section name */
    <header
      role="banner"
      className="w-full h-14 lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0c0a09]/60 border-b border-white/5 flex items-center px-6"
      aria-label="Mobile navigation header"
    >
      <p
        className="text-[14px] font-semibold text-white capitalize tracking-wide"
        aria-live="polite"
        aria-label={`Current section: ${activeLabel || "Aswanth C"}`}
      >
        {activeLabel || "Aswanth C"}
      </p>
    </header>
  );
};

export default Navbar;
