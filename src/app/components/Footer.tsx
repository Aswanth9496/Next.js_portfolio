import React from "react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      aria-label="Site footer"
      className="mt-20 pb-10"
    >
      <div className="border-t border-[#17264b] pt-4 space-y-2">
        {/* Tagline */}
        <p className="text-[12px] sm:text-[13px] font-normal text-gray-500 leading-relaxed">
          Design meets{" "}
          <span className="text-gray-200 font-medium">logic</span> — where{" "}
          <span className="text-gray-200 font-medium">creativity</span> compiles
          flawlessly. Powered by{" "}
          <span className="text-gray-200 font-medium">curiosity</span> and{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 font-medium hover:text-[#49b4bb] transition-colors duration-200"
            aria-label="Built with Next.js — opens in new tab"
          >
            Next.js
          </Link>
          .
        </p>

        {/* Copyright + contact */}
        <p className="text-[11px] text-gray-600">
          &copy; {currentYear} Aswanth C. All rights reserved.{" "}
          <Link
            href="https://www.linkedin.com/in/aswanth-c/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#49b4bb] transition-colors duration-200 underline underline-offset-2"
            aria-label="Connect on LinkedIn — opens in new tab"
          >
            Connect on LinkedIn
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
