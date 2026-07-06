import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-10 lg:pt-0">

      {/* Mobile-only profile card (desktop sidebar already shows this) */}
      <div className="lg:hidden flex items-center gap-4 mb-6" aria-hidden="true">
        {/* Avatar with spinning ring — decorative, desktop sidebar is the canonical version */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <div
            className="absolute -inset-[3px] rounded-full z-0"
            style={{
              background: "conic-gradient(from 0deg, #49b4bb, #3b82f6, #8b5cf6, #49b4bb)",
              animation: "spin-ring 4s linear infinite",
            }}
          />
          <div className="absolute inset-0 rounded-full z-10 bg-[#0f172a]" />
          <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
            <Image
              src="/profile.jpeg"
              alt="Aswanth C — Full Stack Developer profile photo"
              fill
              sizes="64px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
        {/* Name + title */}
        <div>
          <p className="text-white font-bold text-lg leading-tight">Aswanth C</p>
          <p className="text-[#49b4bb] text-[12px] font-medium tracking-wide mt-0.5">
            MERN Stack Developer
          </p>
        </div>
      </div>

      {/* Section heading — visible on mobile, hidden on desktop (sidebar shows it) */}
      <h2
        id="about-heading"
        className="lg:hidden text-white font-semibold text-[16px] mb-4 uppercase tracking-widest"
      >
        About
      </h2>
      {/* Desktop decorative heading line (rendered by SectionMobileHead on mobile only) */}
      <div className="hidden lg:flex w-full items-center gap-2 mb-4 pointer-events-none">
        <div className="w-full h-1 bg-white/60" />
        <h2 id="about-heading-desktop" className="flex-shrink-0 font-medium text-[16px] capitalize text-white">
          About
        </h2>
      </div>

      <p className="text-gray-400 text-[14px] leading-7">
        I am a{" "}
        <strong className="text-white font-semibold">
          self-taught MERN Stack Developer
        </strong>
        , with a background in{" "}
        <span className="text-white">
          Business Administration (BBA, Kannur University)
        </span>
        . My professional path initially took me through accounting and business,
        but I realized my true passion lay in{" "}
        <span className="text-white">technology</span>
        . The desire for creativity and problem-solving led me to dive deep into
        web development.
      </p>

      <p className="text-gray-400 text-[14px] leading-7 mt-4">
        I joined a{" "}
        <span className="text-white">coding bootcamp at Brototype</span>{" "}
        and spent over a year mastering the{" "}
        <strong className="text-white font-semibold">MERN stack</strong>{" "}
        — React.js, Node.js, Express.js, and MongoDB. I have since built
        real-world applications including a hospitality management platform
        (Zomestay), a membership management system (Task Kerala), and a salon
        booking app (Nysha Beauty Lounge).
      </p>

      <p className="text-gray-400 text-[14px] leading-7 mt-4">
        I am fluent in{" "}
        <span className="text-white">English</span>
        ,{" "}
        <span className="text-white">Hindi</span>
        , and{" "}
        <span className="text-white">Malayalam</span>
        . I approach development with a focus on creating{" "}
        <span className="text-white">intuitive</span>
        ,{" "}
        <span className="text-white">scalable</span>
        , and{" "}
        <span className="text-white">impactful</span>{" "}
        digital solutions.
      </p>

      <p className="text-gray-400 text-[14px] leading-7 mt-4">
        I am actively seeking{" "}
        <strong className="text-white font-semibold">internship</strong>{" "}
        and{" "}
        <strong className="text-white font-semibold">full-time opportunities</strong>{" "}
        to strengthen my technical skills and contribute to meaningful products.
        Let&apos;s connect and build something great!
      </p>
    </section>
  );
};

export default About;
