import React from "react";
import aboutBannerImage from "../assets/about-bg.png";
import AboutWhoWeAre from "../components/AboutPage/AboutWhoWeAre";
import VisionAndMission from "../components/AboutPage/VisionAndMission";

const About = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[250px]">
        <img
          src={aboutBannerImage}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/ flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        <AboutWhoWeAre/>
        <VisionAndMission/>
      </div>
    </div>
  );
};

export default About;
