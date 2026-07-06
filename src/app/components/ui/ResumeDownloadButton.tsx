"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";


const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Use a temporary anchor with the download attribute — no fetch/blob needed
    const link = document.createElement("a");
    link.href = "/Aswanth_Resume (3).pdf";
    link.download = "Aswanth_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`group bg-transparent relative w-auto text-[12px] cursor-pointer overflow-hidden rounded-full border py-2 px-2 text-center font-medium transition-all duration-300 ${
        isDownloading ? "cursor-not-allowed opacity-80" : ""
      }`}
    >
      {!isDownloading ? (
        <>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#FFFFFF] h-2 w-2 rounded-full transition-all duration-800 group-hover:scale-[100.8]"></div>
            <span className="inline-block transition-all duration-800 group-hover:translate-x-12 group-hover:opacity-0">
              Download Resume
            </span>
          </div>
          <div className="text-[#0f172a] absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-800 group-hover:-translate-x-5 group-hover:opacity-100">
            <span>Download</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center gap-2 px-4">
          {/* Flying paper animation */}
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 animate-paperFly">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="15" x2="15" y2="15" />
                <line x1="9" y1="11" x2="13" y2="11" />
              </svg>
            </div>
          </div>
          <span className="animate-pulse">Downloading...</span>
          <ArrowRight className="animate-arrowFly" />
        </div>
      )}
    </button>
  );
};

DownloadButton.displayName = "DownloadButton";
export default DownloadButton;