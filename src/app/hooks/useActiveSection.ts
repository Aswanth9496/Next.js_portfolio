"use client";

import { useEffect, useState } from "react";

const NAV_SECTIONS = ["about", "experiance", "skills", "projects"];

/**
 * Shared hook: sets up a single IntersectionObserver for all navigation
 * sections. Consumed by both Navbar and SectionOne so only one observer
 * instance is ever running in the page.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 0.3,
    });

    const elements = NAV_SECTIONS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
