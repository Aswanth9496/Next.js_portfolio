"use client";
import React from "react";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[100vh] flex items-center justify-center bg-[#000000] w-screen overflow-hidden"
      aria-label="Hero section"
    >

      {/* ── Dot-grid background — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle, #49b4bb 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Gradient vignette — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #000000 80%)",
        }}
      />

      {/* ── Floating blob 1 — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute z-0 rounded-full blur-[120px] opacity-30"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #49b4bb 0%, transparent 70%)",
          animation: "blobDrift1 12s ease-in-out infinite",
          top: "-100px",
          left: "-100px",
        }}
      />

      {/* ── Floating blob 2 — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute z-0 rounded-full blur-[140px] opacity-25"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animation: "blobDrift2 16s ease-in-out infinite",
          bottom: "-150px",
          right: "-100px",
        }}
      />

      {/* ── Floating blob 3 — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute z-0 rounded-full blur-[100px] opacity-20"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          animation: "blobDrift3 10s ease-in-out infinite",
          top: "40%",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ── Floating particles — decorative ── */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute z-0 rounded-full"
          style={{
            width: i % 3 === 0 ? "3px" : "2px",
            height: i % 3 === 0 ? "3px" : "2px",
            background: i % 2 === 0 ? "#49b4bb" : "#8b5cf6",
            left: `${(i * 5.5 + 3) % 100}%`,
            bottom: "-10px",
            opacity: 0,
            animation: `particleRise ${8 + (i % 6)}s linear ${i * 0.7}s infinite`,
          }}
        />
      ))}

      {/* ── Shooting stars — decorative ── */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`star-${i}`}
          aria-hidden="true"
          className="absolute z-0"
          style={{
            width: "2px",
            height: `${60 + i * 20}px`,
            background: "linear-gradient(to bottom, transparent, #49b4bb, transparent)",
            top: `${10 + i * 16}%`,
            left: `${10 + i * 20}%`,
            opacity: 0,
            borderRadius: "2px",
            animation: `shootingStar ${3 + i}s ease-in-out ${i * 1.8}s infinite`,
            transform: "rotate(45deg)",
          }}
        />
      ))}

      {/* ── Horizontal scan line — decorative ── */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 z-0 h-[1px] opacity-20"
        style={{
          background: "linear-gradient(to right, transparent, #49b4bb, #8b5cf6, transparent)",
          animation: "scanLine 8s ease-in-out infinite",
        }}
      />

      {/* ── Hero text — meaningful content ── */}
      <header className="flex flex-col items-center relative z-20" aria-label="Introduction">
        <div className="pointer-events-none text-center">
          <p className="opacity-60 text-gray-300 text-sm tracking-[0.3em] uppercase mb-2">
            I&apos;m
          </p>
          <h1
            className={`${satisfy.className} text-5xl sm:text-7xl font-bold italic text-white`}
            style={{
              textShadow: "0 0 40px rgba(73,180,187,0.4), 0 0 80px rgba(139,92,246,0.2)",
            }}
          >
            Aswanth C
          </h1>
        </div>
        <p className="text-gray-400 max-w-md mx-auto text-center px-4 mt-4 text-[15px] leading-relaxed">
          A passionate{" "}
          <strong className="font-semibold bg-gradient-to-r from-[#49b4bb] via-purple-400 to-pink-500 bg-clip-text text-transparent">
            MERN Stack Developer
          </strong>
          {" "}building modern web solutions with clean design and robust code
        </p>
      </header>

    </div>
  );
};

export default Hero;
