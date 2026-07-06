import React from "react";
import About from "./About";
import Experiance from "./Experiance";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const DetailsSection = () => {
  return (
    /*
     * On desktop (lg+): right column of the two-col grid.
     * Consistent horizontal padding (px-8 xl:px-12) matches the left panel.
     * pt-16 aligns the first section top with the left panel's profile block.
     */
    <div className="w-full px-6 sm:px-8 xl:px-12 pt-6 lg:pt-16 pb-16 scrollbar-hide">
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default DetailsSection;
