"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialLinks from "./ui/SocialLinks";
import { TypingAnimation } from "./ui/TypingAnimation";
import DownloadButton from "./ui/ResumeDownloadButton";
import { useActiveSection } from "../hooks/useActiveSection";

// Hoisted outside component — no re-creation on each render
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experiance" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

const SectionOne = () => {
  const activeSection = useActiveSection();

  return (
    <aside
      aria-label="Portfolio sidebar — profile and navigation"
      className="sticky top-0 h-screen flex flex-col justify-between py-16 px-10 xl:px-16"
    >

      {/* ── Profile info block ── */}
      <div className="flex flex-col gap-3">

        {/* Avatar */}
        <div className="relative w-20 h-20 mb-1 group">
          {/* Animated gradient ring — decorative */}
          <div
            aria-hidden="true"
            className="absolute -inset-[3px] rounded-full z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "conic-gradient(from 0deg, #49b4bb, #3b82f6, #8b5cf6, #49b4bb)",
              animation: "spin-ring 4s linear infinite",
            }}
          />
          {/* Gap ring — decorative */}
          <div aria-hidden="true" className="absolute inset-0 rounded-full z-10 bg-[#0f172a]" />
          {/* Profile photo */}
          <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
            <Image
              src="/profile.jpeg"
              alt="Aswanth C — Full Stack MERN Developer"
              fill
              sizes="80px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Name — h2 because h1 is the hero name; this is the sidebar version */}
        <h2 className="font-bold text-3xl xl:text-4xl text-white leading-tight">
          Aswanth C
        </h2>

        {/* Job title */}
        <TypingAnimation
          startOnView={true}
          className="text-[15px] font-medium tracking-wide text-[#49b4bb]"
          as="p"
        >
          MERN Stack Developer
        </TypingAnimation>

        <p className="text-[13px] font-normal text-gray-400 leading-relaxed max-w-xs">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <div className="mt-1">
          <DownloadButton />
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav aria-label="Page sections" className="flex flex-col gap-4">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <Link
              href={link.href}
              key={link.name}
              aria-current={isActive ? "location" : undefined}
              className="flex gap-3 cursor-pointer transition-all items-center group"
            >
              <div
                aria-hidden="true"
                className={`h-[2px] transition-all duration-500 ${
                  isActive
                    ? "w-20 bg-white"
                    : "w-10 bg-gray-500 group-hover:w-20 group-hover:bg-white"
                }`}
              />
              <span
                className={`font-semibold uppercase text-[11px] tracking-widest transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-white"
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── Social links ── */}
      <SocialLinks />
    </aside>
  );
};

export default SectionOne;
