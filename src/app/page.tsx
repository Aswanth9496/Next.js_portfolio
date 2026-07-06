import React from "react";
import Hero from "./components/Hero";
import HeroCursor from "./components/HeroCursor";
import SectionOne from "./components/SectionOne";
import DetailsSection from "./components/DetailsSection";
import SocialLinks from "./components/ui/SocialLinks";
import DownloadButtonMobile from "./components/ui/DownloadButtonMobile";

const page = () => {
  return (
    <div className="w-full">
      {/* Fixed hero background — full viewport, behind everything */}
      <div className="w-full fixed inset-0 -z-10">
        <Hero />
      </div>

      {/* Invisible cursor tracker layer over the hero */}
      <HeroCursor />

      {/* Hero viewport: social links pinned to bottom-center */}
      <div className="relative h-screen w-full flex items-end justify-center pb-10">
        <SocialLinks />
      </div>

      {/* Main two-column layout below hero */}
      <div className="w-full lg:grid lg:grid-cols-2 bg-[#0f172a]">
        {/* LEFT — sticky sidebar (desktop only) */}
        <div className="hidden lg:block relative">
          <SectionOne />
        </div>

        {/* RIGHT — scrollable detail sections */}
        <DetailsSection />
      </div>

      {/* Floating mobile download button */}
      <DownloadButtonMobile />
    </div>
  );
};

export default page;
