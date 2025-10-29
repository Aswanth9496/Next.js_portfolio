import React from "react";
import SectionMobileHead from "./ui/SectionMobileHead";

const About = () => {
  return (
    <div id="about" className="pt-20 lg:px-4">
      <SectionMobileHead title="About" className="mb-3" />
      <p className="text-gray-400 text-[14px] leading-6">
        I am a <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">self-taught Full Stack Developer</span>, 
        with a foundation in commerce and a <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">BBA degree</span>. 
        My professional path initially took me into the world of accounting, where I spent two years. However, despite the stability 
        and structure of this field, I realized that my true passion lay in <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">technology</span>. 
        The desire for more creativity and problem-solving led me to explore the world of web development.
      </p>

      <p className="text-gray-400 text-[14px] leading-6 mt-4">
        Switching careers wasn’t easy, and the thought of venturing into a tech field seemed daunting at first. 
        But when a friend introduced me to a <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">coding bootcamp</span>, 
        I decided to take the leap and dive into the world of programming. Starting from scratch, I taught myself the 
        fundamentals of <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">JavaScript</span> and the 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> MERN stack</span>, driven by a deep curiosity 
        and passion for building things from the ground up.
      </p>

      <p className="text-gray-400 text-[14px] leading-6 mt-4">
        The skills I’ve gained through this self-taught journey have not only shaped my technical expertise but have also 
        instilled in me a sense of <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer">resilience</span> 
        and a commitment to lifelong learning. I approach development with a keen eye for detail and a focus on creating 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> intuitive</span>, 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> scalable</span>, and 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> impactful</span> digital solutions.
      </p>

      <p className="text-gray-400 text-[14px] leading-6 mt-4">
        If you're looking for a developer who combines a strong foundation in 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> business</span> with a drive for 
        <span className="text-white px-1 hover:text-[#49b4bb] cursor-pointer"> tech innovation</span>, let's connect and 
        collaborate on building the next big thing!
      </p>
    </div>
  );
};

export default About;
