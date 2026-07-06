"use client";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiRedux,
  SiPostman,
  SiAmazon,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";

const skills = [
  // Frontend
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "white", category: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "white", category: "Backend" },

  // Database
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },

  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "white", category: "Tools" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900", category: "Tools" },
  { name: "Cloudinary", icon: FaCloud, color: "#3448C5", category: "Tools" },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-20">
      <h2 id="skills-heading" className="sr-only">
        Technical Skills
      </h2>

      {/* Visual section header */}
      <div className="flex w-full items-center gap-2 mb-4 pointer-events-none">
        <div className="w-full h-1 bg-white/60" />
        <span className="flex-shrink-0 font-medium text-[16px] capitalize text-white" aria-hidden="true">
          Skills
        </span>
      </div>

      <ul
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2.5 list-none"
        aria-label="Technical skills list"
        role="list"
      >
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="group flex items-center gap-2.5 border border-[#17264b] px-3 py-2.5 rounded-md cursor-default transition-all duration-300 hover:border-opacity-100"
            style={{ "--skill-color": skill.color } as React.CSSProperties}
            aria-label={`${skill.name} — ${skill.category}`}
          >
            <skill.icon
              aria-hidden="true"
              className="text-base flex-shrink-0 [color:var(--skill-color)]"
            />
            <span className="text-[13px] [color:var(--skill-color)] truncate">
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
