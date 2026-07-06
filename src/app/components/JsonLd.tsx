/**
 * JSON-LD Structured Data for Aswanth C's Portfolio.
 *
 * Implements Person + ProfilePage schema which is the correct schema.org
 * type for personal portfolio/resume pages. This helps search engines
 * understand the page content and can power rich results.
 *
 * Rendered as a <script> tag in the document <head> by Next.js layout.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://aswanthgovind.site/#person",
      name: "Aswanth C",
      givenName: "Aswanth",
      familyName: "C",
      jobTitle: "Full Stack Developer",
      description:
        "Self-taught MERN Stack Developer with experience building full-stack web applications. Skilled in React.js, Node.js, Express.js, MongoDB, TypeScript, and Next.js.",
      url: "https://aswanthgovind.site",
      image: {
        "@type": "ImageObject",
        url: "https://aswanthgovind.site/profile.jpeg",
        width: 800,
        height: 800,
      },
      email: "mailto:aswanthc7025@gmail.com",
      sameAs: [
        "https://github.com/Aswanth9496",
        "https://www.linkedin.com/in/aswanth-c/",
        "https://leetcode.com/u/Aswanth7025/",
        "https://x.com/AswanthC430689",
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Redux",
        "Tailwind CSS",
        "REST APIs",
        "JWT Authentication",
        "Full Stack Development",
        "MERN Stack",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Brototype",
        url: "https://www.brototype.com/",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "MERN Stack Development Training",
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "Brototype",
        },
      },
      worksFor: {
        "@type": "Organization",
        name: "GrowMyHotel",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://aswanthgovind.site/#webpage",
      url: "https://aswanthgovind.site",
      name: "Aswanth C | Full Stack Developer Portfolio",
      description:
        "Portfolio of Aswanth C — a Full Stack MERN Developer from Kerala, India. View projects, experience, and skills in React, Node.js, MongoDB, and Next.js.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://aswanthgovind.site/#website",
        url: "https://aswanthgovind.site",
        name: "Aswanth C Portfolio",
        description: "Personal portfolio and resume of Aswanth C",
        inLanguage: "en-US",
      },
      about: {
        "@id": "https://aswanthgovind.site/#person",
      },
      mainEntity: {
        "@id": "https://aswanthgovind.site/#person",
      },
      dateModified: "2026-07-06",
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://aswanthgovind.site",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://aswanthgovind.site/#projects",
      name: "Portfolio Projects",
      description: "Full-stack web applications built by Aswanth C",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Zomestay",
            description:
              "A full-stack hospitality management platform featuring booking and property management modules. Built with React.js, Node.js, Express.js, MongoDB, JWT, and Redux.",
            url: "https://zomestay.com/",
            applicationCategory: "WebApplication",
            author: { "@id": "https://aswanthgovind.site/#person" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Nysha Beauty Lounge",
            description:
              "A salon management platform with booking and appointment features built with React.js, Node.js, Express.js, MongoDB, and Cloudinary.",
            url: "https://nyshabeautylounge.com/",
            applicationCategory: "WebApplication",
            author: { "@id": "https://aswanthgovind.site/#person" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Task Kerala",
            description:
              "A membership management platform for an organization with Admin and Member dashboards, event registration, and Razorpay payment integration.",
            applicationCategory: "WebApplication",
            author: { "@id": "https://aswanthgovind.site/#person" },
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
