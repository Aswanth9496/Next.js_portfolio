"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Aswanth9496",
    icon: FaGithub,
    label: "View Aswanth C's GitHub profile",
    color: "#ffffff",
    hoverColor: "#e0e0e0",
  },
  {
    href:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/in/aswanth-c/",
    icon: FaLinkedin,
    label: "Connect with Aswanth C on LinkedIn",
    color: "#0A66C2",
    hoverColor: "#1d8fef",
  },
  {
    href:
      process.env.NEXT_PUBLIC_INSTA_URL || "https://www.instagram.com",
    icon: FaInstagram,
    label: "Follow Aswanth C on Instagram",
    color: "#E1306C",
    hoverColor: "#f7547e",
  },
  {
    href:
      process.env.NEXT_PUBLIC_LEETCODE_URL ||
      "https://leetcode.com/u/Aswanth7025/",
    icon: SiLeetcode,
    label: "View Aswanth C's LeetCode profile",
    color: "#FFA116",
    hoverColor: "#ffb84d",
  },
];

const SocialLinks = () => {
  return (
    <nav aria-label="Social media links" className="flex gap-5 items-center">
      {socialLinks.map(({ href, icon: Icon, label, color, hoverColor }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — opens in new tab`}
          className="transition-transform duration-200 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49b4bb] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          style={{ color }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = hoverColor)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = color)
          }
        >
          <Icon size={22} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
};

export default SocialLinks;
