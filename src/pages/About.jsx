import React from "react";
import { motion } from "framer-motion";
import aboutBannerImage from "../assets/about-bg.png";
import AboutWhoWeAre from "../components/AboutPage/AboutWhoWeAre";
import VisionAndMission from "../components/AboutPage/VisionAndMission";
import Ceo from "../components/AboutPage/Ceo";
import ContactBanner from "../components/ContactBanner";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="w-full"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px]">
        <img
          src={aboutBannerImage}
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-800/35 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>

        {/* Bottom Arch */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Content Section */}
      <div>
        <AboutWhoWeAre />
        <VisionAndMission />
        <Ceo />
        <ContactBanner />
      </div>
    </motion.div>
  );
};

export default About;
