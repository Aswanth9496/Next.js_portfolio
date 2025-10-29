import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 text-[22px] text-gray-400 items-center">
      <Link
        href={
          process.env.NEXT_PUBLIC_GITHUB_URL ||
          "https://github.com/Aswanth9496"
        }
        target="_blank"
        className="hover:text-white"
      >
        <FaGithub />
      </Link>
      <Link
        href={
          process.env.NEXT_PUBLIC_LINKEDIN_URL ||
          "https://www.linkedin.com/in/aswanth-c/"
        }
        target="_blank"
        className="hover:text-white"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={
          process.env.NEXT_PUBLIC_INSTA_URL ||
          "https://www.instagram.com"
        }
        target="_blank"
        className="hover:text-white"
      >
        <FaInstagram />
      </Link>
      <Link
        href={
          process.env.NEXT_PUBLIC_LEETCODE_URL ||
          "https://leetcode.com/u/Aswanth7025/"
        }
        target="_blank"
        className="hover:text-white"
      >
        <SiLeetcode />
      </Link>
    </div>
  );
};

export default SocialLinks;
