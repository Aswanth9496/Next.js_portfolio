import Link from "next/link";
import React from "react";

// Hoisted outside component — no re-creation on each render
const experianceData = [
  {
    year: "DEC 2025 – PRESENT",
    role: "Full Stack Engineer",
    company: "GrowMyHotel",
    href: "#",
    details:
      "Working as a Full Stack Engineer at GrowMyHotel, building and maintaining scalable web applications for the hospitality industry. Developing feature-rich dashboards, REST APIs, and seamless user experiences using the MERN stack.",
  },
  {
    year: "MAY 2025 – DEC 2025",
    role: "Software Developer",
    company: "Freelance",
    href: "#",
    details:
      "Worked as an independent freelance software developer, delivering full-stack web application solutions for various clients. Built custom MERN stack applications, integrated third-party APIs, and delivered responsive, production-ready products.",
  },
  {
    year: "APR 2024 – MAY 2025",
    role: "MERN Stack Trainee",
    company: "Brototype",
    href: "https://www.brototype.com/",
    details:
      "Completed an intensive MERN stack training program, building full-stack applications from the ground up. Developed REST APIs and authentication systems (JWT), worked with MongoDB and PostgreSQL databases, and integrated third-party services like Razorpay and Cloudinary.",
  },
];

const Experiance = () => {
  return (
    <section id="experiance" aria-labelledby="experience-heading" className="mt-20">
      <h2
        id="experience-heading"
        className="sr-only"
      >
        Work Experience
      </h2>

      {/* Visual section header */}
      <div className="flex w-full items-center gap-2 mb-4 pointer-events-none">
        <div className="w-full h-1 bg-white/60" />
        <span className="flex-shrink-0 font-medium text-[16px] capitalize text-white" aria-hidden="true">
          Experience
        </span>
      </div>

      <ol className="flex flex-col gap-1" aria-label="Work experience timeline">
        {experianceData.map((item) => (
          <li key={`${item.company}-${item.year}`}>
            <Link
              href={item.href}
              target={item.href === "#" ? "_self" : "_blank"}
              rel={item.href === "#" ? undefined : "noopener noreferrer"}
              aria-label={`${item.role} at ${item.company}, ${item.year}`}
              className="group rounded-md py-4 px-4 hover:bg-[#17264b]/40 border border-transparent hover:border-[#17264b] flex flex-col sm:flex-row gap-3 transition-all duration-300"
            >
              {/* Date column */}
              <div className="sm:w-36 flex-shrink-0">
                <time
                  className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mt-0.5 whitespace-nowrap"
                  aria-label={item.year}
                >
                  {item.year}
                </time>
              </div>

              {/* Content column */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-white group-hover:text-[#49b4bb] transition-colors duration-200 leading-snug">
                  {item.role}
                  <span className="font-normal text-gray-400"> · {item.company}</span>
                </h3>
                <p className="text-[13px] text-gray-400 mt-2 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experiance;
