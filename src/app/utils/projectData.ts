const projectsData = [
  {
    image: "",
    name: "Zomestay",
    href: "#",
    category: "Property Management & Hospitality Platform",
    techstack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Redux",
      "JWT",
      "Razorpay",
      "Cloudinary",
      "AWS S3",
    ],
    details:
      "Zomestay is a full-stack property management and hospitality platform supporting both Resorts (room-based) and Villas (entire-property) booking models. Built a multi-role system for Guests, Hosts, and Admins with JWT-based authentication and fine-grained role-based access control. Engineered a dual booking strategy — room-level inventory management for resorts and atomic property-wide blocking for villas — with Razorpay payment integration and automated order reconciliation. Developed a Host dashboard for property onboarding, room configuration, availability management, and booking oversight. Implemented real-time booking workflows, dynamic pricing, Cloudinary-powered media uploads, and AWS S3 for asset storage, delivering a seamless end-to-end hospitality experience.",
  },
  {
    image: "",
    name: "Task Kerala",
    href: "#",
    category: "Membership Management Platform",
    techstack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    details:
      "A membership management platform for an organization. Built Admin and Member dashboards with distinct roles and permissions. Developed event registration and management workflows with integrated payment gateway functionality using Razorpay.",
  },
  {
    image: "",
    name: "Nysha Beauty Lounge",
    href: "#",
    category: "Salon Management Platform",
    techstack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    details:
      "A salon management platform with booking and appointment features. Built a fully responsive interface for both admins and customers. Integrated Cloudinary for efficient media management, enabling stylists to showcase their portfolio.",
  },
];

export default projectsData;