import React from "react";

const Footer = () => {
  const spanClass = `text-gray-200 px-1 hover:text-[#49b4bb] cursor-pointer font-medium`;
  return (
    <div id="footer" className="py-20 lg:pt-30">
      <p className="text-[10px] sm:text-[13px] font-normal text-gray-400 py-2 border-t border-[#17264b]">
        Design meets <span className={spanClass}>logic</span> — where{" "}
        <span className={spanClass}>creativity</span> compiles flawlessly.
        Powered by <span className={spanClass}>curiosity</span> and{" "}
        <span className={spanClass}>Next.js</span>.
      </p>
    </div>
  );
};

export default Footer;

