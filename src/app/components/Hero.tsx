"use client";
import React from "react";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

const Hero: React.FC = () => {
  return (
    <div className="relative h-[100vh] flex items-center justify-center bg-[#000000] w-screen overflow-hidden">
      {/* Ambient Glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,121,249,0.4) 0%, rgba(192,132,252,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Hero text */}
      <div className="flex flex-col items-center relative z-10">
        <div className="pointer-events-none">
          <p className="opacity-80 text-start">I'm,</p>
          <h1
            className={`${satisfy.className} text-4xl text-center sm:text-6xl font-bold mb-4 italic text-white`}
          >
            Aswanth C
          </h1>
        </div>
        <p className="text-gray-400 max-w-md mx-auto group text-center px-4">
          A passionate{" "}
          <span className="font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            FULL STACK ENGINEER
          </span>
          , building modern web solutions with clean design and robust code
        </p>
      </div>
    </div>
  );
};

export default Hero;
