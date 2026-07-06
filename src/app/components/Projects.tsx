import React from "react";
import Link from "next/link";
import projectsData from "../utils/projectData";

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-20">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      {/* Visual section header */}
      <div className="flex w-full items-center gap-2 mb-4 pointer-events-none">
        <div className="w-full h-1 bg-white/60" />
        <span className="flex-shrink-0 font-medium text-[16px] capitalize text-white" aria-hidden="true">
          Projects
        </span>
      </div>

      <ul className="flex flex-col gap-1 list-none" role="list" aria-label="Portfolio projects">
        {projectsData.map((item) => {
          const isExternal = item.href !== "#";
          return (
            <li key={item.name}>
              <article
                className="group rounded-md py-4 px-4 hover:bg-[#17264b]/40 border border-transparent hover:border-[#17264b] flex flex-col gap-3 transition-all duration-300"
                aria-label={`${item.name} — ${item.category}`}
              >
                {/* Title row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-[#49b4bb] transition-colors duration-200 leading-snug">
                      {isExternal ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline focus:outline-none focus:underline"
                          aria-label={`Visit ${item.name} — opens in new tab`}
                        >
                          {item.name}
                          <span className="sr-only"> (opens in new tab)</span>
                        </Link>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className="text-[12px] text-gray-500 italic mt-0.5">
                      <span className="sr-only">Category: </span>
                      {item.category}
                    </p>
                  </div>
                  {isExternal && (
                    <span
                      className="flex-shrink-0 text-[11px] font-semibold text-[#49b4bb] border border-[#49b4bb]/40 bg-[#49b4bb]/10 px-2 py-0.5 rounded-full leading-5"
                      aria-label="Live project"
                    >
                      Live
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  {item.details}
                </p>

                {/* Tech stack badges */}
                <ul className="flex flex-wrap gap-1.5 list-none" aria-label={`Technologies used in ${item.name}`}>
                  {item.techstack.map((tech) => (
                    <li key={tech}>
                      <span className="text-[11px] font-medium bg-[#17264b] text-gray-400 px-2 py-1 rounded">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
